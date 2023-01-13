const {FlightRepository,AirplaneRepository}= require("../repository/index");
const {compareTime} = require("../utils/helper");

class FlightService{
    constructor(){
        this.flightRepository = new FlightRepository();
        this.airplaneRepository = new AirplaneRepository()
    }

    async createFlight(flightData){
         try {
            if(!compareTime(flightData.arrivalTime, flightData.departureTime)) {
                throw {error: 'Arrival time cannot be less than departure time'};
            }
            const airplaneInfo = await this.airplaneRepository.getAirplane(flightData.airplaneId);
            const flight = await this.flightRepository.createFlight({
                ...flightData,
                totalSeats:airplaneInfo.capacity
            });
            return flight;
         } catch (error) {
            console.log("Something went wrong in the service layer while creating flight");
            throw error;
         }
    }

    async getFlightData(){
        
    }
}

module.exports = FlightService;


/**
 * Sample Payload to create flight
 * {
 *   flightNumber,
 *  airplaneId ,
 *   departureAirportId,
 *   arrivalAirportId,
 *   arrivalTime,
 *   departureTime,
 *   price
 *   totalSeats -> airplane
 * }
 */