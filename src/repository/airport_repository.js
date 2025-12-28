const { where } = require('sequelize');
const {Airport} = require('../models/index');

class AirportRepository{
    async createOneAirport(data){

        try {
        const airport = await Airport.create(data);
        return airport;

        } catch (error) {
            console.log("Problem in airport repository");
            return {error};
        }

    };

    async createManyAirport(dataArray){

        try {
        const airport = await Airport.bulkCreate(dataArray);
        return airport;

        } catch (error) {
            console.log("Problem in airport repository");
            return {error};
        }

    };

    async updateAirport(airportId,data){
        try {
            const airport = await Airport.update(data,{
                where:{
                    id:airportId
                }
            });
            return airport;

        } catch (error) {
            console.log("Problem in airport repository");
            return {error};
        }
    };

    async deleteAirport(airportId){
        try {
            await Airport.destroy(
                {
                    where: {
                        id : airportId
                    }
                }
            );

        } catch (error) {
            console.log("Problem in airport repository");
            return {error};
        }
    };

    async getAirport(airportId){
        try {
            const airport = await Airport.findByPk(airportId);
            return airport;
        } catch (error) {
            console.log("Problem in airport repository")
            throw {error};
        }
    };

};

module.exports = AirportRepository;