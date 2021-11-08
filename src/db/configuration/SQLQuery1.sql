
CREATE DATABASE [DwInvoiceDb]
GO

USE [DwInvoiceDb]
GO


CREATE TABLE dbo.InvoiceDetail
	(
	Id int NOT NULL identity(1,1) PRIMARY KEY,
	InvoiceId int NOT NULL,
	ProductId int NOT NULL,
	UnitPrice numeric(18, 0) NOT NULL,
	Quantity int NOT NULL
	)
GO

CREATE TABLE dbo.Invoice
	(
	Id int NOT NULL identity(1,1) PRIMARY KEY,
	CustomerId int NULL,
	Date datetime NULL,
	InvoiceSequence int NULL,
	Prefix varchar(50) NULL,
    Deleted bit
	)
GO

CREATE TABLE dbo.Product
	(
	Id int NOT NULL identity(1,1) PRIMARY KEY,
	Detail varchar(50) NOT NULL,
	UnitPrice numeric(18, 0) NOT NULL,
	Stock int NOT NULL
	)  ON [PRIMARY]
GO

CREATE TABLE dbo.Customer
	(
	Id int NOT NULL identity(1,1) PRIMARY KEY,
	Name varchar(50) NOT NULL,
	Surname varchar(50) NOT NULL,
	BirthDate datetime NOT NULL
	)  ON [PRIMARY]
GO
