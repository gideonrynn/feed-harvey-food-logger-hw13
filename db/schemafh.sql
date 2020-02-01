-- Drops the feedharvey_db if it exists currently --
DROP DATABASE IF EXISTS feedharvey_db;

-- Create the database feedharvey_db 
CREATE DATABASE feedharvey_db;

-- Specify database feedharvey_db for use
USE feedharvey_db;

-- Create the food table
CREATE TABLE food (
id integer not null auto_increment,
food_name varchar(70) not null,
devoured boolean default false,
PRIMARY KEY(id)
);

SELECT * FROM feedharvey_db.food;

