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
("Captain America"),
("Iron Man"),
("Thor"),
("Spiderman"),
("Dr. Strange"),
("StarLord"),
("Black Widow"),
("Black Panther");

SELECT * FROM avengers;
