var url = "https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeId/448?format=json"

$.ajax({
	url: url,
	type: "GET",
    
}.then(function(response){}), {
	success: function(result)
	{
		console.log(result);
	},
	error: function(xhr, ajaxOptions, thrownError)
	{
		console.log(xhr.status);
		console.log(thrownError);
	}
});
   