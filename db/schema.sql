DROP DATABASE IF EXISTS cars_db;
CREATE DATABASE cars_db;

CREATE TABLE cars(
    id INT auto_increment,
    city VARCHAR(100),
    make VARCHAR(100),
    model VARCHAR(100),
    year INT, 
    mileage INT,
    PRIMARY KEY(id)
);