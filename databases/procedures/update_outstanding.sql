use mydb;

DROP PROCEDURE IF EXISTS update_outstanding;

delimiter #
create procedure update_outstanding (delta float, rental_month char(7))
BEGIN
call insert_rental_month_if_not_exist(rental_month);

if not exists (select * from outstanding where `rental_month` = rental_month) then
    insert into outstanding values (null, delta, rental_month, null);
else
    begin
        declare currOutstanding float;
        select outstanding into currOutstanding from outstanding where `rental_month` = rental_month;
        update outstanding set outstanding = (delta + currOutstanding) where `rental_month` = rental_month;
    end;
end if;

END#
delimiter ;