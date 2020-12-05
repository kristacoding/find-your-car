var express = require("express");

var router = express.Router();

// Import the model (car.js) to use its database functions.
var db = require("../models");

module.exports = function(app) {

    // Get route for all post
    app.get("/", function (req, res) {
        db.Car.findAll({})
        .then(function(dbCar) {
            res.json(dbCar);
        });
    });

    // Get route for posts that make users search 
    app.get("/cars", function(req, res) {
        db.Car.findAll({
            where: {
                city: req.body.city, 
                make: req.body.make, 
                model: req.body.model, 
                year: req.body.year, 
                mileage: req.body.mileage,
                purpose:  false
            }
        })
        .then(function(dbCar) {
            res.json(dbCar);
        });
    });

    // Post route for adding new post to sell a car
    app.post("/new-car", function(req, res) {
        console.log(req.body);
        db.Car.create({
            city: req.body.city, 
            make: req.body.make, 
            model: req.body.model, 
            year: req.body.year, 
            mileage: req.body.mileage,
            purpose: true
        })
        .then(function(dbCar) {
            res.json(dbCar);
        });
    });

    app.delete("/cars/:id", function(req, res) {
        db.Car.destory({
            where: {
                id: req.params.id
            }
        })
        .then(function(dbCar) {
            res.json(dbCar);
        });
    });

    // Put route for updating cars, not sure that this one is correct
    app.put("/cars", function(req, res) {
        db.Car.update(req.body,
          {
            where: {
              id: req.body.id
            }
          })
          .then(function(dbCar) {
            res.json(dbCar);
          });
      });
};





