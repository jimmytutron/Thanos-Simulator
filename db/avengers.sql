DROP TABLE IF EXISTS avengers;
CREATE TABLE avengers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	alive BOOLEAN DEFAULT true,
	PRIMARY KEY (id)
);
INSERT INTO avengers (name)
VALUES
("Spiderman"),
("Captain America"),
("Iron Man"),
("Thor"),
("Rocket Raccoon"),
("Gamora"),
("Dr. Strange"),
("StarLord"),
("Black Widow"),
("Black Panther");

SELECT * FROM avengers;
