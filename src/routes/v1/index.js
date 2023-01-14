const express = require("express");
const cityControllers = require("../../controllers/city-controller");
const FlightController = require("../../controllers/flight-controller");
const AirportController = require("../../controllers/airport-controller");

const router = express.Router();
//city api
router.post("/city",cityControllers.create);
router.delete("/city/:id",cityControllers.destroy);
router.get("/city/:id",cityControllers.get);
router.get("/city",cityControllers.getAllCities);
router.patch("/city/:id",cityControllers.update);

//flight-api

router.post(
    '/flights', 
    FlightController.create
);
router.get("/flights",FlightController.getAllFlights);

router.post("/airports",AirportController.create);

module.exports = router;