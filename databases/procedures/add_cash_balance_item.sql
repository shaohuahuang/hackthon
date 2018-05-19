DROP PROCEDURE IF EXISTS _add_cash_balance_item;

delimiter #
create procedure _add_cash_balance_item (item varchar(256), amount float, create_date datetime, rental_month varchar(8), curr_rental_month varchar(8))
BEGIN
set @now = concat(curr_rental_month, '-01');
call get_rental_months(@now, @prevPrevMonth, @prevMonth, @currMonth, @nextMonth);
if rental_month < @prevMonth then
    if not exists (select * from rental_month where `rental_month` = rental_month) then
        insert into rental_month values (rental_month);
    end if;
end if;


if not exists (select * from rental_month where `rental_month` = rental_month) then
    insert into rental_month values (rental_month);
end if;
 insert into cash_balance (item, amount, create_date, rental_month) values (item, amount, create_date, rental_month);
 select * from cash_balance where id = last_insert_id();
END#
delimiter ;


DROP PROCEDURE IF EXISTS add_cash_balance_item;

delimiter #
create procedure add_cash_balance_item (item varchar(256), amount float, create_date datetime, rental_month varchar(8))
BEGIN
if not exists (select * from rental_month where `rental_month` = rental_month) then
    insert into rental_month values (rental_month);
end if;
 insert into cash_balance (item, amount, create_date, rental_month) values (item, amount, create_date, rental_month);
 select * from cash_balance where id = last_insert_id();
END#
delimiter ;