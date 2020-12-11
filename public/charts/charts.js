var Chart = require('chart.js');
var ctx = document.getElementById('myChart');

// Our labels along the x-axis
var city = ["Baltimore", "Boise", "FairFax", "New York", "Philadelphia", "San Francisco", "Topeka", "Memphis", "Atlanta", "Wilmington", "Richmond", "Knoxville", "Miami", "Charlotte", "Charleston", "Atlanta", "Jacksonville", "Detroit", "Chicago"];

// For drawing the lines
var Baltimore = [60000];
var Boise = [75000];
var Topeka = [130000];
var Memphis = [200000];
var Atlanta = [140000];
var FairFax = [20000];
var New York = [80000, 20000];
var Philadelphia = [10000, 150000];
var San Francisco = [40000];
var Wilmington = [55000];
var Richmond = [500000];
var Knoxville = [85000];
var Miami = [45000];
var Charlotte = [110000];
var Charleston = [25000];
var Jacksonville = [90000];
var Chicago = [35000];
var Detroit = [65000];



var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: city,
        datasets: [{
            data: Baltimore,
            label: "Baltimore",
            borderColor: "#3e95cd",
            fill: false
        },
        {
            data: Boise,
            label: "Boise",
            borderColor: "#3e95cd",
            fill: false
        },
        {
            data: Topeka,
            label: "Topeka",
            borderColor: "#3e95cd",
            fill: false
        },
        {
            data: Memphis,
            label: "Memphis",
            borderColor: "#3e95cd",
            fill: false
        },
        {
            data: Atlanta,
            label: "Atlanta",
            borderColor: "#3e95cd",
            fill: false
        },
        {
            data: FairFax,
            label: "FairFax",
            borderColor: "#3e95cd",
            fill: false
        },
        {
            data: New York,
            label: "New York",
            borderColor: "#3e95cd",
            fill: false
        },
        {
            data: Philadelphia,
            label: "Philadelphia",
            borderColor: "#3e95cd",
            fill: false
        },
        {
            data: San Francisco,
            label: "San Francisco",
            borderColor: "#3e95cd",
            fill: false
        },
        {
            data: Wilmington,
            label: "Wilmington",
            borderColor: "#3e95cd",
            fill: false
        },
        {
            data: Richmond,
            label: "Richmond",
            borderColor: "#3e95cd",
            fill: false
        },
        {
            data: Knoxville,
            label: "Knoxville",
            borderColor: "#3e95cd",
            fill: false
        },
        {
            data: Miami,
            label: "Miami",
            borderColor: "#3e95cd",
            fill: false
        },
        {
            data: Charlotte,
            label: "Charlotte",
            borderColor: "#3e95cd",
            fill: false
        },
        {
            data: Charleston,
            label: "Charleston",
            borderColor: "#3e95cd",
            fill: false
        },
        {
            data: Jacksonville,
            label: "Jacksonville",
            borderColor: "#3e95cd",
            fill: false
        },
        {
            data: Chicago,
            label: "Chicago",
            borderColor: "#3e95cd",
            fill: false
        },
        {
            data: Detroit,
            label: "Detroit",
            borderColor: "#3e95cd",
            fill: false
        },
    ]
    }
})

module.exports(myChart); 