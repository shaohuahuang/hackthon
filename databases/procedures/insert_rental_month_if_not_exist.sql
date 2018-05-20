use mydb;

DROP PROCEDURE IF EXISTS insert_rental_month_if_not_exist;

delimiter #
create procedure insert_rental_month_if_not_exist (rental_month char(7))
BEGIN
if not exists (select * from rental_month where `rental_month` = rental_month) then
    insert into rental_month values (rental_month);
end if;
END#
delimiter ;