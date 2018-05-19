use mydb;

drop function if exists get_curr_month_first_day;

delimiter #
create function get_curr_month_first_day (
    now datetime
)
returns date
begin
    set @month = MONTH(now);
    set @year = YEAR(now);
    set @day = DAY(now);
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
    return @firstDayDate;
end#
delimiter ;