use mydb;

drop trigger if exists trigger_cash_balance_after_insert;

delimiter #

create trigger trigger_cash_balance_after_insert after insert on cash_balance for each row
begin
    set @prevMonth = get_prev_month(NOW());
   if new.rental_month = @prevMonth then
		if not exists (select * from rental_month where `rental_month` = new.rental_month) then
            insert into outstanding values (null, new.amount, new.rental_month, null);
        end if;
   end if;
end;#
delimiter ;

