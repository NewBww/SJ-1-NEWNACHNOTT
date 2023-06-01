#!/bin/bash
cat sas.sql | docker exec -i sas-database-1 mysql -u root -phThKPEq93f
cat user.sql | | docker exec -i sas-database-1 mysql -u root -phThKPEq93f 
cat sprint3_automate_test.sql | docker exec -i sas-database-1 mysql -u root -phThKPEq93f sas