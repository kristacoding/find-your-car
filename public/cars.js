$(function () {
    //Click event for adding a car
    $(".car-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        //Grab the car information form the form field.  
        var newCar = {
            Location: $("#City").val().trim(),
            Make: $("#Make").val().trim(),
            Model: $("#Model").val().trim(),
            Year: $("#Year").val().trim(),
            Mileage: $("#Mileage").val().trim(),
            Sold: false,
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

    //Click event for "Buy Now" button.
    $(".change-sold").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        console.log("click");
        var id = $(this).attr("id");
        console.log(id);
        var carSold = $(this).data("sold");

        var newCarSold = {
            sold: "true"
        };

        // Send the PUT request using ajax.
        $.ajax("/cars/" + id, {
            type: "PUT",
            data: newCarSold
        }).then(
            function () {
                console.log("changed devour to", carSold);
                // Reload the page to get the updated list
                //location.reload();
            }
        );
    });

    //Delete car
    $(".delete").on("click", function(event) {
        var id = $(this).data("id");
    
        // Send the DELETE request.
        $.ajax("/cars/" + id, {
          type: "DELETE"
        }).then(
          function() {
            console.log("deleted car", id);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
});

