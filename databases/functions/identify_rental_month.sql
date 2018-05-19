use mydb;

drop PROCEDURE if exists identify_rental_month;

delimiter #
create PROCEDURE identify_rental_month (
    rental_month char(7),
    curr_rental_month char(7),

    OUT isBeforePrevMonth bit,
    OUT isPrevMonth bit,
    OUT isCurrMonth bit
)
begin
    set @now = concat(curr_rental_month, '-01');
    set
    call get_rental_months(@now, @prevPrevMonth, @prevMonth, @currMonth, @nextMonth);

end#
delimiter ;