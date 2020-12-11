## Overview

The Car Marketplace application allows users to add and buy pre-owned cars. It is a simple as entering the basic information about your car to sell, and then searching through our exisitng database to find your new pre-owned car. Once you found the pre-owned car of your dream, click 'Buy now!" and it will be removed from our database! 

## Tools 
<ul>
    <li>Node.JS</li>
    <li>Express.JS</li>
    <li>Handlebars.JS</li>
    <li>MySQL</li>
    <li>Sequelize</li>
    <li>Heroku</li>

## Description 

The goal of the application was to create a location for users to add a car that they would like to sell then look through exisitng looking cars. 

The front-end of this application was built through handlebars with a bootstrap foundation to create a dynamic and sophisticated interface for the user. When the user first comes to the site, they are met with form to enter their car and a list of existing cars available to buy. The form ask the user include the city, make, model, year and mileage of the car that they would like to sell. When the user clicks submit, the car is then added to the database and then after the page is reloaded can be found at the bottom of the list. An alert will also pop up to notify the user that the car has been added. 

The database that maintains all the pre-owned cars is programmed through MySQL and Sequalize. Sequalize allowed us to easily create a database with an id as our primary key, updateat and createat columns. To that list, we added the same fields that the user filled out in the form (location, make, model, year, mileage). All attributes are concerned a string, expect for year and mileage, which had to be converted using parseInt. 

The backend of the application uses node.JS and express.JS to create routes to call the information from the database to the frontend handlebars code. The first route used is the GET route, which pulls all the current information from the cars already existing in the database. 
