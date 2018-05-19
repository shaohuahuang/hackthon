#!/usr/bin/env bash

function clearTables {
    mysql mydb -e "delete from cash_balance"
    mysql mydb -e "delete from outstanding"
    mysql mydb -e "delete from rental_month"
}

function displayTables {
    mysql mydb -e "select * from rental_month"
    mysql mydb -e "select * from cash_balance"
    mysql mydb -e "select * from outstanding"
}