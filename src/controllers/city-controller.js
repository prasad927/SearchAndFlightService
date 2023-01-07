const {CityService} = require("../services/index");

const cityService = new CityService();

const create = async (req,resp) =>{
    try {
        const city = await cityService.createCity(req.body);
        return resp.status(201).json({
            data:city,
            success : true,
            message:"Successfully created a city",
            err:{}
        });
    }catch(error){
        console.log(error);
        return resp.status(500).json({
            data:{},
            success:false,
            message:"Not able to create a city",
            err:error
        });
    }
}

const destroy = async (req,resp) =>{
    try {
        const response = await cityService.deleteCity(req.params.id);
        return resp.status(200).json({
            data:response,
            success : true,
            message:"Successfully deleted a city",
            err:{}
        });
    }catch(error){
        console.log(error);
        return resp.status(500).json({
            data:{},
            success:false,
            message:"Not able to delete a city",
            err:error
        });
    }
}

const get = async (req,resp) =>{
    try {
        const response = await cityService.getCity(req.params.id);
        return resp.status(200).json({
            data:response,
            success : true,
            message:"Successfully fetch a city",
            err:{}
        });
    }catch(error){
        console.log(error);
        return resp.status(500).json({
            data:{},
            success:false,
            message:"Not able to fetch a city",
            err:error
        });
    }
}

const update = async (req,resp) =>{
    try {
        const response = await cityService.updateCity(req.params.id,req.body);
        return resp.status(200).json({
            data:response,
            success : true,
            message:"Successfully update a city",
            err:{}
        });
    }catch(error){
        console.log(error);
        return resp.status(500).json({
            data:{},
            success:false,
            message:"Not able to update a city",
            err:error
        });
    }
}

const getAllCities = async (req,resp)=>{
    try {
        const response = await cityService.getAllCities(req.query);
        return resp.status(200).json({
            data:response,
            success : true,
            message:"Successfully fetched all the cities",
            err:{}
        });
    } catch (error) {
        console.log(error);
        return resp.status(500).json({
            data:{},
            success:false,
            message:"Not able to fetch the cities",
            err:error
        });
    }
}


module.exports = {
    create,
    destroy,
    get,
    update,
    getAllCities
};