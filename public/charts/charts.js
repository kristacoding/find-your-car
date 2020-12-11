var ctx = document.getElementById('myChart').getContext('2d');

// Our labels along the x-axis
var city = ["Baltimore", "Boise", "FairFax", "New York", "Philadelphia", "San Francisco", "Topeka", "Memphis", "Atlanta", "Wilmington", "Richmond", "Knoxville", "Miami", "Charlotte", "Charleston", "Atlanta", "Jacksonville", "Detroit", "Chicago"];

// For drawing the lines
var Baltimore = [60000];
var Boise = [75000];
var Topeka = [130000];
var Memphis = [200000];
var Atlanta = [140000, 8000];
var FairFax = [20000];
var NewYork = [80000, 20000];
var Philadelphia = [10000, 150000];
var SanFrancisco = [40000];
var Wilmington = [55000];
var Richmond = [50000];
var Knoxville = [85000];
var Miami = [45000];
var Charlotte = [110000];
var Charleston = [25000];
var Jacksonville = [90000];
var Chicago = [35000];
var Detroit = [65000];



var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: city,
        datasets: [{
            data: Baltimore,
            label: "Baltimore",
            borderColor: "red",
            fill: true
        },
        {
            data: Boise,
            label: "Boise",
            borderColor: "blue",
            fill: true
        },
        {
            data: Topeka,
            label: "Topeka",
            borderColor: "green",
            fill: true
        },
        {
            data: Memphis,
            label: "Memphis",
            borderColor: "orange",
            fill: true
        },
        {
            data: Atlanta,
            label: "Atlanta",
            borderColor: "purple",
            fill: true
        },
        {
            data: FairFax,
            label: "FairFax",
            borderColor: "yellow",
            fill: true
        },
        {
            data: NewYork,
            label: "New York",
            borderColor: "pink",
            fill: true
        },
        {
            data: Philadelphia,
            label: "Philadelphia",
            borderColor: "brown",
            fill: true
        },
        {
            data: SanFrancisco,
            label: "San Francisco",
            borderColor: "blue",
            fill: true
        },
        {
            data: Wilmington,
            label: "Wilmington",
            borderColor: "green",
            fill: true
        },
        {
            data: Richmond,
            label: "Richmond",
            borderColor: "red",
            fill: true
        },
        {
            data: Knoxville,
            label: "Knoxville",
            borderColor: "orange",
            fill: true
        },
        {
            data: Miami,
            label: "Miami",
            borderColor: "purple",
            fill: true
        },
        {
            data: Charlotte,
            label: "Charlotte",
            borderColor: "pink",
            fill: true
        },
        {
            data: Charleston,
            label: "Charleston",
            borderColor: "green",
            fill: true
        },
        {
            data: Jacksonville,
            label: "Jacksonville",
            borderColor: "red",
            fill: true
        },
        {
            data: Chicago,
            label: "Chicago",
            borderColor: "orange",
            fill: true
        },
        {
            data: Detroit,
            label: "Detroit",
            borderColor: "yello",
            fill: true
        },
    ]
    }
})
