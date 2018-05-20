use mydb;

drop trigger if exists trigger_cash_balance_before_insert;

delimiter #

create trigger trigger_cash_balance_before_insert before insert on cash_balance for each row
begin
    declare prevMonth char(7);
    declare currMonth char(7);

   set prevMonth = get_prev_month(NOW());
   set currMonth = get_curr_month(NOW());
--   if new.rental_month < prevMonth then
--        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "no item of before prev month is allowed to insert";
   if new.rental_month <= currMonth then
        call insert_rental_month_if_not_exist(new.rental_month);
   else
       SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "no item of next month is allowed to insert";
   end if;
end;#
delimiter ;

