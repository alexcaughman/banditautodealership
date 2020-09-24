function makeChart(cars){
    // car labels its own array
    var carlabels = cars.map(function(d){
        return d.Make;
    });
    // car price in its own array
    var carprice = cars.map(function(d){
        return +d.price;
    });
    // car msrp in its own array
    var carmsrp = cars.map(function(d){
        return +d.MSRP;
    })

    // car year in itts own array
    var caryear = cars.map(function(d){
        return +d.Year

    })

    // loop carmodel in an array as the map function doesn't work
    carmodel=[]
    for(var i = 0; i <cars.length; i++){
        carmodel.push(cars[i].Model)
    }

    // combinining year, carlabel and model together
    carlabelmodel = []
    for(var i = 0; i < carmodel.length; i++){
        carlabelmodel.push(caryear[i]+" " +carlabels[i]+" - "+carmodel[i])
    }

    // creating chartjs horizontal bar chart
    var chart = new Chart('chart', {
        type: "horizontalBar",
        options:{
            maintainAspectRatio: true,
            legend:{
                display: true
            },
            title: {
                display: true,
                text: "Craigslist vs MSRP",
                fontSize: 30
            }
        },
        data: {
            labels: carlabelmodel,
            datasets:[
                {
                    label: "Car Price on Craigslist",
                    data: carprice,
                    backgroundColor: "#3e95cd"
                },
                {
                    label: "MSRP",
                    data: carmsrp,
                    backgroundColor: "#8e5ea2"

                }
            ]
        }
    });
}



// https://www.createwithdata.com/chartjs-and-csv/

d3.csv("../Car API Call/merged_data.csv")
.then(makeChart);