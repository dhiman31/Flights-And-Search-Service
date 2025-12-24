const { where } = require('sequelize');
const {City} = require('../models/index');

class CityRespository{
    // create a row
    async createCity( {name} ) {  // this function takes an object as argument and here weh have destructured the object and extracted name parameter from that object
        try {
            const city = await City.create( {name} ); // now we will use that name to create city ... City.create() accepts an object with the attributes as its memebers .... the model has name as attribute .... so we have to send an object with one member i.e. name.........we will use name .... {name} : this creates an object then and there with name as its member
            return city;
        } catch (error) {
            throw {error};
        }
    }

    // delete a row
    async deleteCity(cityid) {
        try {
            await City.destroy(
                {
                    where: {
                        id : cityid
                    }
                }
            );
        } catch (error) {
            throw {error};
        }
    }

}

module.exports = CityRespository;