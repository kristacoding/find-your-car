var express = require("express");

// Import the model (car.js) to use its database functions.
var db = require("../models");

module.exports = function(app) {

    // Get route for all post
    app.get("/", function(req, res) {
        db.Car.findAll({raw:true}).then(
          function(data){
            res.render("index", {cars:data});
          }
        )
      });

    // Get route for posts that make users search 
    // app.get("/cars", function(req, res) {
    //     db.Car.findAll({
    //         where: {
    //             city: req.body.city, 
    //             make: req.body.make, 
    //             model: req.body.model, 
    //             year: req.body.year, 
    //             mileage: req.body.mileage,
    //             purpose:  false
    //         }
    //     })
    //     .then(function(dbCar) {
    //         res.json(dbCar);
    //     });
    // });

    // Post route for adding new post to sell a car
    app.post("/new-car", function(req, res) {
        db.Car.create({
            city: req.body.city, 
            make: req.body.make, 
            model: req.body.model, 
            year: parseInt(req.body.year), 
            mileage: parseInt(req.body.mileage),
        })
        .then(function(dbCar) {
            res.json(dbCar);
        });
    });

    //route for deleting car
    app.delete("/cars/:id", function(req, res) {
        db.Cars.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(function(dbCar) {
            res.json(dbCar);
        });
    });

    // // Put route for updating cars from buy to sold
    // app.put("/cars/:id", function(req, res) {
    //     db.Car.update(req.params,
    //       {
    //         where: {
    //           id: req.params.id
    //         }
    //       })
    //       .then(function(dbCar) {
    //         res.json(dbCar);
    //       });
    //   });
};