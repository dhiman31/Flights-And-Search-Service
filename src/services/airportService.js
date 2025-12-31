const {AirportRepository} = require('../repository/index');


class airportService{
    constructor(){
        this.AirportRepository = new AirportRepository;
    }

    async createAirport (data) {
        try {
            if(Array.isArray(data))
            {
                const airport = await this.AirportRepository.createManyAirport(data);
                return airport;
            }
            else
            {
                const airport = await this.AirportRepository.createOneAirport(data);
                return airport;
            }
        } catch (error) {
            console.log("Error occured in service");
            throw {error};
        }
    }
    async deleteAirport (airportId) {
        try {
            await this.AirportRepository.deleteAirport(airportId);
        } catch (error) {
            console.log("Error occured in service");
            throw {error};
        }
    }
    async updateAirport (airportId , data) {
        try {
            const airport = await this.AirportRepository.updateAirport(airportId , data);
            return airport;
        } catch (error) {
            console.log("Error occured in service");
            throw {error};
        }
    }
    async getAirport (airportId) {
        try {
            const airport = await this.AirportRepository.getAirport(airportId);
            return airport;
        } catch (error) {
            console.log("Error occured in service");
            throw {error};
        }
    }
}

module.exports = airportService;