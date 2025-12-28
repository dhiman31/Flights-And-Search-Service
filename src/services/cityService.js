const {CityRespository} = require('../repository/index');

class cityService{
    constructor(){
        this.CityRespository = new CityRespository;
    }

    async createCity (data) {
        try {
            if(Array.isArray(data))
            {
                const city = await this.CityRespository.createManyCity(data);
                return city;
            }
            else
            {
                const city = await this.CityRespository.createOneCity(data);
                return city;
            }
        } catch (error) {
            console.log("Error occured in city service");
            throw {error};
        }
    }
    async deleteCity (cityId) {
        try {
            await this.CityRespository.deleteCity(cityId);
        } catch (error) {
            console.log("Error occured in city service");
            throw {error};
        }
    }
    async updateCity (cityId , data) {
        try {
            const city = await this.CityRespository.updateCity(cityId , data);
            return city;
        } catch (error) {
            console.log("Error occured in city service");
            throw {error};
        }
    }
    async getCity (cityId) {
        try {
            const city = await this.CityRespository.getCity(cityId);
            return city;
        } catch (error) {
            console.log("Error occured in city service");
            throw {error};
        }
    }
    async getall(filter){
        try {
            const cities = await this.CityRespository.getall({name:filter.name});
            return cities;
        } catch (error) {
            console.log("Error occured in city service");
            throw {error};
        }
    }

    async getCityAirports(cityId){
        try {
            const Airports = await this.CityRespository.getCityAirports(cityId);
            return Airports;
        } catch (error) {
            console.log("Error occured in city service");
            throw {error};
        }
    }
}

module.exports = cityService;