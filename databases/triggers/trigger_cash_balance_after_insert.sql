use mydb;

drop trigger if exists trigger_cash_balance_after_insert;

delimiter #

create trigger trigger_cash_balance_after_insert after insert on cash_balance for each row
begin
   declare prevMonth char(7);
   declare currMonth char(7);
   declare nextMonth char(7);

   set prevMonth = get_prev_month(NOW());
   set currMonth = get_curr_month(NOW());
   set nextMonth = get_next_month(NOW());

   if new.rental_month = prevMonth then
        if not exists (select * from rental_month where `rental_month` = currMonth) then
            insert into rental_month values (currMonth);
        end if;
        insert into outstanding values (null, new.amount, currMonth, null);

   elseif new.rental_month = currMonth then
        if not exists (select * from rental_month where `rental_month` = nextMonth) then
            insert into rental_month values (nextMonth);
        end if;
        insert into outstanding values (null, new.amount, nextMonth, null);
   end if;
end;#
delimiter ;

