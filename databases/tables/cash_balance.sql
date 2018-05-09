use mydb;
drop table if exists cash_balance;

create table cash_balance(
    id      INT AUTO_INCREMENT NOT NULL,
    item    VARCHAR(256) not null,
    amount  float not null,
    create_date datetime not null,
    rental_month VARCHAR(8) not null,
    PRIMARY KEY (id)
);