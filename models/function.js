// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var car = {
  all: function(cb) {
    orm.all("cars", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(city, make, model, year, mileage, cb) {
    orm.create("cars", city, make, model, year, mileage, function(res) {
      cb(res);
    });
  },

  update: function(city, make, model, year, mileage, cb) {
    orm.update("cars", city, make, model, year, mileage, function(res) {
      cb(res);
    });
  },

  delete: function(city, make, model, year, mileage, cb) {
    orm.delete("cars", city, make, model, year, mileage, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller.
module.exports = car;