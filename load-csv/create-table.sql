DROP TABLE IF EXISTS vehicles;

CREATE TABLE vehicles (
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