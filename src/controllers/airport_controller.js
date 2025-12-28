const {airportService} = require('../services/index');

const AirportServ = new airportService();

const create = async (req , res) => {
    try {
        const airport = await AirportServ.createAirport(req.body);
        return res.status(201).json({
            data : airport,
            success : true,
            message : 'Successfully created a airport',
            err : {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message : 'Not able to create airport',
            err : error
        })
    }
}

// in REST : DELETE. -> /airport/:id  // i.e. in REST you get airport id in param
const destroy = async (req , res) => {
    try {
        const response = await AirportServ.deleteAirport(req.params.id);
        return res.status(200).json({
            data : response,
            success : true,
            message : 'Successfully deleted the airport',
            err : {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message : 'Not able to delete airport',
            err : error
        })
    }
}

//GET -> /airport/:id
const get = async (req , res) => {
    try {
        const airport = await AirportServ.getAirport(req.params.id);
        return res.status(200).json({
            data : airport,
            success : true,
            message : 'Successfully retrieved a airport',
            err : {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message : 'Not able to retrieve airport',
            err : error
        })
    }
}

// PATCH -> /airport/:id -> req.body
const update = async (req , res) => {
    try {
        const airport = await AirportServ.updateAirport(req.params.id , req.body);
        return res.status(200).json({
            data : airport,
            success : true,
            message : 'Successfully updated the airport',
            err : {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message : 'Not able to update airport',
            err : error
        })
    }
}

module.exports = {
    create,
    destroy,
    get,
    update,
}