-- find duplicates
select *
from car_value_data


-- create table of unique id & vin to drive new table
select min(id) as first_vin, vin
--into vin_dup_driver
from car_value_data
group by vin

-- join driver to main table to eliminate dups and create new table
select b.*
into car_value_data_dedup
from vin_dup_driver as a
    left join car_value_data as b
    on a.vin = b.vin
        and a.first_vin = b.id

-- create new table of clean data
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
into car_value_depreciation
from car_value_data_dedup
where msrp is not null
    --and year > 2010
    and price <> 0
order by state, year, make, model, style


-- add column for numeric msrp
alter table car_value_data_dedup
add column msrp_numeric float

-- update new column
update car_value_data_dedup
set msrp_numeric = cast(replace(replace(replace(msrp, ' USD', ''), '$', ''), ',', '') as int)

