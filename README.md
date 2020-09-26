# Bandit Auto Dealers

![bandit](https://github.com/alexcaughman/banditautodealership/blob/master/GettyImages-1180219878.jpg)

The used car market in the US has evolved in many interesting and exciting ways in recent years.  Society went from the typical dealership shuffle to relying on classified ads and beyond.  We perceive that the scope of the classified car market can vary tremendously from region to region in regards to price, type of vehicle, and trim options available.  This observation has led us to wonder what questions to ask and how to answer them accordingly.  Here are the main questions we were looking to solve:

What attributes depreciate a vehicle more?
What types of vehicles are most popular in each region of the US?
What affects a vehicle’s resale value in a particular given region?
How far off were the classified ads’ prices from the appraisal value?

We used a huge Craigslist classified data set, that we sourced from Kaggle, which was over 425K postings of auto ads.  Additionally, we used an API call from CarsXE to pull additional data for each unique VIN.  After loading and cleaning in Python, a more concise but still large CSV dataset (~ 22K) was loaded into SQL for use in the Flask app. In SQL it was further transformed down to about 16K.  

Data Cleanup Steps

 Downloaded copy of Kaggle data file

 Python Notebookso
Load CSV and remove unnecessary columns
Merge CSV with API data

 SQL ScriptsoCreate DB, tables, user, roles for Flask
Convert MSRP for SQL as numeric and create new table

 Flask
Create flask-app.py to return new combined dataset

Once the data was cleaned and ready to go, we proceeded to use Chart.js, D3, and Plotly to create visualizations for our data. We compared list price against msrp by year, by make, and we also evaluated used car listings by region to see how the US used market differs.  Once the visualizations were ready, we created a landing page utilizing D3 and Bootstrap.

Considerations & Limitations

We have a working Flask app that is powered by Postgres, BUT the response time on our own API was really slow.  To serve back the entire data set through Flask takes nearly 5 minutes – about 10 times too long for a SLOW SQL response.  At that point we realized that leaving the CSV driving the HTML and Visualizations was more efficient with the huge data set.  Response time in the site is good. 

We set out to create a Geo Mapping application using Leaflet.  A box with drop down boxes for on the fly filtering was implemented in order to populate vehicle markers on the map.  We utilized a jQuery function as an event listener and successfully ran it with a small test set of ten VINs.  When we implemented the full CSV, the map would continuously break.

We were unable to determine final sale prices of vehicles posted for private sale, as this information is not readily available.  Many classified sites have advanced search functions including querying completed or sold listings, however Craigslist offers no such luxury.  Our analyses covered list price at the time the advertisement was logged into the Kaggle dataset.  Additionally, the CarsXE API call could not be coded to be a live API call, so the end result was recent, but not ongoing data.

In the end, we were unable to answer some of our questions due to these limitations, but we know now how to better utilize our resources and applications to meet our expectations.  We tried to utilize a large static database, whereas it would have been more prudent to figure out how to dynamically feed flask from PostgreSQL.  If we had the time to figure out this process, we would have had everything fed in real time from Flask and we would have had a very interactive map.  Despite these improvements, our Kaggle data would remain static, so our study could only remain as current as the recent pull, which as it turns out is a quarterly webscrape performed by the author of the Kaggle data set.



