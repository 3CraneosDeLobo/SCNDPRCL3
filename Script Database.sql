Create Database DBRobos

use DBRobos

Create Table Robos(
ID INT Identity,
Cedula varchar(20),
Nombre varchar(200),
Fecha DateTime,
Que varchar(200),
Valor float,
Donde varchar(200),
lat float,
lgn float,
Primary Key(ID)



);



select * from Robos