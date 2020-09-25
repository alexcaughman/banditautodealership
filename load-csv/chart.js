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

    // car year in its own array
    var caryear = cars.map(function(d){
        return +d.Year

    })

    // price by year array
    price1981 = [];
    price1982 = [];
    price1983 = [];
    price1984 = [];
    price1985 = [];
    price1986 = [];
    price1987 = [];
    price1988 = [];
    price1989 = [];
    price1990 = [];
    price1991 = [];
    price1992 = [];
    price1993 = [];
    price1994 = [];
    price1995 = [];
    price1996 = [];
    price1997 = [];
    price1998 = [];
    price1999 = [];
    price2000 = [];
    price2001 = [];
    price2002 = [];
    price2003 = [];
    price2004 = [];
    price2005 = [];
    price2006 = [];
    price2007 = [];
    price2008 = [];
    price2009 = [];
    price2010 = [];
    price2011 = [];
    price2012 = [];
    price2013 = [];
    price2014 = [];
    price2015 = [];
    price2016 = [];
    price2017 = [];
    price2018 = [];
    price2019 = [];
    price2020 = [];
    price2021 = [];

    MSRP1981 = [];
    MSRP1982 = [];
    MSRP1983 = [];
    MSRP1984 = [];
    MSRP1985 = [];
    MSRP1986 = [];
    MSRP1987 = [];
    MSRP1988 = [];
    MSRP1989 = [];
    MSRP1990 = [];
    MSRP1991 = [];
    MSRP1992 = [];
    MSRP1993 = [];
    MSRP1994 = [];
    MSRP1995 = [];
    MSRP1996 = [];
    MSRP1997 = [];
    MSRP1998 = [];
    MSRP1999 = [];
    MSRP2000 = [];
    MSRP2001 = [];
    MSRP2002 = [];
    MSRP2003 = [];
    MSRP2004 = [];
    MSRP2005 = [];
    MSRP2006 = [];
    MSRP2007 = [];
    MSRP2008 = [];
    MSRP2009 = [];
    MSRP2010 = [];
    MSRP2011 = [];
    MSRP2012 = [];
    MSRP2013 = [];
    MSRP2014 = [];
    MSRP2015 = [];
    MSRP2016 = [];
    MSRP2017 = [];
    MSRP2018 = [];
    MSRP2019 = [];
    MSRP2020 = [];
    MSRP2021 = [];



    for(var i = 0; i<cars.length;i++){
        if(cars[i].Year == "1981"){
            price1981.push(parseInt(cars[i].price))
            MSRP1981.push(parseInt(cars[i].MSRP))
        }
        else if (cars[i].Year == "1982"){
            price1982.push(parseInt(cars[i].price))
            MSRP1982.push(parseInt(cars[i].MSRP))
        }
        else if (cars[i].Year == "1983"){
            price1983.push(parseInt(cars[i].price))
            MSRP1983.push(parseInt(cars[i].MSRP))
        }
        else if (cars[i].Year == "1984"){
            price1984.push(parseInt(cars[i].price))
            MSRP1984.push(parseInt(cars[i].MSRP))
        }
        else if (cars[i].Year == "1985"){
            price1985.push(parseInt(cars[i].price))
            MSRP1985.push(parseInt(cars[i].MSRP))
        }
        else if (cars[i].Year == "1986"){
            price1986.push(parseInt(cars[i].price))
            MSRP1986.push(parseInt(cars[i].MSRP))
        }
        else if (cars[i].Year == "1987"){
            price1987.push(parseInt(cars[i].price))
            MSRP1987.push(parseInt(cars[i].MSRP))
        }
        else if (cars[i].Year == "1988"){
            price1988.push(parseInt(cars[i].price))
            MSRP1988.push(parseInt(cars[i].MSRP))
        }
        else if (cars[i].Year == "1989"){
            price1989.push(parseInt(cars[i].price))
            MSRP1989.push(parseInt(cars[i].MSRP))
        }
        else if (cars[i].Year == "1990"){
            price1990.push(parseInt(cars[i].price))
            MSRP1990.push(parseInt(cars[i].MSRP))
        }
        else if (cars[i].Year == "1991"){
            price1991.push(parseInt(cars[i].price))
            MSRP1991.push(parseInt(cars[i].MSRP))
        }
        else if (cars[i].Year == "1992"){
            price1992.push(parseInt(cars[i].price))
            MSRP1992.push(parseInt(cars[i].MSRP))
        }
        else if (cars[i].Year == "1993"){
            price1993.push(parseInt(cars[i].price))
            MSRP1993.push(parseInt(cars[i].MSRP))
        }
        else if (cars[i].Year == "1994"){
            price1994.push(parseInt(cars[i].price))
            MSRP1994.push(parseInt(cars[i].MSRP))
        }
        else if (cars[i].Year == "1995"){
            price1995.push(parseInt(cars[i].price))
            MSRP1995.push(parseInt(cars[i].MSRP))
        }
        else if (cars[i].Year == "1996"){
            price1996.push(parseInt(cars[i].price))
            MSRP1996.push(parseInt(cars[i].MSRP))
        }
        else if (cars[i].Year == "1997"){
            price1997.push(parseInt(cars[i].price))
            MSRP1997.push(parseInt(cars[i].MSRP))
        }
        else if (cars[i].Year == "1998"){
            price1998.push(parseInt(cars[i].price))
            MSRP1998.push(parseInt(cars[i].MSRP))
        }
        else if (cars[i].Year == "1999"){
            price1999.push(parseInt(cars[i].price))
            MSRP1999.push(parseInt(cars[i].MSRP))
        }
        else if (cars[i].Year == "2000"){
            price2000.push(parseInt(cars[i].price))
            MSRP2000.push(parseInt(cars[i].MSRP))
        }
        else if (cars[i].Year == "2001"){
            price2001.push(parseInt(cars[i].price))
            MSRP2001.push(parseInt(cars[i].MSRP))
        }
        else if (cars[i].Year == "2002"){
            price2002.push(parseInt(cars[i].price))
            MSRP2002.push(parseInt(cars[i].MSRP))
        }
        else if (cars[i].Year == "2003"){
            price2003.push(parseInt(cars[i].price))
            MSRP2003.push(parseInt(cars[i].MSRP))
        }
        else if (cars[i].Year == "2004"){
            price2004.push(parseInt(cars[i].price))
            MSRP2004.push(parseInt(cars[i].MSRP))
        }
        else if (cars[i].Year == "2005"){
            price2005.push(parseInt(cars[i].price))
            MSRP2005.push(parseInt(cars[i].MSRP))
        }
        else if (cars[i].Year == "2006"){
            price2006.push(parseInt(cars[i].price))
            MSRP2006.push(parseInt(cars[i].MSRP))
        }
        else if (cars[i].Year == "2007"){
            price2007.push(parseInt(cars[i].price))
            MSRP2007.push(parseInt(cars[i].MSRP))
        }
        else if (cars[i].Year == "2008"){
            price2008.push(parseInt(cars[i].price))
            MSRP2008.push(parseInt(cars[i].MSRP))
        }
        else if (cars[i].Year == "2009"){
            price2009.push(parseInt(cars[i].price))
            MSRP2009.push(parseInt(cars[i].MSRP))
        }
        else if (cars[i].Year == "2010"){
            price2010.push(parseInt(cars[i].price))
            MSRP2010.push(parseInt(cars[i].MSRP))
        }
        else if (cars[i].Year == "2011"){
            price2011.push(parseInt(cars[i].price))
            MSRP2011.push(parseInt(cars[i].MSRP))
        }
        else if (cars[i].Year == "2012"){
            price2012.push(parseInt(cars[i].price))
            MSRP2012.push(parseInt(cars[i].MSRP))
        }
        else if (cars[i].Year == "2013"){
            price2013.push(parseInt(cars[i].price))
            MSRP2013.push(parseInt(cars[i].MSRP))
        }
        else if (cars[i].Year == "2014"){
            price2014.push(parseInt(cars[i].price))
            MSRP2014.push(parseInt(cars[i].MSRP))
        }
        else if (cars[i].Year == "2015"){
            price2015.push(parseInt(cars[i].price))
            MSRP2015.push(parseInt(cars[i].MSRP))
        }
        else if (cars[i].Year == "2016"){
            price2016.push(parseInt(cars[i].price))
            MSRP2016.push(parseInt(cars[i].MSRP))
        }
        else if (cars[i].Year == "2017"){
            price2017.push(parseInt(cars[i].price))
            MSRP2017.push(parseInt(cars[i].MSRP))
        }
        else if (cars[i].Year == "2018"){
            price2018.push(parseInt(cars[i].price))
            MSRP2018.push(parseInt(cars[i].MSRP))
        }
        else if (cars[i].Year == "2019"){
            price2019.push(parseInt(cars[i].price))
            MSRP2019.push(parseInt(cars[i].MSRP))
        }
        else if (cars[i].Year == "2020"){
            price2020.push(parseInt(cars[i].price))
            MSRP2020.push(parseInt(cars[i].MSRP))
        }
        else if (cars[i].Year == "2021"){
            price2021.push(parseInt(cars[i].price))
            MSRP2021.push(parseInt(cars[i].MSRP))
        }
        
    }

    // created an average function 
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

    // avg price/msrp per year
    var priceavg1981 = arrayAverage(price1981)
    var MSRPavg1981 = arrayAverage(MSRP1981)
    
    var priceavg1982 = arrayAverage(price1982)
    var MSRPavg1982 = arrayAverage(MSRP1982)

    var priceavg1983 = arrayAverage(price1983)
    var MSRPavg1983 = arrayAverage(MSRP1983)

    var priceavg1984 = arrayAverage(price1984)
    var MSRPavg1984 = arrayAverage(MSRP1984)

    var priceavg1985 = arrayAverage(price1985)
    var MSRPavg1985 = arrayAverage(MSRP1985)

    var priceavg1986 = arrayAverage(price1986)
    var MSRPavg1986 = arrayAverage(MSRP1986)

    var priceavg1987 = arrayAverage(price1987)
    var MSRPavg1987 = arrayAverage(MSRP1987)

    var priceavg1988 = arrayAverage(price1988)
    var MSRPavg1988 = arrayAverage(MSRP1988)

    var priceavg1989 = arrayAverage(price1989)
    var MSRPavg1989 = arrayAverage(MSRP1989)

    var priceavg1990 = arrayAverage(price1990)
    var MSRPavg1990 = arrayAverage(MSRP1990)

    var priceavg1991 = arrayAverage(price1991)
    var MSRPavg1991 = arrayAverage(MSRP1991)

    var priceavg1992 = arrayAverage(price1992)
    var MSRPavg1992 = arrayAverage(MSRP1992)

    var priceavg1993 = arrayAverage(price1993)
    var MSRPavg1993 = arrayAverage(MSRP1993)

    var priceavg1994 = arrayAverage(price1994)
    var MSRPavg1994 = arrayAverage(MSRP1994)

    var priceavg1995 = arrayAverage(price1995)
    var MSRPavg1995 = arrayAverage(MSRP1995)

    var priceavg1996 = arrayAverage(price1996)
    var MSRPavg1996 = arrayAverage(MSRP1996)

    var priceavg1997 = arrayAverage(price1997)
    var MSRPavg1997 = arrayAverage(MSRP1997)

    var priceavg1998 = arrayAverage(price1998)
    var MSRPavg1998 = arrayAverage(MSRP1998)

    var priceavg1999 = arrayAverage(price1999)
    var MSRPavg1999 = arrayAverage(MSRP1999)

    var priceavg2000 = arrayAverage(price2000)
    var MSRPavg2000 = arrayAverage(MSRP2000)

    var priceavg2001 = arrayAverage(price2001)
    var MSRPavg2001 = arrayAverage(MSRP2001)

    var priceavg2002 = arrayAverage(price2002)
    var MSRPavg2002 = arrayAverage(MSRP2002)

    var priceavg2003 = arrayAverage(price2003)
    var MSRPavg2003 = arrayAverage(MSRP2003)

    var priceavg2004 = arrayAverage(price2004)
    var MSRPavg2004 = arrayAverage(MSRP2004)

    var priceavg2005 = arrayAverage(price2005)
    var MSRPavg2005 = arrayAverage(MSRP2005)

    var priceavg2006 = arrayAverage(price2006)
    var MSRPavg2006 = arrayAverage(MSRP2006)

    var priceavg2007 = arrayAverage(price2007)
    var MSRPavg2007 = arrayAverage(MSRP2007)

    var priceavg2008 = arrayAverage(price2008)
    var MSRPavg2008 = arrayAverage(MSRP2008)
    
    var priceavg2009 = arrayAverage(price2009)
    var MSRPavg2009 = arrayAverage(MSRP2009)
    
    var priceavg2010 = arrayAverage(price2010)
    var MSRPavg2010 = arrayAverage(MSRP2010)
    
    var priceavg2011 = arrayAverage(price2011)
    var MSRPavg2011 = arrayAverage(MSRP2011)
    
    var priceavg2012 = arrayAverage(price2012)
    var MSRPavg2012 = arrayAverage(MSRP2012)
    
    var priceavg2013 = arrayAverage(price2013)
    var MSRPavg2013 = arrayAverage(MSRP2013)
    
    var priceavg2014 = arrayAverage(price2014)
    var MSRPavg2014 = arrayAverage(MSRP2014)
    
    var priceavg2015 = arrayAverage(price2015)
    var MSRPavg2015 = arrayAverage(MSRP2015)
    
    var priceavg2016 = arrayAverage(price2016)
    var MSRPavg2016 = arrayAverage(MSRP2016)
    
    var priceavg2017 = arrayAverage(price2017)
    var MSRPavg2017 = arrayAverage(MSRP2017)
    
    var priceavg2018 = arrayAverage(price2018)
    var MSRPavg2018 = arrayAverage(MSRP2018)
    
    var priceavg2019 = arrayAverage(price2019)
    var MSRPavg2019 = arrayAverage(MSRP2019)
    
    var priceavg2020 = arrayAverage(price2020)
    var MSRPavg2020 = arrayAverage(MSRP2020)
    
    var priceavg2021 = arrayAverage(price2021)
    var MSRPavg2021 = arrayAverage(MSRP2021)

 
    // combining price/MSRP in one array
    var pricetogether = [priceavg1981, priceavg1982, priceavg1983, priceavg1984, priceavg1985, priceavg1985, priceavg1986, priceavg1987, priceavg1988, priceavg1989, priceavg1990, priceavg1991, priceavg1992, priceavg1993, priceavg1994, priceavg1995, priceavg1996, priceavg1997, priceavg1998, priceavg1999, priceavg2000, priceavg2001, priceavg2002, priceavg2003, priceavg2004, priceavg2005, priceavg2006, priceavg2007, priceavg2008, priceavg2009, priceavg2010, priceavg2011, priceavg2012, priceavg2013, priceavg2014, priceavg2015, priceavg2016, priceavg2017, priceavg2018, priceavg2019, priceavg2020, priceavg2021]
    var MSRPtogether = [MSRPavg1981, MSRPavg1982, MSRPavg1983, MSRPavg1984, MSRPavg1985, MSRPavg1985, MSRPavg1986, MSRPavg1987, MSRPavg1988, MSRPavg1989, MSRPavg1990, MSRPavg1991, MSRPavg1992, MSRPavg1993, MSRPavg1994, MSRPavg1995, MSRPavg1996, MSRPavg1997, MSRPavg1998, MSRPavg1999, MSRPavg2000, MSRPavg2001, MSRPavg2002, MSRPavg2003, MSRPavg2004, MSRPavg2005, MSRPavg2006, MSRPavg2007, MSRPavg2008, MSRPavg2009, MSRPavg2010, MSRPavg2011, MSRPavg2012, MSRPavg2013, MSRPavg2014, MSRPavg2015, MSRPavg2016, MSRPavg2017, MSRPavg2018, MSRPavg2019, MSRPavg2020, MSRPavg2021]



    // creating chartjs horizontal bar chart
    var chart = new Chart('chart', {
        type: "line",
        options:{
            maintainAspectRatio: true,
            legend:{
                display: true
            },
            title: {
                display: true,
                text: "Craigslist vs MSRP by Year",
                fontSize: 30
            }
        },
        data: {
            labels: [1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021 ],
            datasets:[
                {
                    label: "Car Price on Craigslist",
                    data: pricetogether,
                    borderColor: "#3e95cd",
                    fill: false
                },
                {
                    label: "MSRP",
                    data: MSRPtogether,
                    borderColor: "#8e5ea2",
                    fill: false

                }
            ]
        }
    });
}



// https://www.createwithdata.com/chartjs-and-csv/

d3.csv("../Car_API_Call/merged_data.csv")
.then(makeChart);