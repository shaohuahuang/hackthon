use mydb;

drop function if exists get_next_month;

delimiter #
create function get_next_month (
    now datetime
)
returns char(7)
begin
    set @firstDayDate = get_curr_month_first_day(now);
    set @nextMonth = DATE_FORMAT(ADDDATE(@firstDayDate, interval 1 month), "%Y-%m");
    return @nextMonth;
end#
delimiter ;