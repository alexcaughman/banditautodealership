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
car_value_data = Base.classes.car_value_data
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
        car_value_data.make,
        car_value_data.model,
        car_value_data.year,
        car_value_data.type,
        car_value_data.odometer,
        car_value_data.doors,
        car_value_data.drivetrain,
        car_value_data.transmission

    ).all()
    session.close
    return(jsonify(allData))


if __name__ == '__main__':
    app.run(debug=True)
