#!/usr/bin/env bash
source ./util.sh

#--------------Inject History Date
clearTables

mysql < ../databases/tables/cash_balance.sql
mysql < ../databases/tables/outstanding.sql
mysql < ../databases/tables/rental_month.sql

mysql < ../databases/procedures/insert_rental_month_if_not_exist.sql
mysql < ../databases/procedures/update_outstanding.sql

mysql < ../databases/functions/get_curr_month_first_day.sql
mysql < ../databases/functions/get_prev_prev_month.sql
mysql < ../databases/functions/get_prev_month.sql
mysql < ../databases/functions/get_curr_month.sql
mysql < ../databases/functions/get_next_month.sql

mysql < ../databases/triggers/trigger_cash_balance_before_insert.sql
mysql < ../databases/triggers/trigger_cash_balance_after_insert.sql
mysql < ../databases/triggers/trigger_cash_balance_after_update.sql
mysql < ../databases/triggers/trigger_cash_balance_after_delete.sql

mysql mydb -e \
    "
        -- start transaction;

        insert into rental_month values ('2018-04');

        insert into outstanding (outstanding, rental_month) values
        (-469.54, '2018-04');
        -- (-120.59, '2018-05');

        insert into cash_balance (item, amount, create_date, rental_month) values
        ('Rent',	2200	,'2018-04-01'	,'2018-04'),
        ('hansi', 	-375	,'2018-04-01'	,'2018-04'),
        ('Gwanjoo',	-425	,'2018-04-01'	,'2018-04'),
        ('Shaohua',	-425	,'2018-04-01'	,'2018-04'),
        ('Clean tools',	26	,'2018-04-01'	,'2018-04'),
        ('Neo',	-425	,'2018-04-01'	,'2018-04'),
        ('Groceries',	97.6	,'2018-04-01'	,'2018-04'),
        ('Tissue paper',	3.8	,'2018-04-01'	,'2018-04'),
        ('Subsidize Neos bed',	140	,'2018-04-01'	,'2018-04'),
        ('Jim', 	-300	,'2018-04-01'	,'2018-04'),
        ('e-stamp fee',	105	,'2018-04-01'	,'2018-04'),
        ('Utility', 	101.17	,'2018-04-01'	,'2018-04'),
        ('Wifi',	30.38	,'2018-04-01'	,'2018-04'),
        ('Aircon Contract',	300	,'2018-04-01'	,'2018-04'),
        ('Weifeng',	-225	,'2018-04-01'	,'2018-04'),
        ('Supeng',	-200	,'2018-04-01'	,'2018-04'),
        ('Weijie',	-100	,'2018-04-01'	,'2018-04'),
        ('Aircon Chemical Wash',	120	,'2018-04-01'	,'2018-04'),
        ('Psk',	-300	,'2018-04-01'	,'2018-04'),

        ('Rent',	2200	,'2018-05-01'	,'2018-05'),
        ('Supeng',	-200	,'2018-05-01'	,'2018-05'),
        ('Jim',	-300	,'2018-05-01'	,'2018-05'),
        ('Hansi',	-375	,'2018-05-01'	,'2018-05'),
        ('Shaohua',	-425	,'2018-05-01'	,'2018-05'),
        ('Neo',	-425	,'2018-05-01'	,'2018-05'),
        ('Gwanjoo',	-425	,'2018-05-01'	,'2018-05'),
        ('Grocery',	16.85	,'2018-05-01'	,'2018-05');

        -- commit;
    "

displayTables

