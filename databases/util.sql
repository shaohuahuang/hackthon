
-- delete contents from all tables
SET SQL_SAFE_UPDATES = 0;
delete from cash_balance;
delete from outstanding;
delete from rental_month;
SET SQL_SAFE_UPDATES = 1;

-- insert raw data

insert into rental_month values ('2018-02'), ('2018-03'), ('2018-04'), ('2018-05');

insert into cash_balance (item, amount, create_date, rental_month) values
('Rent',	2200,	'2018-02-01'	,'2018-02'),
('Hansi',	-350,	'2018-02-01'	,'2018-02'),
('shaohua',	-400,	'2018-02-01'	,'2018-02'),
('Gwanjoo',	-400,	'2018-02-01'	,'2018-02'),
('Weijie',	-100,	'2018-02-01'	,'2018-02'),
('Body wash',	9.5,	'2018-02-01'	,'2018-02'),
('Career',	-22,	'2018-02-01'	,'2018-02'),
('Weifeng',	-200,	'2018-02-01'	,'2018-02'),
('Jim',	-300,       '2018-02-01'	,'2018-02'),
('Supeng',	-200,   '2018-02-01'	,'2018-02'),
('Psk',	-300,       '2018-02-01'	,'2018-02'),
('wifi', 	29,     '2018-02-01'	,'2018-02'),
('utility', 	186.68, '2018-02-01'	,'2018-02'),
('Steamboat ingredients', 	103.56, '2018-02-01'	,'2018-02'),
('Neo',	-400, '2018-02-01', '2018-02'),

('Rent',	2200	,'2018-03-01'	,'2018-03'),
('shaohua',	-400	,'2018-03-01'	,'2018-03'),
('hansi',	-350	,'2018-03-01'	,'2018-03'),
('gwanjoo',	-400	,'2018-03-01'	,'2018-03'),
('jim',	-300	,'2018-03-01'	,'2018-03'),
('weijie',	-100	,'2018-03-01'	,'2018-03'),
('supeng',	-200	,'2018-03-01'	,'2018-03'),
('groceries (body wash, shampoo, detergent, etc)',	70.3	,'2018-03-01'	,'2018-03'),
('psk',	-300	,'2018-03-01'	,'2018-03'),
('Weifeng',	-200	,'2018-03-01'	,'2018-03'),
('Neo',	-400	,'2018-03-01'	,'2018-03'),
('Utility',	177.12	,'2018-03-01'	,'2018-03'),
('Wifi',	30.38	,'2018-03-01'	,'2018-03'),

('Rent',	2200	,'2018-04-01'	,'2018-04'),
('hansi', 	-375	,'2018-04-01'	,'2018-04'),
('Gwanjoo',	-425	,'2018-04-01'	,'2018-04'),
('Shaohua',	-425	,'2018-04-01'	,'2018-04'),
('Clean tools',	26	,'2018-04-01'	,'2018-04'),
('Neo',	-425	,'2018-04-01'	,'2018-04'),
('Groceries',	97.6	,'2018-04-01'	,'2018-04'),
('Tissue paper',	3.8	,'2018-04-01'	,'2018-04'),
('Subsidize Neos bed',	140	,'2018-04-01'	,'2018-04'),
('Jim', 	-300	,'2018-04-01'	,'2018-04'),
('e-stamp fee',	105	,'2018-04-01'	,'2018-04'),
('Utility', 	101.17	,'2018-04-01'	,'2018-04'),
('Wifi',	30.38	,'2018-04-01'	,'2018-04'),
('Aircon Contract',	300	,'2018-04-01'	,'2018-04'),
('Weifeng',	-225	,'2018-04-01'	,'2018-04'),
('Supeng',	-200	,'2018-04-01'	,'2018-04'),
('Weijie',	-100	,'2018-04-01'	,'2018-04'),
('Aircon Chemical Wash',	120	,'2018-04-01'	,'2018-04'),
('Psk',	-300	,'2018-04-01'	,'2018-04'),

('Rent',	2200	,'2018-05-01'	,'2018-05'),
('Supeng',	-200	,'2018-05-01'	,'2018-05'),
('Jim',	-300	,'2018-05-01'	,'2018-05'),
('Hansi',	-375	,'2018-05-01'	,'2018-05'),
('Shaohua',	-425	,'2018-05-01'	,'2018-05'),
('Neo',	-425	,'2018-05-01'	,'2018-05'),
('Gwanjoo',	-425	,'2018-05-01'	,'2018-05'),
('Grocery',	16.85	,'2018-05-01'	,'2018-05');


insert into outstanding (outstanding, rental_month) values
(-154.08, '2018-02'),
(-297.34, '2018-03'),
(-469.54, '2018-04'),
(-120.59, '2018-05');