# ReadMe for CSV Load and Cleanup

## Limiting the LARGE dataset

Original data set from [Kaggle](https://www.kaggle.com/austinreese/craigslist-carstrucks-data) contained over 400K observations across 25 attributes.

- Filter out NaN data for the following:
  - vin
  - drive
  - state
  - lat/long
- Limit data to 5 years
- Limit to price range ($ to $)

create database called bandit_auto using the script
create table called vehicles using the script
create the app user account with the script
using PGAdmin import the file vehicles_final.csv
be sure to delete id from the column list before importing
