module.exports = app => {
    const trip = require("../controllers/trip.controller.js");

    const router = require("express").Router();

    // Create a new Trip
    router.post("/", trip.create);

    // Retrieve a single Trip with id
    router.get("/:id", trip.findOne);

    // Update a Trip with id
    router.put("/:id", trip.update);

    // Delete a Trip with id
    router.delete("/:id", trip.delete);

    app.use("/api/trips", router);
};