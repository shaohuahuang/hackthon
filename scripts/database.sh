#!/usr/bin/env bash
source ./util.sh

#--------------Inject History Date
#mysql < ../databases/util.sql
#mysql mydb -e "select * from rental_month"
#mysql mydb -e "select * from cash_balance"
#mysql mydb -e "select * from outstanding"

#---------------Test insertion------------------------------------
clearTables
mysql < ../databases/functions/get_curr_month_first_day.sql
mysql < ../databases/functions/get_prev_prev_month.sql
mysql < ../databases/functions/get_prev_month.sql
mysql < ../databases/functions/get_curr_month.sql
mysql < ../databases/functions/get_next_month.sql

mysql < ../databases/procedures/insert_rental_month_if_not_exist.sql
mysql < ../databases/procedures/update_outstanding.sql

mysql < ../databases/triggers/trigger_cash_balance_before_insert.sql
mysql < ../databases/triggers/trigger_cash_balance_after_insert.sql
mysql < ../databases/triggers/trigger_cash_balance_after_update.sql
mysql < ../databases/triggers/trigger_cash_balance_after_delete.sql


#--------------------------For Prev Prev Month----------------------------------
# insert one record
#mysql mydb -e \
#    "
#        insert into cash_balance (item, amount, create_date, rental_month) values
#        ('shaohua',	10,	'2018-03-01',get_prev_prev_month(NOW()));
#    "
#displayTables
#clearTables


#--------------------------For Prev Month----------------------------------
# insert a record for prev month
mysql mydb -e \
    "
        insert into cash_balance (item, amount, create_date, rental_month) values
        ('shaohua',	10,	'2018-04-01', get_prev_month(NOW()));
    "
displayTables
clearTables

# insert two records for prev month
mysql mydb -e \
    "
        insert into cash_balance (item, amount, create_date, rental_month) values
        ('shaohua',	10,	'2018-04-01', get_prev_month(NOW())),
        ('shaohua',	10,	'2018-04-01', get_prev_month(NOW()));
    "
displayTables
clearTables

# delete a record for prev month
mysql mydb -e \
    "
        insert into cash_balance (item, amount, create_date, rental_month) values
        ('shaohua',	10,	'2018-04-01', get_prev_month(NOW()));
        delete from cash_balance;
    "
displayTables
clearTables

# update a record for prev month
mysql mydb -e \
    "
        insert into cash_balance (item, amount, create_date, rental_month) values
        ('shaohua',	10,	'2018-04-01', get_prev_month(NOW()));
        update cash_balance set amount = 20;
    "
displayTables
clearTables

#--------------------------For Curr Month----------------------------------
# insert one record for curr month
#mysql mydb -e \
#    "
#        insert into cash_balance (item, amount, create_date, rental_month) values
#        ('shaohua',	10,	'2018-05-01',get_curr_month(NOW()));
#    "
#displayTables
#clearTables

# insert two records for curr month
#mysql mydb -e \
#    "
#        insert into cash_balance (item, amount, create_date, rental_month) values
#        ('shaohua',	10,	'2018-05-01', get_curr_month(NOW())),
#        ('shaohua',	10,	'2018-05-01', get_curr_month(NOW()));
#    "
#displayTables
#clearTables
#
## delete a record for curr month
#mysql mydb -e \
#    "
#        insert into cash_balance (item, amount, create_date, rental_month) values
#        ('shaohua',	10,	'2018-05-01', get_curr_month(NOW()));
#        delete from cash_balance;
#    "
#displayTables
#clearTables

# update a record for curr month
#mysql mydb -e \
#    "
#        insert into cash_balance (item, amount, create_date, rental_month) values
#        ('shaohua',	10,	'2018-05-01', get_curr_month(NOW()));
#        update cash_balance set amount = 20;
#    "
#displayTables
#clearTables

#--------------------------For Next Month----------------------------------
# insert one record for next month
#mysql mydb -e \
#    "
#        insert into cash_balance (item, amount, create_date, rental_month) values
#        ('shaohua',	10,	'2018-05-01',get_next_month(NOW()));
#    "
#displayTables
#clearTables




