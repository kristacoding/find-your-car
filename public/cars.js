$(function () {
    //Click event for adding a car
    $(".car-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        //Grab the car information form the form field.  
        var newCar = {
            city: $("#city").val().trim(),
            make: $("#make").val().trim(),
            model: $("#model").val().trim(),
            year: $("#year").val().trim(),
            mileage: $("#mileage").val().trim(),
        };
        console.log(newCar)

        // Send the POST request using ajax.
        $.ajax("/new-car", {
            type: "POST",
            data: newCar
        }).then(
            function () {
                console.log("Added new Car");
                alert("New Car has been Added");
            }
        );
    });

    //Delete car
    $(".delete").on("click", function () {
        var id = $(this).attr("id");
        console.log("Click") //this works

        // Send the DELETE request.
        $.ajax("/cars/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("deleted car", id);
                // Reload the page to get the updated list
                alert("Car has been deleted")
            }
        );
    });
});

