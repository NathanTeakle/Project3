DROP TABLE "Rank";
DROP TABLE "Sports"

CREATE TABLE "Rank"(
	"Sport_Name" INT NOT NULL,
	"Name" varchar(30) NOT NULL,
	"Nationality" varchar(30) NOT NULL,
	"Current_Rank" INT NOT NULL,
	"Year" INT NOT NULL,
	"Earnings_Million" DECIMAL(5,1) NOT NULL,
	CONSTRAINT "pk_rank" PRIMARY KEY (
        "Sport_Name")
);

CREATE TABLE "Sports"(
	"Sport_Name" INT NOT NULL,
	"First name" varchar(30) NOT NULL,
	"Last name" varchar(30),
	"Nationality" varchar(30) NOT NULL,
	"Sport" varchar(30) NOT NULL,
	CONSTRAINT "pk_Sports" PRIMARY KEY (
        "Sport_Name")
);

Select * From "Rank";
Select * From "Sports";

ALTER TABLE "Rank" ADD CONSTRAINT "fk_Rank_Sports_id" FOREIGN KEY("Sport_Name")
REFERENCES "Sports" ("Sport_Name");