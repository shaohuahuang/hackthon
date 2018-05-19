use mydb;

-- delete contents from all tables
start transaction;

SET SQL_SAFE_UPDATES = 0;
delete from cash_balance;
delete from outstanding;
delete from rental_month;
SET SQL_SAFE_UPDATES = 1;

-- insert raw data through store procedure

set @prevPrevMonth = NOW()
set



call add_cash_balance_item ('shaohua', 10, NOW(), rental_month varchar(8))




commit;