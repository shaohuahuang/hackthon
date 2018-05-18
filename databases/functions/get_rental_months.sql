use mydb;

drop PROCEDURE if exists get_rental_months;

delimiter #
create PROCEDURE get_rental_months (
    now datetime,
    OUT prevPrevMonth char(7),
    OUT prevMonth char(7),
    OUT currMonth char(7),
    OUT nextMonth char(7)
)
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
    set prevPrevMonth = DATE_FORMAT(SUBDATE(@firstDayDate, interval 2 month), "%Y-%m");
    set prevMonth = DATE_FORMAT(SUBDATE(@firstDayDate, interval 1 month), "%Y-%m");
    set currMonth = DATE_FORMAT(@firstDayDate, "%Y-%m");
    set nextMonth = DATE_FORMAT(ADDDATE(@firstDayDate, interval 1 month), "%Y-%m");
end#
delimiter ;