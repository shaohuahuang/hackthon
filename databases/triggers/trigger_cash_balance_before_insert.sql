use mydb;

drop trigger if exists trigger_cash_balance_before_insert;

delimiter #

create trigger trigger_cash_balance_before_insert before insert on cash_balance for each row
begin
   set @prevMonth = get_prev_month(NOW());
   set @currMonth = get_curr_month(NOW());
   if new.rental_month < @prevMonth then
        if not exists (select * from rental_month where `rental_month` = new.rental_month) then
            insert into rental_month values (new.rental_month);
        end if;
   elseif new.rental_month = @prevMonth then
		if not exists (select * from rental_month where `rental_month` = new.rental_month) then
            insert into rental_month values (new.rental_month);
        end if;
--   elseif new.rental_month = @currMonth then
--		if not exists (select * from rental_month where `rental_month` = new.rental_month) then
--            insert into rental_month values (new.rental_month);
--        end if;
   end if;
end;#
delimiter ;

