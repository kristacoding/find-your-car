DROP DATABASE IF EXISTS cars_db;
CREATE DATABASE cars_db;

CREATE TABLE cars(
    id INT auto_increment,
    location VARCHAR(100),
    make VARCHAR(100),
    model VARCHAR(100),
    mileage INT,
    year INT,
    purpose BOOLEAN,
    PRIMARY KEY(id)
);