use sas;
create user 'dba_new'@'localhost' identified by '3n';
create user 'dba_nach'@'localhost' identified by '3n';
create user 'dba_nott'@'localhost' identified by '3n';
create user 'api_announcement'@'localhost' identified by 'sj1sas';

grant alter, create, create view, delete, drop, index, insert, lock tables, select, show view, update  on *.* to 'dba_new'@'localhost', 
'dba_nach'@'localhost', 'dba_nott'@'localhost' ;

grant insert, update, delete, select on *.* to 'api_announcement'@'localhost';

show grants for 'api_announcement'@'localhost';
show grants for 'dba_new'@'localhost';