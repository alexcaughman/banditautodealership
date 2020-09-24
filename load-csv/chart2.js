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

    // sort by company
    GMCCarsprice = [];
    GMCCarsMSRP = [];
    FordCarsprice = [];
    FordCarsMSRP = [];
    ChevroletCarsprice = [];
    ChevroletCarsMSRP = [];

    for(var i =0; i<cars.length;i++){
        if (cars[i].Make == "GMC"){
            GMCCarsprice.push(parseInt(cars[i].price))
            GMCCarsMSRP.push(parseInt(cars[i].MSRP))
        }
        else if (cars[i].Make == "Ford"){
            FordCarsprice.push(parseInt(cars[i].price))
            FordCarsMSRP.push(parseInt(cars[i].MSRP))
        }
        else if (cars[i].Make == "Chevrolet") {
            ChevroletCarsprice.push(parseInt(cars[i].price))
            ChevroletCarsMSRP.push(parseInt(cars[i].MSRP))
        }
    }

    console.log(cars)
    console.log(GMCCarsprice)
    console.log(GMCCarsMSRP)

    function arrayAverage(arr){
        //Find the sum
        var sum = 0;
        for(var i in arr) {
            sum += arr[i];
        }
        //Get the length of the array
        var numbersCnt = arr.length;
        //Return the average / mean.
        return (sum / numbersCnt);
    }
    // avg price of GMC Cars
    var GMCavgprice = arrayAverage(GMCCarsprice);
    var GMCavgMSRP = arrayAverage(GMCCarsMSRP);

    var Fordavgprice = arrayAverage(FordCarsprice);
    var FordavgMSRP = arrayAverage(FordCarsMSRP);

    var Chevroletavgprice = arrayAverage(ChevroletCarsprice);
    var ChevroletavgMSRP = arrayAverage(ChevroletCarsMSRP);

    var caravgpricetogether = [GMCavgprice, Fordavgprice, Chevroletavgprice];
    var caravgmsrptogether = [GMCavgMSRP, FordavgMSRP, ChevroletavgMSRP];




    // creating chartjs horizontal bar chart
    var chart = new Chart('chart', {
        type: "bar",
        options:{
            maintainAspectRatio: true,
            legend:{
                display: true
            },
            title: {
                display: true,
                text: "Average Craigslist vs MSRP",
                fontSize: 30
            }
        },
        data: {
            labels: ["GMC", "Ford", "Chevrolet"],
            datasets:[
                {
                    label: "Car Price on Craigslist",
                    data: caravgpricetogether,
                    backgroundColor: "#3e95cd"
                },
                {
                    label: "MSRP",
                    data: caravgmsrptogether,
                    backgroundColor: "#8e5ea2"

                }
            ]
        }
    });
}





// https://www.createwithdata.com/chartjs-and-csv/

d3.csv("../Car API Call/merged_data.csv")
.then(makeChart);