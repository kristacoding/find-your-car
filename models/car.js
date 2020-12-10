module.exports = function(sequelize, DataTypes) {
    var Car = sequelize.define("Car", {
        city: DataTypes.STRING,
        make: DataTypes.STRING,
        model: DataTypes.STRING,
        year: DataTypes.INTEGER,
        mileage: DataTypes.INTEGER,
        createdAt: {
            field: 'created_at',
            type: DataTypes.DATE,
        },
        updatedAt: {
            field: 'updated_at',
            type: DataTypes.DATE,
        },      
    });        
    return Car;
};


  
  