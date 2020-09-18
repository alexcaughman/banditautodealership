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
