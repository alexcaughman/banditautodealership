CREATE ROLE bandit_datareader WITH
	NOLOGIN
	NOSUPERUSER
	NOCREATEDB
	NOCREATEROLE
	INHERIT
	NOREPLICATION
	CONNECTION LIMIT -1;

-- Run this code on the new bandit_auto database
GRANT CONNECT ON DATABASE bandit_auto TO bandit_datareader;
-- Run this code on the new bandit_auto database
GRANT SELECT ON SEQUENCE public.vehicles_id_seq TO bandit_datareader;
-- Run this code on the new bandit_auto database
GRANT SELECT ON TABLE public.vehicles TO bandit_datareader;
-- Run this code on the new bandit_auto database
CREATE ROLE "appUser" WITH
	LOGIN
	NOSUPERUSER
	NOCREATEDB
	NOCREATEROLE
	INHERIT
	NOREPLICATION
	CONNECTION LIMIT -1
	PASSWORD 'yourpasswordhere';

GRANT bandit_datareader TO "appUser";