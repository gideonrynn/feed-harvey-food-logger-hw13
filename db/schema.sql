-- Drops the burgers_db if it exists currently --
DROP DATABASE IF EXISTS burgers_db;

-- Create the database burgers_db 
CREATE DATABASE burgers_db;

-- Specify database fulcrum1_db for use
USE burgers_db;

-- Create the burgers table
CREATE TABLE burgers (
id integer not null auto_increment,
burger_name varchar(70) not null,
devoured boolean default false,
PRIMARY KEY(id)
);

