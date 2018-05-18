#!/usr/bin/env bash

#--------------Inject History Date

#mysql < ../databases/util.sql
#mysql mydb -e "select * from rental_month"
#mysql mydb -e "select * from cash_balance"
#mysql mydb -e "select * from outstanding"


#--------------Test function get_rental_months------------------------------------

#mysql < ../databases/functions/get_rental_months.sql
#mysql mydb -e \
#    "
#        call get_rental_months('2018-12-23', @prevPrevMonth, @prevMonth, @currMonth, @nextMonth);
#        select @prevPrevMonth, @prevMonth, @currMonth, @nextMonth;
#    "