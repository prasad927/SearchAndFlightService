const express = require("express");
const cityControllers = require("../../controllers/city-controller");

const router = express.Router();

router.post("/city",cityControllers.create);
router.delete("/city/:id",cityControllers.destroy);
router.get("/city/:id",cityControllers.get);
router.get("/city",cityControllers.getAllCities);
router.patch("/city/:id",cityControllers.update);


module.exports = router;