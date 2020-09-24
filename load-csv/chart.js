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

    // console.log(carprice)
    // console.log(carmsrp)
    // console.log(carslabels)

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
                    data1: carprice,
                    data2: carmsrp
                }
            ]
        }
    });
}

// https://www.createwithdata.com/chartjs-and-csv/

d3.csv("../Car_API_Call/merged_data.csv")
.then(makeChart);