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

mysql < ../databases/util.sql

displayTables

