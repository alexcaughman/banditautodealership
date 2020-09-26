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
    SubaruCarsprice = [];
    SubaruCarsMSRP = [];
    LexusCarsprice = [];
    LexusCarsMSRP = [];
    JaguarCarsprice = [];
    JaguarCarsMSRP = [];
    HyundaiCarsprice = [];
    HyundaiCarsMSRP = [];
    NissanCarsprice = [];
    NissanCarsMSRP = [];
    DodgeCarsprice = [];
    DodgeCarsMSRP = [];
    KiaCarsprice = [];
    KiaCarsMSRP = [];
    HondaCarsprice = [];
    HondaCarsMSRP = [];
    ChryslerCarsprice = [];
    ChryslerCarsMSRP = [];
    RAMCarsprice = [];
    RAMCarsMSRP = [];
    VolkswagenCarsprice = [];
    VolkswagenCarsMSRP = [];
    JeepCarsprice = [];
    JeepCarsMSRP = [];
    ToyotaCarsprice = [];
    ToyotaCarsMSRP = [];
    LincolnCarsprice = [];
    LincolnCarsMSRP = [];
    BuickCarsprice = [];
    BuickCarsMSRP = [];
    BMWCarsprice = [];
    BMWCarsMSRP = [];
    InfinitiCarsprice = [];
    InfinitiCarsMSRP = [];
    SaturnCarsprice = [];
    SaturnCarsMSRP = [];
    AudiCarsprice = [];
    AudiCarsMSRP = [];
    CadillacCarsprice = [];
    CadillacCarsMSRP = [];
    AcuraCarsprice = [];
    AcuraCarsMSRP = [];
    MazdaCarsprice = [];
    MazdaCarsMSRP = [];
    MercedesBenzCarsprice = [];
    MercedesBenzCarsMSRP = [];
    LandroverCarsprice = [];
    LandroverCarsMSRP = [];
    VolvoCarsprice = [];
    VolvoCarsMSRP =[];
    MercuryCarsprice = [];
    MercuryCarsMSRP = [];
    MitsubishiCarsprice = [];
    MitsubishiCarsMSRP = [];
    FerrariCarsprice = [];
    FerrariCarsMSRP = [];
    TeslaCarsprice = [];
    TeslaCarsMSRP = [];
    AMCCarsprice = [];
    AMCCarsMSRP = [];
    PontiacCarsprice = [];
    PontiacCarsMSRP = [];
    HarleyDavidsonCarsprice = [];
    HarleyDavidsonCarsMSRP = [];
    FreightlinerCarsprice = [];
    FreightlinerCarsMSRP =[];
    MiniCarsprice = [];
    MiniCarsMSRP = [];
    ScionCarsprice = [];
    ScionCarsMSRP = [];
    UnknownCarsprice = [];
    UnknownCarsMSRP = [];
    FiatCarsprice = [];
    FiatCarsMSRP = [];
    AlfaromeoCarsprice = [];
    AlfaromeoCarsMSRP = [];
    MitsubishifusoCarsprice = [];
    MitsubishifusoCarsMSRP = [];
    AstonmartinCarsprice=[];
    AstonmartinCarsMSRP = [];
    TexasbraggenterprisesCarsprice = [];
    TexasbraggenterprisesCarsMSRP = [];
    SuzukiCarsprice = [];
    SuzukiCarsMSRP = [];
    IsuzuCarsprice = [];
    IsuzuCarsMSRP = [];


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
        // 
        else if (cars[i].Make == "Subaru"){
            SubaruCarsprice.push(parseInt(cars[i].price))
            SubaruCarsMSRP.push(parseInt(cars[i].MSRP))
        }
        else if (cars[i].Make == "Lexus") {
            LexusCarsprice.push(parseInt(cars[i].price))
            LexusCarsMSRP.push(parseInt(cars[i].MSRP))
        }
        else if (cars[i].Make == "Jaguar"){
            JaguarCarsprice.push(parseInt(cars[i].price))
            JaguarCarsMSRP.push(parseInt(cars[i].MSRP))
        }
        else if (cars[i].Make == "Hyundai") {
            HyundaiCarsprice.push(parseInt(cars[i].price))
            HyundaiCarsMSRP.push(parseInt(cars[i].MSRP))
        }        
        else if (cars[i].Make == "Nissan"){
            NissanCarsprice.push(parseInt(cars[i].price))
            NissanCarsMSRP.push(parseInt(cars[i].MSRP))
        }
        else if (cars[i].Make == "Dodge") {
            DodgeCarsprice.push(parseInt(cars[i].price))
            DodgeCarsMSRP.push(parseInt(cars[i].MSRP))
        }        
        else if (cars[i].Make == "Kia"){
            KiaCarsprice.push(parseInt(cars[i].price))
            KiaCarsMSRP.push(parseInt(cars[i].MSRP))
        }
        else if (cars[i].Make == "Honda") {
            HondaCarsprice.push(parseInt(cars[i].price))
            HondaCarsMSRP.push(parseInt(cars[i].MSRP))
        }        
        else if (cars[i].Make == "Chrysler"){
            ChryslerCarsprice.push(parseInt(cars[i].price))
            ChryslerCarsMSRP.push(parseInt(cars[i].MSRP))
        }
        else if (cars[i].Make == "RAM") {
            RAMCarsprice.push(parseInt(cars[i].price))
            RAMCarsMSRP.push(parseInt(cars[i].MSRP))
        }        
        else if (cars[i].Make == "Volkswagen"){
            VolkswagenCarsprice.push(parseInt(cars[i].price))
            VolkswagenCarsMSRP.push(parseInt(cars[i].MSRP))
        }
        else if (cars[i].Make == "Jeep") {
            JeepCarsprice.push(parseInt(cars[i].price))
            JeepCarsMSRP.push(parseInt(cars[i].MSRP))
        }        
        else if (cars[i].Make == "Toyota"){
            ToyotaCarsprice.push(parseInt(cars[i].price))
            ToyotaCarsMSRP.push(parseInt(cars[i].MSRP))
        }
        else if (cars[i].Make == "Lincoln") {
            LincolnCarsprice.push(parseInt(cars[i].price))
            LincolnCarsMSRP.push(parseInt(cars[i].MSRP))
        }        
        else if (cars[i].Make == "Buick"){
            BuickCarsprice.push(parseInt(cars[i].price))
            BuickCarsMSRP.push(parseInt(cars[i].MSRP))
        }
        else if (cars[i].Make == "BMW") {
            BMWCarsprice.push(parseInt(cars[i].price))
            BMWCarsMSRP.push(parseInt(cars[i].MSRP))
        }        
        else if (cars[i].Make == "Infiniti"){
            InfinitiCarsprice.push(parseInt(cars[i].price))
            InfinitiCarsMSRP.push(parseInt(cars[i].MSRP))
        }
        else if (cars[i].Make == "Saturn") {
            SaturnCarsprice.push(parseInt(cars[i].price))
            SaturnCarsMSRP.push(parseInt(cars[i].MSRP))
        }        
        else if (cars[i].Make == "Audi"){
            AudiCarsprice.push(parseInt(cars[i].price))
            AudiCarsMSRP.push(parseInt(cars[i].MSRP))
        }
        else if (cars[i].Make == "Cadillac") {
            CadillacCarsprice.push(parseInt(cars[i].price))
            CadillacCarsMSRP.push(parseInt(cars[i].MSRP))
        }        
        else if (cars[i].Make == "Acura"){
            AcuraCarsprice.push(parseInt(cars[i].price))
            AcuraCarsMSRP.push(parseInt(cars[i].MSRP))
        }
        else if (cars[i].Make == "Mazda") {
            MazdaCarsprice.push(parseInt(cars[i].price))
            MazdaCarsMSRP.push(parseInt(cars[i].MSRP))
        }        
        else if (cars[i].Make == "Mercedes-Benz"){
            MercedesBenzCarsprice.push(parseInt(cars[i].price))
            MercedesBenzCarsMSRP.push(parseInt(cars[i].MSRP))
        }
        else if (cars[i].Make == "Land Rover") {
            LandroverCarsprice.push(parseInt(cars[i].price))
            LandroverCarsMSRP.push(parseInt(cars[i].MSRP))
        }        
        else if (cars[i].Make == "Volvo"){
            VolvoCarsprice.push(parseInt(cars[i].price))
            VolvoCarsMSRP.push(parseInt(cars[i].MSRP))
        }
        else if (cars[i].Make == "Mercury") {
            MercuryCarsprice.push(parseInt(cars[i].price))
            MercuryCarsMSRP.push(parseInt(cars[i].MSRP))
        }        
        else if (cars[i].Make == "Mitsubishi"){
            MitsubishiCarsprice.push(parseInt(cars[i].price))
            MitsubishiCarsMSRP.push(parseInt(cars[i].MSRP))
        }
        else if (cars[i].Make == "Ferrari") {
            FerrariCarsprice.push(parseInt(cars[i].price))
            FerrariCarsMSRP.push(parseInt(cars[i].MSRP))
        }        
        else if (cars[i].Make == "Tesla"){
            TeslaCarsprice.push(parseInt(cars[i].price))
            TeslaCarsMSRP.push(parseInt(cars[i].MSRP))
        }
        else if (cars[i].Make == "AMC") {
            AMCCarsprice.push(parseInt(cars[i].price))
            AMCCarsMSRP.push(parseInt(cars[i].MSRP))
        }        
        else if (cars[i].Make == "Pontiac"){
            PontiacCarsprice.push(parseInt(cars[i].price))
            PontiacCarsMSRP.push(parseInt(cars[i].MSRP))
        }
        else if (cars[i].Make == "Harley-Davidson") {
            HarleyDavidsonCarsprice.push(parseInt(cars[i].price))
            HarleyDavidsonCarsMSRP.push(parseInt(cars[i].MSRP))
        }        
        else if (cars[i].Make == "Freightliner"){
            FreightlinerCarsprice.push(parseInt(cars[i].price))
            FreightlinerCarsMSRP.push(parseInt(cars[i].MSRP))
        }
        else if (cars[i].Make == "Mini") {
            MiniCarsprice.push(parseInt(cars[i].price))
            MiniCarsMSRP.push(parseInt(cars[i].MSRP))
        }        
        else if (cars[i].Make == "Scion"){
            ScionCarsprice.push(parseInt(cars[i].price))
            ScionCarsMSRP.push(parseInt(cars[i].MSRP))
        }
        else if (cars[i].Make == "Unknown") {
            UnknownCarsprice.push(parseInt(cars[i].price))
            UnknownCarsMSRP.push(parseInt(cars[i].MSRP))
        }        
        else if (cars[i].Make == "Fiat"){
            FiatCarsprice.push(parseInt(cars[i].price))
            FiatCarsMSRP.push(parseInt(cars[i].MSRP))
        }
        else if (cars[i].Make == "Alfa Romeo") {
            AlfaromeoCarsprice.push(parseInt(cars[i].price))
            AlfaromeoCarsMSRP.push(parseInt(cars[i].MSRP))
        }        
        else if (cars[i].Make == "Mitsubishi Fuso"){
            MitsubishifusoCarsprice.push(parseInt(cars[i].price))
            MitsubishifusoCarsMSRP.push(parseInt(cars[i].MSRP))
        }
        else if (cars[i].Make == "Aston Martin") {
            AstonmartinCarsprice.push(parseInt(cars[i].price))
            AstonmartinCarsMSRP.push(parseInt(cars[i].MSRP))
        }        
        else if (cars[i].Make == "Texas Bragg Enterprise"){
            TexasbraggenterpriseCarsprice.push(parseInt(cars[i].price))
            TexasbraggenterpriseCarsMSRP.push(parseInt(cars[i].MSRP))
        }
        else if (cars[i].Make == "Suzuki") {
            SuzukiCarsprice.push(parseInt(cars[i].price))
            SuzukiCarsMSRP.push(parseInt(cars[i].MSRP))
        }        
        else if (cars[i].Make == "Isuzu"){
            IsuzuCarsprice.push(parseInt(cars[i].price))
            IsuzuCarsMSRP.push(parseInt(cars[i].MSRP))
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

    var Subaruavgprice = arrayAverage(SubaruCarsprice);
    var SubaruavgMSRP = arrayAverage(SubaruCarsMSRP);

    var Lexusavgprice = arrayAverage(LexusCarsprice);
    var LexusavgMSRP = arrayAverage(LexusCarsMSRP);

    var Jaguaravgprice = arrayAverage(JaguarCarsprice);
    var JaguaravgMSRP = arrayAverage(JaguarCarsMSRP);

    var Hyundaiavgprice = arrayAverage(HyundaiCarsprice);
    var HyundaiavgMSRP = arrayAverage(HyundaiCarsMSRP);

    var Nissanavgprice = arrayAverage(NissanCarsprice);
    var NissanavgMSRP = arrayAverage(NissanCarsMSRP);

    var Dodgeavgprice = arrayAverage(DodgeCarsprice);
    var DodgeavgMSRP = arrayAverage(DodgeCarsMSRP);

    var Kiaavgprice = arrayAverage(KiaCarsprice);
    var KiaavgMSRP = arrayAverage(KiaCarsMSRP);

    var Hondaavgprice = arrayAverage(HondaCarsprice);
    var HondaavgMSRP = arrayAverage(HondaCarsMSRP);

    var Chrysleravgprice = arrayAverage(ChryslerCarsprice);
    var ChrysleravgMSRP = arrayAverage(ChryslerCarsMSRP);

    var RAMavgprice = arrayAverage(RAMCarsprice);
    var RAMavgMSRP = arrayAverage(RAMCarsMSRP);

    var Volkswagenavgprice = arrayAverage(VolkswagenCarsprice);
    var VolkswagenavgMSRP = arrayAverage(VolkswagenCarsMSRP);

    var Jeepavgprice = arrayAverage(JeepCarsprice);
    var JeepavgMSRP = arrayAverage(JeepCarsMSRP);

    var Toyotaavgprice = arrayAverage(ToyotaCarsprice);
    var ToyotaavgMSRP = arrayAverage(ToyotaCarsMSRP);

    var Lincolnavgprice = arrayAverage(LincolnCarsprice);
    var LincolnavgMSRP = arrayAverage(LincolnCarsMSRP);

    var Buickavgprice = arrayAverage(BuickCarsprice);
    var BuickavgMSRP = arrayAverage(BuickCarsMSRP);

    var BMWavgprice = arrayAverage(BMWCarsprice);
    var BMWavgMSRP = arrayAverage(BMWCarsMSRP);

    var Infinitiavgprice = arrayAverage(InfinitiCarsprice);
    var InfinitiavgMSRP = arrayAverage(InfinitiCarsMSRP);

    var Saturnavgprice = arrayAverage(SaturnCarsprice);
    var SaturnavgMSRP = arrayAverage(SaturnCarsMSRP);

    var Audiavgprice = arrayAverage(AudiCarsprice);
    var AudiavgMSRP = arrayAverage(AudiCarsMSRP);

    var Cadillacavgprice = arrayAverage(CadillacCarsprice);
    var CadillacavgMSRP = arrayAverage(CadillacCarsMSRP);

    var Acuraavgprice = arrayAverage(AcuraCarsprice);
    var AcuraavgMSRP = arrayAverage(AcuraCarsMSRP);

    var Mazdaavgprice = arrayAverage(MazdaCarsprice);
    var MazdaavgMSRP = arrayAverage(MazdaCarsMSRP);

    var MercedesBenzavgprice = arrayAverage(MercedesBenzCarsprice);
    var MercedesBenzavgMSRP = arrayAverage(MercedesBenzCarsMSRP);

    var Landroveravgprice = arrayAverage(LandroverCarsprice);
    var LandroveravgMSRP = arrayAverage(LandroverCarsMSRP);

    var Volvoavgprice = arrayAverage(VolvoCarsprice);
    var VolvoavgMSRP = arrayAverage(VolvoCarsMSRP);

    var Mercuryavgprice = arrayAverage(MercuryCarsprice);
    var MercuryavgMSRP = arrayAverage(MercuryCarsMSRP);

    var Mitsubishiavgprice = arrayAverage(MitsubishiCarsprice);
    var MitsubishiavgMSRP = arrayAverage(MitsubishiCarsMSRP);

    var Ferrariavgprice = arrayAverage(FerrariCarsprice);
    var FerrariavgMSRP = arrayAverage(FerrariCarsMSRP);

    var Teslaavgprice = arrayAverage(TeslaCarsprice);
    var TeslaavgMSRP = arrayAverage(TeslaCarsMSRP);

    var AMCavgprice = arrayAverage(AMCCarsprice);
    var AMCavgMSRP = arrayAverage(AMCCarsMSRP);

    var Pontiacavgprice = arrayAverage(PontiacCarsprice);
    var PontiacavgMSRP = arrayAverage(PontiacCarsMSRP);

    var HarleyDavidsonavgprice = arrayAverage(HarleyDavidsonCarsprice);
    var HarleyDavidsonavgMSRP = arrayAverage(HarleyDavidsonCarsMSRP);

    var Freightlineravgprice = arrayAverage(FreightlinerCarsprice);
    var FreightlineravgMSRP = arrayAverage(FreightlinerCarsMSRP);

    var Miniavgprice = arrayAverage(MiniCarsprice);
    var MiniavgMSRP = arrayAverage(MiniCarsMSRP);

    var Scionavgprice = arrayAverage(ScionCarsprice);
    var ScionavgMSRP = arrayAverage(ScionCarsMSRP);

    var Unknownavgprice = arrayAverage(UnknownCarsprice);
    var UnknownavgMSRP = arrayAverage(UnknownCarsMSRP);

    var Fiatavgprice = arrayAverage(FiatCarsprice);
    var FiatavgMSRP = arrayAverage(FiatCarsMSRP);

    var Alfaromeoavgprice = arrayAverage(AlfaromeoCarsprice);
    var AlfaromeoavgMSRP = arrayAverage(AlfaromeoCarsMSRP);

    var Mitsubishifusoavgprice = arrayAverage(MitsubishifusoCarsprice);
    var MitsubishifusoavgMSRP = arrayAverage(MitsubishifusoCarsMSRP);

    var Astonmartinavgprice = arrayAverage(AstonmartinCarsprice);
    var AstonmartinavgMSRP = arrayAverage(AstonmartinCarsMSRP);

    var Texasbraggenterprisesavgprice = arrayAverage(TexasbraggenterprisesCarsprice);
    var TexasbraggenterprisesavgMSRP = arrayAverage(TexasbraggenterprisesCarsMSRP);

    var Suzukiavgprice = arrayAverage(SuzukiCarsprice);
    var SuzukiavgMSRP = arrayAverage(SuzukiCarsMSRP);

    var Isuzuavgprice = arrayAverage(IsuzuCarsprice);
    var IsuzuavgMSRP = arrayAverage(IsuzuCarsMSRP);

    var caravgpricetogether = [GMCavgprice, Fordavgprice, Chevroletavgprice, Subaruavgprice, Lexusavgprice, Jaguaravgprice, Hyundaiavgprice, Nissanavgprice, Dodgeavgprice, Kiaavgprice, Hondaavgprice, Hondaavgprice, Chrysleravgprice, RAMavgprice, Volkswagenavgprice, Jeepavgprice, Toyotaavgprice, Lincolnavgprice, Buickavgprice, BMWavgprice, Infinitiavgprice, Saturnavgprice, Audiavgprice, Cadillacavgprice, Mazdaavgprice, MercedesBenzavgprice, Landroveravgprice, Volvoavgprice, Mercuryavgprice, Mitsubishiavgprice, Ferrariavgprice, Teslaavgprice, AMCavgprice, Pontiacavgprice, HarleyDavidsonavgprice, Freightlineravgprice, Miniavgprice, Scionavgprice, Unknownavgprice,  Fiatavgprice, Alfaromeoavgprice, Mitsubishiavgprice, Astonmartinavgprice, Texasbraggenterprisesavgprice, Suzukiavgprice, Isuzuavgprice];
    var caravgmsrptogether = [GMCavgMSRP, FordavgMSRP, ChevroletavgMSRP, SubaruavgMSRP, LexusavgMSRP, JaguaravgMSRP, HyundaiavgMSRP, NissanavgMSRP, DodgeavgMSRP, KiaavgMSRP, HondaavgMSRP, HondaavgMSRP, ChrysleravgMSRP, RAMavgMSRP, VolkswagenavgMSRP, JeepavgMSRP, ToyotaavgMSRP, LincolnavgMSRP, BuickavgMSRP, BMWavgMSRP, InfinitiavgMSRP, SaturnavgMSRP, AudiavgMSRP, CadillacavgMSRP, MazdaavgMSRP, MercedesBenzavgMSRP, LandroveravgMSRP, VolvoavgMSRP, MercuryavgMSRP, MitsubishiavgMSRP, FerrariavgMSRP, TeslaavgMSRP, AMCavgMSRP, PontiacavgMSRP, HarleyDavidsonavgMSRP, FreightlineravgMSRP, MiniavgMSRP, ScionavgMSRP, UnknownavgMSRP,  FiatavgMSRP, AlfaromeoavgMSRP, MitsubishiavgMSRP, AstonmartinavgMSRP, TexasbraggenterprisesavgMSRP, SuzukiavgMSRP, IsuzuavgMSRP];

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
                fontSize: 20
            }
        },
        data: {
            labels: ["GMC", "Ford", "Chevrolet", "Subaru", "Lexus", "Jaguar", "Hyundai", "Nissan", "Dodge", "Kia", "Honda", "Chrysler", "RAM", "Volkswagen", "Jeep", "Toyota", "Lincoln", "Buick", "BMW", "Infiniti", "Saturn", "Audi", "Cadillac", "Acura", "Mazda", "Mercedes Benz", "Land Rover", "Volvo", "Mercury", "Mitsubishi", "Ferrari", "Tesla", "AMC", "Pontiac", "Harley Davidson", "Freightliner", "Mini", "Scion", "Unknown", "Fiat", "Alfaromeo","Mitsubishi-fuso", "Aston Martin", "Texas Bragg Enterprise", "Suzuki", "Isuzu"],
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

d3.csv("../Car_API_Call/merged_data.csv")
.then(makeChart);