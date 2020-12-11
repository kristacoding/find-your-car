// Import the model (car.js) to use its database functions.
var db = require("../models");
//var image = require("./carImage");


module.exports = function (app) {

  // Get route for all post
  app.get("/", function (req, res) {
    db.Car.findAll({ raw: true }).then(
      function (data) {
        res.render("index", { cars: data });
      }
    )
      //.then(image())

    // Post route for adding new post to sell a car
    app.post("/new-car", function (req, res) {
      db.Car.create({
        city: req.body.city,
        make: req.body.make,
        model: req.body.model,
        year: parseInt(req.body.year),
        mileage: parseInt(req.body.mileage),
      })
        .then(function (dbCar) {
          res.json(dbCar);
        });
    });

    //route for deleting car
    app.delete("/cars/:id", function (req, res) {
      db.Car.destroy({
        where: {
          id: req.params.id
        }
      })
        .then(function (dbCar) {
          res.json(dbCar);
        });
    });

  });
}