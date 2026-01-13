const {Flights , Airport , City} = require('../models/index');
const { Op } = require('sequelize');
const AirportRepository = require('./airport_repository');
const CityRepository = require('./city_repository');

class FlightRepository {

    async #getAirportIdsByCity(cityName) {
        const cityRepo = new CityRepository();
        const cities = await cityRepo.getall({ name: cityName });
        const airportsId = [];
        for (const city of cities) {
            const cityWithAirports = await cityRepo.getCityAirports(city.id);
            cityWithAirports.Airports.forEach(a => airportsId.push(a.id));
        }
        return airportsId;
    }

    async #filtering(data) {
        let filter = {};

        if (data.departureCity) {
            const airportIds = await this.#getAirportIdsByCity(data.departureCity);
            filter.departureAirportId = { [Op.in]: airportIds };
        }

        if (data.arrivalCity) {
            const airportIds = await this.#getAirportIdsByCity(data.arrivalCity);
            filter.arrivalAirportId = { [Op.in]: airportIds };
        }

        let priceFilter = [];
        if (data.minPrice) priceFilter.push({ price: { [Op.gte]: data.minPrice } });
        if (data.maxPrice) priceFilter.push({ price: { [Op.lte]: data.maxPrice } });

        if (priceFilter.length > 0) {
            filter[Op.and] = priceFilter;
        }

        return filter;
    }


    async createFlight(data) {
        try {
            const flight = await Flights.create(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async getFlight(flightId) {
        try {
            const flight = await Flights.findByPk(flightId);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async getAllFlights(filter) {
        try {
            const filterObject = await this.#filtering(filter);
            const flight = await Flights.findAll({
                where: filterObject
            });
            console.log(flight);

            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async updateFlights(flightId, data) {
         try {
            await Flights.update(data, {
                where: {
                    id: flightId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }


    async searchFlights(filters) {
    const whereClause = {
        totalSeats: { [Op.gt]: 0 }
    };

    // Price filtering
    if (filters.minPrice || filters.maxPrice) {
        whereClause.price = {};
        if (filters.minPrice) {
        whereClause.price[Op.gte] = Number(filters.minPrice);
        }
        if (filters.maxPrice) {
        whereClause.price[Op.lte] = Number(filters.maxPrice);
        }
    }

    return Flights.findAll({
        where: whereClause,
        attributes: ['departureTime', 'arrivalTime', 'price', 'totalSeats' , 'id','flightNumber'],
        include: [
            {
            model: Airport,
            as: 'departureAirport',
            required: true,  // very imp
            attributes: ['name'],
            include: {
                model: City,
                required: true,
                attributes: ['name'],
                where: {
                name: { [Op.like]: `${filters.departureCity}%` }
                }
            }
            },
            {
            model: Airport,
            as: 'arrivalAirport',
            required: true,
            attributes: ['name'],
            include: {
                model: City,
                required: true,
                attributes: ['name'],
                where: {
                name: { [Op.like]: `${filters.arrivalCity}%` }
                }
            }
            }
        ]
        });
  }


}

module.exports = FlightRepository;
/*
{
    where: {}
}

*/