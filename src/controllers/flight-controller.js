const {FlightService} = require("../services/index");
const flightService = new FlightService();

const create = async (req,resp)=>{
    try {
        const flight = await flightService.createFlight(req.body);
        return resp.status(200).json({
            data:flight,
            success:true,
            message:"Flight created successfully",
            err:{}
        })
    } catch (error) {
        console.log(error);
        return resp.status(500).json({
            data:{},
            success:false,
            message:"Not able to create a flight",
            err:error
        });
    }
}




module.exports = {
    create
}