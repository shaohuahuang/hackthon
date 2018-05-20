#!/usr/bin/env bash

mysql < ../databases/temp/case_when.sql

mysql mydb -e "select case_simple_case()";

mysql mydb -e "select searched_case()";