const {Flights} = require("../models/index");

class FlightRepository{

    async createFlight(flightData){
        try {
            const flight = await Flights.create(flightData);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer while creating the flight.");
            throw error;
        }
    }
}

module.exports = FlightRepository;
