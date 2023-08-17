use sas;
DROP USER IF EXISTS 'dba_new'@'localhost', 'dba_new'@'%', 'dba_nach'@'localhost', 'dba_nach'@'%', 'dba_bung'@'localhost', 'dba_bung'@'%', 'api_announcement'@'localhost';
create user 'dba_new'@'localhost' identified by '3n';
create user 'dba_new'@'%' identified by '3n';
create user 'dba_nach'@'localhost' identified by '3n';
create user 'dba_nach'@'%' identified by '3n';
create user 'dba_bung'@'localhost' identified by '1234';
create user 'dba_bung'@'%' identified by '1234';
create user 'api_announcement'@'localhost' identified by 'sj1sas';

grant alter, create, create view, delete, drop, index, insert, lock tables, select, show view, update  on *.* to 'dba_new'@'localhost', 'dba_nach'@'localhost', 'dba_bung'@'localhost' ;
grant alter, create, create view, delete, drop, index, insert, lock tables, select, show view, update  on *.* to 'dba_new'@'%', 'dba_nach'@'%', 'dba_bung'@'%' ;

grant insert, update, delete, select on *.* to 'api_announcement'@'localhost';