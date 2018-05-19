use mydb;

drop trigger if exists trigger_cash_balance_before_insert;

delimiter #

create trigger trigger_cash_balance_before_insert before insert on cash_balance for each row
begin
    set @now = NOW();
    set @month = MONTH(@now);
    set @year = YEAR(@now);
    set @day = DAY(@now);
    set @currYear = @year;
    set @currMonth = @month;
    if @day >= 23 then
        if @month = 12 then
            set @currYear = @currYear + 1;
            set @currMonth = 1;
        else
            set @currMonth = @currMonth + 1;
        end if;
    end if;
    set @firstDayDate = CONCAT(@currYear, '-', @currMonth, '-01');
    set @prevPrevMonth = DATE_FORMAT(SUBDATE(@firstDayDate, interval 2 month), "%Y-%m");
    set @prevMonth = DATE_FORMAT(SUBDATE(@firstDayDate, interval 1 month), "%Y-%m");
    set @currMonth = DATE_FORMAT(@firstDayDate, "%Y-%m");
    set @nextMonth = DATE_FORMAT(ADDDATE(@firstDayDate, interval 1 month), "%Y-%m");

   if new.rental_month < @prevMonth then
        if not exists (select * from rental_month where `rental_month` = new.rental_month) then
            insert into rental_month values (new.rental_month);
        end if;
   elseif new.rental_month = @prevMonth then
		if not exists (select * from rental_month where `rental_month` = new.rental_month) then
            insert into rental_month values (new.rental_month);
        end if;
    end if;
end;#
delimiter ;

