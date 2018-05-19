use mydb;

drop trigger if exists trigger_cash_balance_before_insert;

delimiter #

create trigger trigger_cash_balance_before_insert after insert on cash_balance for each row
begin

end;#
delimiter ;

