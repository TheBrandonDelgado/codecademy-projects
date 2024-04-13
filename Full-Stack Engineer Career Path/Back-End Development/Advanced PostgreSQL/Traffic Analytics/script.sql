SELECT pg_size_pretty(pg_table_size('sensors.observations'));

SELECT 
  pg_size_pretty(pg_total_relation_size('sensors.observations_pkey')) as pkey_size,
  pg_size_pretty(pg_total_relation_size('sensors.observations_location_id_datetime_idx')) as location_size;

SELECT pg_size_pretty(pg_total_relation_size('sensors.observations'));

UPDATE sensors.observations
SET distance = (distance * 3.281)
WHERE TRUE;

SELECT pg_size_pretty(pg_table_size('sensors.observations'));

SELECT 
  pg_size_pretty(pg_total_relation_size('sensors.observations_pkey')) as pkey_size,
  pg_size_pretty(pg_total_relation_size('sensors.observations_location_id_datetime_idx')) as location_size;

SELECT pg_size_pretty(pg_total_relation_size('sensors.observations'));

VACUUM sensors.observations;

SELECT pg_size_pretty(pg_table_size('sensors.observations'));

SELECT 
  pg_size_pretty(pg_total_relation_size('sensors.observations_pkey')) as pkey_size,
  pg_size_pretty(pg_total_relation_size('sensors.observations_location_id_datetime_idx')) as location_size;

SELECT pg_size_pretty(pg_total_relation_size('sensors.observations'));

\COPY sensors.observations (id, datetime, location_id, duration, distance, category) FROM './additional_obs_types.csv' WITH DELIMITER ',' CSV HEADER;

SELECT pg_size_pretty(pg_table_size('sensors.observations'));

VACUUM FULL sensors.observations;

SELECT pg_size_pretty(pg_table_size('sensors.observations'));

DELETE FROM sensors.observations WHERE location_id > 24;

SELECT pg_size_pretty(pg_table_size('sensors.observations'));

TRUNCATE sensors.observations;

\COPY sensors.observations (id, datetime, location_id, duration, distance, category) FROM './original_obs_types.csv' WITH DELIMITER ',' CSV HEADER;

\COPY sensors.observations (id, datetime, location_id, duration, distance, category) FROM './additional_obs_types.csv' WITH DELIMITER ',' CSV HEADER;

SELECT pg_size_pretty(pg_table_size('sensors.observations'));

SELECT 
  pg_size_pretty(pg_total_relation_size('sensors.observations_pkey')) as pkey_size,
  pg_size_pretty(pg_total_relation_size('sensors.observations_location_id_datetime_idx')) as location_size;

SELECT pg_size_pretty(pg_total_relation_size('sensors.observations'));