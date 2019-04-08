#!/usr/bin/env bash

function execSql() {
    mysql -u root mydb < $1
}

execSql ././../../databases/v1/util.sql

# re-create the cash_balance database
# execSql ././../../databases/v1/tables-v1/cash_balance.sql