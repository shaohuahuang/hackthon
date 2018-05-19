#!/usr/bin/env bash

#---------------Test get_prev_prev_month------------------------------------\
mysql < ../databases/functions/get_curr_month_first_day.sql
mysql < ../databases/functions/get_prev_prev_month.sql

mysql mydb -e \
    "
        select get_prev_prev_month(now());
    "

mysql < ../databases/functions/get_prev_month.sql

mysql mydb -e \
    "
        select get_prev_month(now());
    "

mysql < ../databases/functions/get_curr_month.sql

mysql mydb -e \
    "
        select get_curr_month(now());
    "

mysql < ../databases/functions/get_next_month.sql

mysql mydb -e \
    "
        select get_next_month(now());
    "

