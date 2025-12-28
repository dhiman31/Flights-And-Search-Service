const {AirportRespository} = require('../repository/index');


class airportService{
    constructor(){
        this.AirportRespository = new AirportRespository;
    }

    async createAirport (data) {
        try {
            if(Array.isArray(data))
            {
                const airport = await this.AirportRespository.createManyAirport(data);
                return airport;
            }
            else
            {
                const airport = await this.AirportRespository.createOneAirport(data);
                return airport;
            }
        } catch (error) {
            console.log("Error occured in service");
            throw {error};
        }
    }
    async deleteAirport (airportId) {
        try {
            await this.AirportRespository.deleteAirport(airportId);
        } catch (error) {
            console.log("Error occured in service");
            throw {error};
        }
    }
    async updateAirport (airportId , data) {
        try {
            const airport = await this.AirportRespository.updateAirport(airportId , data);
            return airport;
        } catch (error) {
            console.log("Error occured in service");
            throw {error};
        }
    }
    async getAirport (airportId) {
        try {
            const airport = await this.AirportRespository.getAirport(airportId);
            return airport;
        } catch (error) {
            console.log("Error occured in service");
            throw {error};
        }
    }
}

module.exports = airportService;