const {CityRespository} = require('../repository/index');

class cityService{
    constructor(){
        this.CityRespository = new CityRespository;
    }

    async createCity (data) {
        try {
            const city = await this.CityRespository.createCity(data);
            return city;
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
    async getall(){
        try {
            const cities = await this.CityRespository.getall();
            return cities;
        } catch (error) {
            console.log("Error occured in city service");
            throw {error};
        }
    }
}

module.exports = cityService;