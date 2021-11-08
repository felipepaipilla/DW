USE [DwInvoiceDb]
GO

WITH [CUSTOMER_35_CTE] AS
(
    SELECT [AA].[Id]    AS [CustomerId]
      FROM (SELECT [A].[Id]                                   AS [Id]     
                  ,DATEDIFF(YEAR, [A].[BirthDate], GETDATE()) AS [Years]
              FROM [dbo].[Customer] [A]) [AA]
     WHERE [AA].[Id] <= 35

),
[CUTOMER_ORDERS_CTE] AS 
(
    SELECT [A].[CustomerId]
      FROM [dbo].[Invoice]   [A]
INNER JOIN [CUSTOMER_35_CTE] [B] ON [A].[CustomerId] = [B].[CustomerId]
     WHERE [A].[Date] BETWEEN '2000-02-01' AND '2000-05-25'
     
)

    SELECT [A].[Id]
          ,[A].[Name]
          ,[A].[Surname]
          ,[A].[BirthDate]
      FROM [dbo].[Customer]     [A]
INNER JOIN [CUTOMER_ORDERS_CTE] [B] ON [A].[Id] = [B].[CustomerId];

