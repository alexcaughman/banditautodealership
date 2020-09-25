#####################################
# Dependencies
#####################################
# SQLAlchemy
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func, inspect
# Flask
from flask import Flask, jsonify
# DB credentials for Postgres
from db_keys import db_cred
#####################################
# Dependencies
#####################################


# Set up, Connect and Reflect database
local_db_name = 'bandit_auto'
engine = create_engine(
    f'postgresql://{db_cred}@localhost:5432/{local_db_name}')
Base = automap_base()
Base.prepare(engine, reflect=True)

# Save references to each table
car_value_data_dedup = Base.classes.car_value_data_dedup
makemodel = Base.classes.makemodel

#####################################
# Start Flask
#####################################
app = Flask(__name__)


@app.route("/")
def welcome():
    """ List all available api routes """
    return(
        f'Available Routes:</br>'
        f'/api/v1.0/alldata</br>'
    )


@app.route("/api/v1.0/alldata")
def returnAll():
    """ Returns all detail data for vehicles."""
    # Open session
    session = Session(engine)
    allData = session.query(
        car_value_data_dedup.vin,
        car_value_data_dedup.year,
        car_value_data_dedup.make,
        car_value_data_dedup.model,
        car_value_data_dedup.year,
        car_value_data_dedup.style,
        car_value_data_dedup.type,
        car_value_data_dedup.doors,
        car_value_data_dedup.fuel_type,
        car_value_data_dedup.city_mileage,
        car_value_data_dedup.highway_mileage,
        car_value_data_dedup.engine_type,
        car_value_data_dedup.transmission,
        car_value_data_dedup.drivetrain,
        car_value_data_dedup.msrp_numeric,
        car_value_data_dedup.price,
        car_value_data_dedup.condition,
        car_value_data_dedup.fuel,
        car_value_data_dedup.size,
        car_value_data_dedup.odometer,
        car_value_data_dedup.state,
        car_value_data_dedup.lat,
        car_value_data_dedup.long
    ).all()
    session.close
    return(jsonify(allData))


if __name__ == '__main__':
    app.run(debug=True)
