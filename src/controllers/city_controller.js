const {cityService} = require('../services/index');

const CityServ = new cityService();

const create = async (req , res) => {
    try {
        const city = await CityServ.createCity(req.body);
        return res.status(201).json({
            data : city,
            success : true,
            message : 'Successfully created a city',
            err : {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message : 'Not able to create city',
            err : error
        })
    }
}

// in REST : DELETE. -> /city/:id  // i.e. in REST you get city id in param
const destroy = async (req , res) => {
    try {
        const response = await CityServ.createCity(req.params.id);
        return res.status(200).json({
            data : response,
            success : true,
            message : 'Successfully deleted the city',
            err : {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message : 'Not able to delete city',
            err : error
        })
    }
}

//GET -> /city/:id
const get = async (req , res) => {
    try {
        const city = await CityServ.createCity(req.params.id);
        return res.status(200).json({
            data : city,
            success : true,
            message : 'Successfully retrieved a city',
            err : {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message : 'Not able to retrieve city',
            err : error
        })
    }
}

// PATCH -> /city/:id -> req.body
const update = async (req , res) => {
    try {
        const city = await CityServ.createCity(req.params.id , req.body);
        return res.status(200).json({
            data : city,
            success : true,
            message : 'Successfully updated the city',
            err : {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message : 'Not able to update city',
            err : error
        })
    }
}

module.exports = {
    create,
    destroy,
    get,
    update
}