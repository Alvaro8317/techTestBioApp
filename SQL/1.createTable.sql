-- Preferences
SET TIMEZONE = 'America/Bogota';
select * from current_timestamp;

-- Create tables
CREATE TABLE meters (
    meter_id VARCHAR (20) UNIQUE NOT NULL PRIMARY KEY,
    description VARCHAR (250)
);

CREATE TABLE registers (
    id_reg serial PRIMARY KEY,
    meter_date TIMESTAMP NOT NULL,
    active_energy NUMERIC NOT NULL,
    dayx INTEGER NOT NULL,
    monx INTEGER NOT NULL,
    yearx INTEGER NOT NULL,
    meter_id VARCHAR (20) NOT NULL,
    FOREIGN KEY (meter_id) REFERENCES meters(meter_id)
);
