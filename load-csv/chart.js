function makeChart(cars){
    var carslabels = cars.map(function(d){
        return d.Make;
    });
    var carprice = cars.map(function(d){
        return +d.price;
    });
    var carmsrp = cars.map(function(d){
        return +d.MSRP
    })

    console.log(carprice)
    console.log(carmsrp)
    console.log(carslabels)

    var chart = new Chart('chart', {
        type: "horizontalBar",
        options:{
            maintainAspectRatio: false,
            legend:{
                display: false
            }
        },
        data: {
            labels: carslabels,
            datasets:[
                {
                    data: carprice,
                    backgroundColor: "#3e95cd"
                },
                {
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