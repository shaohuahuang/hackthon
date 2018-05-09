use mydb;
drop table if exists outstanding;

create table outstanding(
    id      INT AUTO_INCREMENT NOT NULL,
    outstanding  float not null,
    rental_month VARCHAR(8) not null,
    update_at timestamp,
    PRIMARY KEY (id)
);