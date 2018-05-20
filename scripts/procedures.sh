#!/usr/bin/env bash
source ./util.sh

mysql < ../databases/procedures/insert_rental_month_if_not_exist.sql
mysql < ../databases/procedures/update_outstanding.sql

clearTables

mysql mydb -e \
    "
        call insert_rental_month_if_not_exist ('2018-01');
        call insert_rental_month_if_not_exist ('2018-01');
    "
displayTables
clearTables

mysql mydb -e \
    "
        call update_outstanding (10, '2018-01');
    "
displayTables
clearTables

mysql mydb -e \
    "
        insert into rental_month values ('2018-01');
        insert into outstanding values (null, 10, '2018-01', null);
        call update_outstanding (10, '2018-01');
    "
displayTables
clearTables


