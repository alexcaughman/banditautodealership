
d3.csv("../Car_API_Call/merged_data.csv").then(function(carData){
    console.log(carData)

    var south = [];
    var southPrices =[];
    var west = [];
    var westPrices = [];
    var northeast = [];
    var northeastPrices = [];
    var midwest = [];
    var midwestPrices = []; 

    carData.forEach(x => {
        if (x.state ==='ct' || x.state === 'me' || x.state === 'ma' || x.state === 'nh' ||
        x.state === 'ri' || x.state === 'vt' || x.state === 'nj' || x.state === 'ny' || x.state === 'pa'){
        northeast.push(x);
        }
        else if (x.state ==='il' || x.state === 'in' || x.state === 'mi' || x.state === 'oh' ||
        x.state === 'wi' || x.state === 'ia' || x.state === 'ks' || x.state === 'mn' || x.state === 'mo' ||
        x.sate === 'nd' || x.state === 'sd'){
        midwest.push(x);
        }
        else if (x.state ==='de' || x.state === 'fl' || x.state === 'ga' || x.state === 'md' ||
        x.state === 'nc' || x.state === 'sc' || x.state === 'va' || x.state === 'dc' || x.state === 'wv' ||
        x.state === 'al' || x.state === 'ky' || x.state === 'ms' || x.state === 'tn' || x.state === 'ar' ||
        x.state === 'la' || x.state === 'ok' || x.state === 'tx'){
        south.push(x);
        var price = x.price;
        southPrices.push(price)
        }
        else{
            west.push(x);
        }
    });

    var southListings = south.length;
    var westListings = west.length;
    var northeastListings = northeast.length;
    var midwestListings = midwest.length; 

    // console.log(northeast);
    // console.log(midwest);
    console.log(south);
    console.log(southPrices);
    console.log(southListings);
    // console.log(west);


    var data = [{
        values: [southListings, westListings, northeastListings, midwestListings],
        labels: ['South', 'West', 'North East', 'Midwest'],
        type: 'pie'
      }];
      
      var layout = {
        height: 400,
        width: 500
      };
      
      Plotly.newPlot('myDiv', data, layout);
      
});
