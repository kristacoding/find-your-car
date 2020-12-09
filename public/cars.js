$(function () {
    //Click event for adding a car
    $(".car-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        //Grab the car information form the form field.  
        var newCar = {
            car_location: $("#city").val().trim(),
            car_make: $("#make").val().trim(),
            car_model: $("#model").val().trim(),
            car_year: $("#year").val().trim(),
            car_milage: $("#milage").val().trim(),
            car_purpose: false,
        };
        // Send the POST request using ajax.
        $.ajax("/new-car", {
            type: "POST",
            data: newCar
        }).then(
            function () {
                console.log("Added new Car");
                // Reload the page to get the updated list
                // location.reload();
            }
        );
    });
})