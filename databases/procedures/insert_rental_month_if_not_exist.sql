use mydb;

DROP PROCEDURE IF EXISTS insert_rental_month_if_not_exist;

delimiter #
create procedure insert_rental_month_if_not_exist (rentalMonth char(7))
BEGIN
if not exists (select * from rental_month where `rental_month` = rentalMonth) then
    insert into rental_month values (rentalMonth);
end if;
END#
delimiter ;