DROP TABLE IF EXISTS vehicles;

CREATE TABLE vehicles
(
	id serial PRIMARY KEY,
	vin varchar(20),
	price float(2),
	condition varchar(10),
	fuel varchar(10),
	size varchar(15),
	type varchar(15),
	odometer float,
	state char(2) ,
	lat float,
	long float
)



DROP TABLE IF EXISTS car_value_data;

CREATE TABLE car_value_data
(
	id serial PRIMARY KEY,
	Vin varchar(20),
	Year int,
	Make varchar(30),
	Model varchar(30),
	Style varchar(30),
	Type varchar(100),
	Doors float,
	"Fuel Type" varchar(100),
	"City Mileage" varchar(30),
	"Highway Mileage" varchar(30),
	"Engine Type" varchar(100),
	Transmission varchar(30),
	Drivetrain varchar(30),
	MSRP varchar(30),
	price float,
	condition varchar(10),
	fuel varchar(10),
	size varchar(15),
	odometer float,
	state char(2),
	lat float,
	long float
);