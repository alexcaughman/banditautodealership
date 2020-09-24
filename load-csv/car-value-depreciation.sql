
select 
	state,
	lat,
	long,
	year,
	make,
	model,
	style,
	msrp,
	cast(replace(replace(replace(msrp, ' USD', ''), '$', ''), ',', '') as int) as msrp_numeric,
	price,
	(cast(replace(replace(replace(msrp, ' USD', ''), '$', ''), ',', '') as int) - price) as depreciation,
	(cast(replace(replace(replace(msrp, ' USD', ''), '$', ''), ',', '') as int) - price)/cast(replace(replace(replace(msrp, ' USD', ''), '$', ''), ',', '') as int) as dep_pct
-- into car_value_depreciation
from car_value_data
where msrp is not null 
and year > 2010
and price <> 0
order by year, make, model, style

	