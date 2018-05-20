use mydb;

DROP PROCEDURE IF EXISTS update_outstanding;

delimiter #
create procedure update_outstanding (delta float, rentalMonth char(7))
BEGIN

declare prevMonth char(7);
set prevMonth = get_prev_month(concat(rentalMonth, '-01'));

call insert_rental_month_if_not_exist(rentalMonth);

if not exists (select * from outstanding where `rental_month` = rentalMonth) then -- curr month does not exist
    begin
        declare prevOutstanding float;
        select outstanding into prevOutstanding from outstanding where `rental_month` = prevMonth;
        insert into outstanding (outstanding, rental_month) values (delta + prevOutstanding, rentalMonth);
    end;
else
    begin
        declare currOutstanding float;
        select outstanding into currOutstanding from outstanding where `rental_month` = rentalMonth;
        update outstanding set outstanding = (delta + currOutstanding) where `rental_month` = rentalMonth;
    end;
end if;

END#
delimiter ;