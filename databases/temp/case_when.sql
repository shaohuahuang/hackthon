use mydb;

drop function if exists case_simple_case;
drop function if exists searched_case;

delimiter #
create function case_simple_case ()
returns int
begin
    declare res int;
    case 1
        when '1' then
            set res = 1;
        when 2 then
            set res = 2;
        else
            set res = 3;
    end case;
    return res;
end#

create function searched_case ()
returns int
begin
    declare res int;
    declare input int default 1;
    case
        when input < 5 then
            set res = 4;
        when input = 5 then
            set res = 5;
        else
            set res = 6;
    end case;
    return res;
end#

delimiter;


-- simple case ===> to check the value of an expression against a set of unique values
-- CASE  case_expression
--   WHEN when_expression_1 THEN commands
--   WHEN when_expression_2 THEN commands
--   ...
--   ELSE commands
-- END CASE;


-- CASE  =====> It can perform complex searches such as ranges ==> equivalent to if, but more readable
--    WHEN condition_1 THEN commands
--    WHEN condition_2 THEN commands
--    ...
--    ELSE commands
-- END CASE;