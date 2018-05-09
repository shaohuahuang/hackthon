use mydb;
drop table if exists rental_month;

create table rental_month(
    rental_month VARCHAR(8) not null,
    PRIMARY KEY (rental_month)
);