module.exports = function(sequelize, DataTypes) {
    var Car = sequelize.define("Car", {
        Location: DataTypes.STRING,
        Make: DataTypes.STRING,
        Model: DataTypes.STRING,
        Mileage: DataTypes.INTEGER,
        Year: DataTypes.INTEGER,
        purpose: DataTypes.BOOLEAN        
    });
    return Car;
};
  