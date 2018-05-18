drop table if exists test1;
create table test1(
    name varchar(32) not null primary key
);
insert into test1 values ('shaohua');

drop procedure if exists test_if_statement_terminate_immediately;
delimiter #
create procedure test_if_statement_terminate_immediately ()
begin
    insert into test1 values ('shaohua');
    insert into test1 values ('shaohua1');
    insert into test1 values ('shaohua2');
end#
delimiter ;
