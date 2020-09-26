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
    GMCCars = [];
    FordCars = [];
    ChevroletCars = [];
    SubaruCars = [];
    LexusCars = [];
    JaguarCars = [];
    HyundaiCars = [];
    NissanCars = [];
    DodgeCars = [];
    KiaCars = [];
    HondaCars = [];
    ChryslerCars = [];
    RAMCars = [];
    VolkswagenCars = [];
    JeepCars = [];
    ToyotaCars = [];
    LincolnCars = [];
    BuickCars = [];
    BMWCars = [];
    InfinitiCars = [];
    SaturnCars = [];
    AudiCars = [];
    CadillacCars = [];
    AcuraCars = [];
    MazdaCars = [];
    MercedesBenzCars = [];
    LandroverCars = [];
    VolvoCars = [];
    MercuryCars = [];
    MitsubishiCars = [];
    FerrariCars = [];;
    TeslaCars = [];
    AMCCars = [];
    PontiacCars = [];
    HarleyDavidsonCars = [];
    FreightlinerCars = [];
    MiniCars = [];
    ScionCars = [];
    UnknownCars = [];
    FiatCars = [];
    AlfaromeoCars = [];
    MitsubishifusoCars = [];
    AstonmartinCars=[];
    TexasbraggenterprisesCars = [];
    SuzukiCars = [];
    IsuzuCars = [];


    for(var i =0; i<cars.length;i++){
        if (cars[i].Make == "GMC"){
            GMCCars.push(parseInt(cars[i].Make))
        }
        else if (cars[i].Make == "Ford"){
            FordCars.push(parseInt(cars[i].Make))
        }
        else if (cars[i].Make == "Chevrolet") {
            ChevroletCars.push(parseInt(cars[i].Make))
        }
        else if (cars[i].Make == "Subaru"){
            SubaruCars.push(parseInt(cars[i].Make))
        }
        else if (cars[i].Make == "Lexus") {
            LexusCars.push(parseInt(cars[i].Make))
        }
        else if (cars[i].Make == "Jaguar"){
            JaguarCars.push(parseInt(cars[i].Make))
        }
        else if (cars[i].Make == "Hyundai") {
            HyundaiCars.push(parseInt(cars[i].Make))
        }        
        else if (cars[i].Make == "Nissan"){
            NissanCars.push(parseInt(cars[i].Make))
        }
        else if (cars[i].Make == "Dodge") {
            DodgeCars.push(parseInt(cars[i].Make))
        }        
        else if (cars[i].Make == "Kia"){
            KiaCars.push(parseInt(cars[i].Make))
        }
        else if (cars[i].Make == "Honda") {
            HondaCars.push(parseInt(cars[i].Make))
        }        
        else if (cars[i].Make == "Chrysler"){
            ChryslerCars.push(parseInt(cars[i].Make))
        }
        else if (cars[i].Make == "RAM") {
            RAMCars.push(parseInt(cars[i].Make))
        }        
        else if (cars[i].Make == "Volkswagen"){
            VolkswagenCars.push(parseInt(cars[i].Make))
        }
        else if (cars[i].Make == "Jeep") {
            JeepCars.push(parseInt(cars[i].Make))
        }        
        else if (cars[i].Make == "Toyota"){
            ToyotaCars.push(parseInt(cars[i].Make))
        }
        else if (cars[i].Make == "Lincoln") {
            LincolnCars.push(parseInt(cars[i].Make))
        }        
        else if (cars[i].Make == "Buick"){
            BuickCars.push(parseInt(cars[i].Make))
        }
        else if (cars[i].Make == "BMW") {
            BMWCars.push(parseInt(cars[i].Make))
        }        
        else if (cars[i].Make == "Infiniti"){
            InfinitiCars.push(parseInt(cars[i].Make))
        }
        else if (cars[i].Make == "Saturn") {
            SaturnCars.push(parseInt(cars[i].Make))
        }        
        else if (cars[i].Make == "Audi"){
            AudiCars.push(parseInt(cars[i].Make))
        }
        else if (cars[i].Make == "Cadillac") {
            CadillacCars.push(parseInt(cars[i].Make))
        }        
        else if (cars[i].Make == "Acura"){
            AcuraCars.push(parseInt(cars[i].Make))
        }
        else if (cars[i].Make == "Mazda") {
            MazdaCars.push(parseInt(cars[i].Make))
        }        
        else if (cars[i].Make == "Mercedes-Benz"){
            MercedesBenzCars.push(parseInt(cars[i].Make))
        }
        else if (cars[i].Make == "Land Rover") {
            LandroverCars.push(parseInt(cars[i].Make))
        }        
        else if (cars[i].Make == "Volvo"){
            VolvoCars.push(parseInt(cars[i].Make))
        }
        else if (cars[i].Make == "Mercury") {
            MercuryCars.push(parseInt(cars[i].Make))
        }        
        else if (cars[i].Make == "Mitsubishi"){
            MitsubishiCars.push(parseInt(cars[i].Make))
        }
        else if (cars[i].Make == "Ferrari") {
            FerrariCars.push(parseInt(cars[i].Make))
        }        
        else if (cars[i].Make == "Tesla"){
            TeslaCars.push(parseInt(cars[i].Make))
        }
        else if (cars[i].Make == "AMC") {
            AMCCars.push(parseInt(cars[i].Make))
        }        
        else if (cars[i].Make == "Pontiac"){
            PontiacCars.push(parseInt(cars[i].Make))
        }
        else if (cars[i].Make == "Harley-Davidson") {
            HarleyDavidsonCars.push(parseInt(cars[i].Make))
        }        
        else if (cars[i].Make == "Freightliner"){
            FreightlinerCars.push(parseInt(cars[i].Make))
        }
        else if (cars[i].Make == "Mini") {
            MiniCars.push(parseInt(cars[i].Make))
        }        
        else if (cars[i].Make == "Scion"){
            ScionCars.push(parseInt(cars[i].Make))
        }
        else if (cars[i].Make == "Unknown") {
            UnknownCars.push(parseInt(cars[i].Make))
        }        
        else if (cars[i].Make == "Fiat"){
            FiatCars.push(parseInt(cars[i].Make))
        }
        else if (cars[i].Make == "Alfa Romeo") {
            AlfaromeoCars.push(parseInt(cars[i].Make))
        }        
        else if (cars[i].Make == "Mitsubishi Fuso"){
            MitsubishifusoCars.push(parseInt(cars[i].Make))
        }
        else if (cars[i].Make == "Aston Martin") {
            AstonmartinCars.push(parseInt(cars[i].Make))
        }        
        else if (cars[i].Make == "Texas Bragg Enterprise"){
            TexasbraggenterpriseCars.push(parseInt(cars[i].Make))
        }
        else if (cars[i].Make == "Suzuki") {
            SuzukiCars.push(parseInt(cars[i].Make))
        }        
        else if (cars[i].Make == "Isuzu"){
            IsuzuCars.push(parseInt(cars[i].Make))
        }
        
    }


    // length of GMC Cars
    var GMClength = GMCCars.length

    var Fordlength = FordCars.length;

    var Chevroletlength = ChevroletCars.length;

    var Subarulength = SubaruCars.length;

    var Lexuslength = LexusCars.length;

    var Jaguarlength = JaguarCars.length;

    var Hyundailength = HyundaiCars.length;

    var Nissanlength = NissanCars.length;

    var Dodgelength = DodgeCars.length;

    var Kialength = KiaCars.length;

    var Hondalength = HondaCars.length;

    var Chryslerlength = ChryslerCars.length;

    var RAMlength = RAMCars.length;

    var Volkswagenlength = VolkswagenCars.length;

    var Jeeplength = JeepCars.length;

    var Toyotalength = ToyotaCars.length;

    var Lincolnlength = LincolnCars.length;

    var Buicklength = BuickCars.length;

    var BMWlength = BMWCars.length;

    var Infinitilength = InfinitiCars.length;

    var Saturnlength = SaturnCars.length;

    var Audilength = AudiCars.length;

    var Cadillaclength = CadillacCars.length;

    var Acuralength = AcuraCars.length;

    var Mazdalength = MazdaCars.length;

    var MercedesBenzlength = MercedesBenzCars.length;

    var Landroverlength = LandroverCars.length;

    var Volvolength = VolvoCars.length;

    var Mercurylength = MercuryCars.length;

    var Mitsubishilength = MitsubishiCars.length;

    var Ferrarilength = FerrariCars.length;

    var Teslalength = TeslaCars.length;

    var AMClength = AMCCars.length;

    var Pontiaclength = PontiacCars.length;

    var HarleyDavidsonlength = HarleyDavidsonCars.length;

    var Freightlinerlength = FreightlinerCars.length;

    var Minilength = MiniCars.length;

    var Scionlength = ScionCars.length;

    var Unknownlength = UnknownCars.length;

    var Fiatlength = FiatCars.length;

    var Alfaromeolength = AlfaromeoCars.length;

    var Mitsubishifusolength = MitsubishifusoCars.length;

    var Astonmartinlength = AstonmartinCars.length;

    var Texasbraggenterpriseslength = TexasbraggenterprisesCars.length;

    var Suzukilength = SuzukiCars.length;

    var Isuzulength = IsuzuCars.length;;

    var carlengthtogether = [GMClength, Fordlength, Chevroletlength, Subarulength, Lexuslength, Jaguarlength, Hyundailength, Nissanlength, Dodgelength, Kialength, Hondalength, Hondalength, Chryslerlength, RAMlength, Volkswagenlength, Jeeplength, Toyotalength, Lincolnlength, Buicklength, BMWlength, Infinitilength, Saturnlength, Audilength, Cadillaclength, Mazdalength, MercedesBenzlength, Landroverlength, Volvolength, Mercurylength, Mitsubishilength, Ferrarilength, Teslalength, AMClength, Pontiaclength, HarleyDavidsonlength, Freightlinerlength, Minilength, Scionlength, Unknownlength,  Fiatlength, Alfaromeolength, Mitsubishilength, Astonmartinlength, Texasbraggenterpriseslength, Suzukilength, Isuzulength];
    
    // generate random ccolor
    function getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // creating chartjs horizontal bar chart
    var chart = new Chart('chart', {
        type: "doughnut",
        options:{
            responsive:true,
            maintainAspectRatio: true,
            legend:{
                display: true
            },
            title: {
                display: true,
                text: "Pie Chart by Make",
                fontSize: 20
            }
        },
        data: {
            
            labels: ["GMC", "Ford", "Chevrolet", "Subaru", "Lexus", "Jaguar", "Hyundai", "Nissan", "Dodge", "Kia", "Honda", "Chrysler", "RAM", "Volkswagen", "Jeep", "Toyota", "Lincoln", "Buick", "BMW", "Infiniti", "Saturn", "Audi", "Cadillac", "Acura", "Mazda", "Mercedes Benz", "Land Rover", "Volvo", "Mercury", "Mitsubishi", "Ferrari", "Tesla", "AMC", "Pontiac", "Harley Davidson", "Freightliner", "Mini", "Scion", "Unknown", "Fiat", "Alfaromeo","Mitsubishi-fuso", "Aston Martin", "Texas Bragg Enterprise", "Suzuki", "Isuzu"],
            datasets:[
                {
                    label: "Car Price on Craigslist",
                    data: carlengthtogether,
                    backgroundColor: [getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor()]
                },

            ]
        }
    });
}





// https://www.createwithdata.com/chartjs-and-csv/

d3.csv("../Car_API_Call/merged_data.csv")
.then(makeChart);