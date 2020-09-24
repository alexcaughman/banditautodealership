// Create Map, Passing In satelliteMap & earthquakes as Default Layers to Display on Load
var myMap = L.map("map", {
  center: [39.8283, -98.5795],
  zoom: 5,
});

  // Define variables for our tile layers
  var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  }).addTo(myMap);


// Load data from car.csv
d3.csv("../Car API Call/merged_data.csv").then(function(carData) {

  // Print the carData
  console.log(carData);

  // Creating choose filter
  var make = ["- choose"];
  var model = ["- choose"];
  var year = ["- choose"];
  var type = ["- choose"];
  var odometer = ["- choose"];
  var doors = ["- choose"];
  var drivetrain = ["- choose"];
  var transmission = ["- choose"];


  for (var i = 0; i < carData.length; i++){
    // lat/long marker
    var city = [carData[i].lat, carData[i].long]
    L.marker(city).addTo(myMap)

    // storing values to sort by make
    if (!make.includes(carData[i].Make)){
      make.push(carData[i].Make)
    }
    // sort by make
    var makeSort = make;
    makeSort.sort();

    // storing values to sort by model
    if (!model.includes(carData[i].Model)){
      model.push(carData[i].Model)
    }
    // sort by model
    var modelSort = model;
    modelSort.sort();

    // storing values to sort by year
    if (!year.includes(carData[i].Year)){
      year.push(carData[i].Year)
    }

    // sort by year
    var yearSort = year;
    yearSort.sort();
    
    // storing values to sort by type
    if (!type.includes(carData[i].Type)){
      type.push(carData[i].Type)
    }
    
    // sort by type
    var typeSort = type;
    typeSort.sort();

    // storing values to sort by odometer
    if (!odometer.includes(carData[i].odometer)){
      odometer.push(carData[i].odometer)
    }

    // sort by odometer
    var odometerSort = odometer;
    odometerSort.sort();

    // storing values to sort by Doors
    if (!doors.includes(carData[i].Doors)){
      doors.push(carData[i].Doors)
    }

    // sort by doors
    var doorsSort = doors;
    doorsSort.sort();

    // storing values to sort by Drivetrain
    if (!drivetrain.includes(carData[i].Drivetrain)){
      drivetrain.push(carData[i].Drivetrain)
    }

    // sort by drivetrain
    var drivetrainSort = drivetrain;
    drivetrainSort.sort();

    // storing values to sort by Transmission
    if (!transmission.includes(carData[i].Transmission)){
      transmission.push(carData[i].Transmission)
    }

    // sort by transmission
    var transmissionSort = transmission;
    transmissionSort.sort();
  }
  // Add city list to html

  // Get needed HTML elements
  var tbody = d3.select("tbody");
  var button = d3.select("#filter-btn");
  var form = d3.select("form");

  var makeSelect = d3.select("#Make-select"); // add "option" elements here
  var modelSelect = d3.select("#Model-select");
  var yearSelect = d3.select("#Year-select");
  var typeSelect = d3.select("#Type-select");
  var odometerSelect = d3.select("#Odometer-select");
  var doorsSelect = d3.select("#Doors-select");
  var drivetrainSelect = d3.select("#Drivetrain-select");
  var transmissionSelect = d3.select("#Transmission-select");

  // Create event handlers
  button.on("click", filterData);
  form.on("submit", filterData);

  // Make option for make
  makeSort.forEach((car) => {
    var newMake = makeSelect.append("option");
    newMake.text(car);
  });

  // Make option for model
  modelSort.forEach((car) => {
    var newModel = modelSelect.append("option");
    newModel.text(car);
  });

  // Make option for year
  yearSort.forEach((car) => {
    var newYear = yearSelect.append("option");
    newYear.text(car);
  });

  // Make option for type
  typeSort.forEach((car) => {
    var newType = typeSelect.append("option");
    newType.text(car);
  });

  // Make option for odometer
  odometerSort.forEach((car) => {
    var newOdometer = odometerSelect.append("option");
    newOdometer.text(car);
  });

  // Make option for doors
  doorsSort.forEach((car) => {
    var newDoors = doorsSelect.append("option");
    newDoors.text(car);
  });

  // Make option for drivetrain
  drivetrainSort.forEach((car) => {
    var newDrivetrain = drivetrainSelect.append("option");
    newDrivetrain.text(car);
  });

  // Make option for transmission
  transmissionSort.forEach((car) => {
    var newTransmission = transmissionSelect.append("option");
    newTransmission.text(car);
  });

  console.log(make)
  console.log(model)
  console.log(year)
  console.log(type)
  console.log(odometer)
  console.log(doors)
  console.log(drivetrain)
  console.log(transmission)
  function filterData() {
    // Prevent refresh
    d3.event.preventDefault();
  
    // Get date from input
    var inputElement = d3.select(".form-control");
    // Get selected make, model, year, type, odometer, doors, drivetrain, and transmission
    //  empty value if default "- choose"
    var selectedMake = makeSelect.property("value");
    if (selectedMake === "- choose") {
      selectedMake = "";
    }
    var selectedModel = modelSelect.property("value");
    if (selectedModel === "- choose") {
      selectedModel = "";
    }
    var selectedYear = yearSelect.property("value");
    if (selectedYear === "- choose") {
      selectedYear = "";
    }
    var selectedType = typeSelect.property("value");
    if (selectedType === "- choose") {
      selectedType = "";
    }
    var selectedOdometer = odometerSelect.property("value");
    if (selectedOdometer === "- choose") {
      selectedOdometer = "";
    }
    var selectedDoors = doorsSelect.property("value");
    if (selectedDoors === "- choose") {
      selectedDoors = "";
    }
    var selectedDrivetrain = drivetrainSelect.property("value");
    if (selectedDrivetrain === "- choose") {
      selectedDrivetrain = "";
    }
    var selectedTransmission = transmissionSelect.property("value");
    if (selectedTransmission === "- choose") {
      selectedTransmission = "";
    }
   
    // filtering data
    var filteredData = carData.filter((car) => {
      return (
        (!selectedMake || car.Make === selectedMake) &&
        (!selectedModel || car.Model === selectedModel) &&
        (!selectedYear || car.Year === selectedYear) &&
        (!selectedType || car.Type === selectedType) &&
        (!selectedOdometer || car.Odometer === selectedodometer) &&
        (!selectedDoors || car.Doors === selectedDoors) &&
        (!selectedDrivetrain || car.Drivetrain === selectedDrivetrain) &&
        (!selectedTransmission || car.Transmission === selectedTransmission)
      );
    });
  

  }


  });

 
