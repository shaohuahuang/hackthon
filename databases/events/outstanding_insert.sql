drop event if exists outstanding_insert;

-- // event to inset into table every 5 seconds
-- CREATE EVENT mark_insert
-- ON SCHEDULE EVERY 5 MINUTE
-- DO INSERT INTO mark_log (message) VALUES('-- MARK --');

delimiter $
create event outstanding_insert
    on schedule every 1 month
    starts '2018-05-23 00:00:00'
    do
        begin

        end $

delimiter ;