use mydb;

drop function if exists get_curr_month;

delimiter #
create function get_curr_month (
    now datetime
)
returns char(7)
begin
    declare firstDayDate date;
    declare currMonth char(7);

    set firstDayDate = get_curr_month_first_day(now);
    set currMonth = DATE_FORMAT(firstDayDate, "%Y-%m");
    return currMonth;
end#
delimiter ;