use mydb;

drop function if exists get_prev_prev_month;

delimiter #
create function get_prev_prev_month (
    now datetime
)
returns char(7)
begin
    set @firstDayDate = get_curr_month_first_day(now);
    set @prevPrevMonth = DATE_FORMAT(SUBDATE(@firstDayDate, interval 2 month), "%Y-%m");
    return @prevPrevMonth;
end#
delimiter ;