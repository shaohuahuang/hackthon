#!/usr/bin/env bash
source ./util.sh

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


#---------------Test insertion------------------------------------
clearTables
mysql < ../databases/functions/get_curr_month_first_day.sql
mysql < ../databases/functions/get_prev_prev_month.sql
mysql < ../databases/functions/get_prev_month.sql
mysql < ../databases/functions/get_curr_month.sql
mysql < ../databases/functions/get_next_month.sql
mysql < ../databases/triggers/trigger_cash_balance_before_insert.sql
mysql < ../databases/triggers/trigger_cash_balance_after_insert.sql
#
mysql mydb -e \
    "
        insert into cash_balance (item, amount, create_date, rental_month) values
        ('shaohua',	10,	'2018-03-01',get_prev_prev_month(NOW()));
    "
displayTables
clearTables

mysql mydb -e \
    "
        insert into cash_balance (item, amount, create_date, rental_month) values
        ('shaohua',	10,	'2018-04-01', get_prev_month(NOW()));
    "
displayTables
clearTables

mysql mydb -e \
    "
        insert into cash_balance (item, amount, create_date, rental_month) values
        ('shaohua',	10,	'2018-05-01',get_curr_month(NOW()));
    "
displayTables
clearTables

mysql mydb -e \
    "
        insert into cash_balance (item, amount, create_date, rental_month) values
        ('shaohua',	10,	'2018-05-01',get_next_month(NOW()));
    "
displayTables
clearTables




