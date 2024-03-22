SELECT rolname
FROM pg_roles;

SELECT *
FROM pg_roles;

SELECT current_role;

CREATE ROLE abc_open_data WITH LOGIN;

CREATE ROLE publishers WITH LOGIN ROLE abc_open_data;

GRANT USAGE ON SCHEMA analytics TO publishers;

GRANT SELECT ON ALL TABLES IN SCHEMA analytics TO publishers;

SELECT *
FROM information_schema.table_privileges
WHERE grantee = 'publishers';

SET ROLE abc_open_data;

SELECT *
FROM analytics.downloads
LIMIT 10;

SET ROLE ccuser;

SELECT *
FROM directory.datasets;

GRANT USAGE ON SCHEMA directory TO publishers;

GRANT SELECT (id, create_date, hosting_path, publisher, src_size)
ON directory.datasets
TO publishers;

SET ROLE abc_open_data;

SELECT id, publisher, hosting_path
FROM directory.datasets;

SET ROLE ccuser;

CREATE POLICY download_privacy ON analytics.downloads
FOR SELECT TO publishers USING (owner=current_user);

ALTER TABLE analytics.downloads ENABLE ROW LEVEL SECURITY;

SET ROLE abc_open_data;

SELECT *
FROM analytics.downloads
LIMIT 10;