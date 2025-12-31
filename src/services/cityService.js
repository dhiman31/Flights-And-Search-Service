const {CityRepository} = require('../repository/index');

class cityService{
    constructor(){
        this.CityRepository = new CityRepository;
    }

    async createCity (data) {
        try {
            if(Array.isArray(data))
            {
                const city = await this.CityRepository.createManyCity(data);
                return city;
            }
            else
            {
                const city = await this.CityRepository.createOneCity(data);
                return city;
            }
        } catch (error) {
            console.log("Error occured in city service");
            throw {error};
        }
    }
    async deleteCity (cityId) {
        try {
            await this.CityRepository.deleteCity(cityId);
        } catch (error) {
            console.log("Error occured in city service");
            throw {error};
        }
    }
    async updateCity (cityId , data) {
        try {
            const city = await this.CityRepository.updateCity(cityId , data);
            return city;
        } catch (error) {
            console.log("Error occured in city service");
            throw {error};
        }
    }
    async getCity (cityId) {
        try {
            const city = await this.CityRepository.getCity(cityId);
            return city;
        } catch (error) {
            console.log("Error occured in city service");
            throw {error};
        }
    }
    async getall(filter){
        try {
            const cities = await this.CityRepository.getall({name:filter.name});
            return cities;
        } catch (error) {
            console.log("Error occured in city service");
            throw {error};
        }
    }

    async getCityAirports(cityId){
        try {
            const Airports = await this.CityRepository.getCityAirports(cityId);
            return Airports;
        } catch (error) {
            console.log("Error occured in city service");
            throw {error};
        }
    }
}

module.exports = cityService;