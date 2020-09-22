# ReadMe for CSV Load and Cleanup

## Limiting the LARGE dataset

Original data set from [Kaggle](https://www.kaggle.com/austinreese/craigslist-carstrucks-data) contained over 400K observations across 25 attributes.

- Filtered out NaN data for the following:
  - vin, drive, state, lat/long, odometer, manufcturer, condition, size, type
- Final columns selected for database
  - ['vin','price','condition','fuel','size','type','odometer','state','lat','long']

To run notebook (not required), download compressed file from [Kaggle](https://www.kaggle.com/austinreese/craigslist-carstrucks-data). Copy unzipped vehicles.csv file into /load-csv directory.

---

## Set up the PostgreSQL Database

1. Create database called bandit_auto using the script `create-database.sql`
1. create table called vehicles using the script `create-table.sql`
1. create the app user account with the script
1. using PGAdmin import the file `vehicles_final.csv`
1. --> Be sure to delete `id` from the column list before importing

## Optional (Create DB Role and Application User)

- [How to Create a User with pgAdmin](https://chartio.com/learn/postgresql/create-a-user-with-pgadmin/#:~:text=On%20the%20'Definition'%20tab%20enter,your%20PostgreSQL%20connection%20for%20Chartio.)
