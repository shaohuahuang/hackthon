#!/usr/bin/env bash

function execSql() {
    mysql -u root mydb < $1
}


# re-create the cash_balance database and insert the test data
execSql ././../../databases/v1/tables-v1/cash_balance.sql
execSql ././../../databases/v1/util.sql
