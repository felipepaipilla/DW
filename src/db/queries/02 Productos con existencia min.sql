USE [DwInvoiceDb]
GO

SELECT [A].[Id]
      ,[A].[Detail]
      ,[A].[UnitPrice]
      ,[A].[Stock]
  FROM [dbo].[Product] [A]
 WHERE [A].[Stock] <= 5