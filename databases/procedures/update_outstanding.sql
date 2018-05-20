use mydb;

DROP PROCEDURE IF EXISTS update_outstanding;

delimiter #
create procedure update_outstanding (delta float, rentalMonth char(7))
BEGIN

call insert_rental_month_if_not_exist(rentalMonth);

if not exists (select * from outstanding where `rental_month` = rentalMonth) then
    insert into outstanding (outstanding, rental_month) values (delta, rentalMonth);
else
    begin
        declare currOutstanding float;
        select outstanding into currOutstanding from outstanding where `rental_month` = rentalMonth;
        update outstanding set outstanding = (delta + currOutstanding) where `rental_month` = rentalMonth;
    end;
end if;

END#
delimiter ;