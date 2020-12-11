module.exports.image = function() {

carImages = document.querySelectorAll('.carImage');
console.log(carImages);

carImages.forEach((carImage) => {
    const data = carImage.dataset;
    const request = `https://api.carsxe.com/images?key=piu0ccibl_ooh1rdq57_04g2p3zqf&year=${data.year}&make=${data.make}&model=${data.model}&color=blue&format=json`;
    console.log(request);
    fetch(request, { mode: 'no-cors' })
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }
                // Examine the text in the response
                response.json().then(function (data) {
                    console.log(data);
                });
            }
        )
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });
    });
}  
