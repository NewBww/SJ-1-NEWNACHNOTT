use sas;
TRUNCATE TABLE announcements ;

insert into announcements (announcementTitle, announcementDescription, publishDate, closeDate, announcementDisplay, categoryId)
	values('(PBI8-9) Title 1','(PBI8-9) Descripition 1','2023-05-01 06:00:00+07:00','2023-12-31 18:00:00+07:00','Y',1),
		  ('(PBI8-9) Title 2','(PBI8-9) Descripition 2','2023-06-01 06:00:00+07:00','2023-12-31 18:00:00+07:00','Y',1),
		  ('(PBI8-9) Title 3','(PBI8-9) Descripition 3',null,'2023-12-31 18:00:00+07:00','Y',1),
		  ('(PBI8-9) Title 4','(PBI8-9) Descripition 4',null,'2023-05-01 18:00:00+07:00','Y',1),
		  ('(PBI8-9) Title 5','(PBI8-9) Descripition 5','2023-05-01 06:00:00+07:00','2023-05-02 18:00:00+07:00','Y',2),
		  ('(PBI8-9) Title 6','(PBI8-9) Descripition 6','2023-05-01 06:00:00+07:00',null,'Y',2),
		  ('(PBI8-9) Title 7','(PBI8-9) Descripition 7','2023-06-01 06:00:00+07:00',null,'Y',2),
		  ('(PBI8-9) Title 8','(PBI8-9) Descripition 8',null,null,'Y',2),
		  ('(PBI8-9) Title 9','(PBI8-9) Descripition 9','2023-05-01 06:00:00+07:00','2023-12-31 18:00:00+07:00','N',2) ;