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
        call update_outstanding(new.amount, currMonth);
   elseif new.rental_month = currMonth then
        call update_outstanding(new.amount, nextMonth);
   end if;
end;#
delimiter ;

