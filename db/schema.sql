DROP DATABASE IF EXISTS avengers_db;
CREATE DATABASE avengers_db;
USE avengers_db;

CREATE TABLE avengers_db
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	alive BOOLEAN DEFAULT true,
	PRIMARY KEY (id)
);