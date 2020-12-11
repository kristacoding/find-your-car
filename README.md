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

The backend of the application uses node.JS and express.JS to create routes to call the information from the database to the frontend handlebars code. The first route used is the GET route, which pulls all the current car information into cards to be viewed on the front-end. 

A 'Buy Now' button is added at the frontend to call the delete route when clicked. The detele route is connected trhough the cars.js file while runs after someone clicks that button and then associates the specific listing to be deleted by the ID number assigned to the car in the database by sequalize. Then using the slug (/cars/:id), the id of the car is able to be pulled using the WHERE filter and req.params from the URL. This identifies the exact listing we want to delete. 

The final route used in our application is the PUT/UPDATE route. This is called when the user adds the information about the car that they would like to list in our marketplace and clicks the 'Submit button'. In the same javascript file as the 'Buy Now' button, we also call the database there as well. This call is for a new URL (/new-car), which pulls all the informatoin from the body of the form using req.bod.# (updated with each form name). 

As a team, we experienced our first major roadblock with communication here. Because we had two different people working on the frontend verse backend. We found that we had idenitified the fields differently; therefore, the program crashed each time we tried to run it. Additionally, we learned the importance of capitizations vs lowercase letters in coding. We had different areas which had a capital 'M' for make and model verse the lower case 'm'. To solve this, we had to go throuhg and update each file to make sure that they were consist. 

## Links
Github: https://github.com/kristacoding/find-your-car 
Deloyed: https://find-your-car.herokuapp.com/

## Images

Homepage/ Car Marketplace Form 
<img src="public\img\car marketplace.png">


Available Cars
<img src="public\img\available cars.png">

