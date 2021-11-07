USE [DwInvoiceDb] 
GO

WITH [SALES_BY_PRODUCT_CTE] AS
(
    SELECT [AA].[ProductId]           AS [ProductId]
          ,SUM([AA].[TotalByProduct]) AS [TotalByProduct]
      FROM (SELECT [ProductId]
                  ,[A].[UnitPrice] * [A].[Quantity] AS [TotalByProduct]
              FROM [dbo].[InvoiceDetail] [A]) [AA]
   GROUP BY [AA].[ProductId]

)

    SELECT [A].[Id]             AS [Id]    
          ,[A].[Detail]         AS [Detail]
          ,[B].[TotalByProduct] AS [TotalSales]
      FROM [dbo].[Product]        [A]
INNER JOIN [SALES_BY_PRODUCT_CTE] [B] ON [A].[Id] = [B].[ProductId]
  ORDER BY [A].[Id];
