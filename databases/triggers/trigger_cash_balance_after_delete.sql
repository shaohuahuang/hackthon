use mydb;

drop trigger if exists trigger_cash_balance_after_delete;

delimiter #

create trigger trigger_cash_balance_after_delete after delete on cash_balance for each row
begin
   declare prevMonth char(7);
   declare currMonth char(7);
   declare nextMonth char(7);

   set prevMonth = get_prev_month(NOW());
   set currMonth = get_curr_month(NOW());
   set nextMonth = get_next_month(NOW());

   if old.rental_month = prevMonth then
        begin
            declare currOutstanding float;
            select outstanding into currOutstanding from outstanding where rental_month = currMonth;
            update outstanding set outstanding = (currOutstanding - old.amount) where rental_month = currMonth;
        end;

   elseif old.rental_month = currMonth then
        begin
            declare currOutstanding float;
            select outstanding into currOutstanding from outstanding where rental_month = nextMonth;
            update outstanding set outstanding = (currOutstanding - old.amount) where rental_month = nextMonth;
        end;
   end if;
end;#
delimiter ;

