USE [DwInvoiceDb] 
GO

WITH [SALES_BY_PRODUCT_CTE] AS
(
    SELECT [AA].[ProductId]           AS [ProductId]
          ,SUM([AA].[TotalByProduct]) AS [TotalByProduct]
      FROM (SELECT [ProductId]
                  ,[A].[UnitPrice] * [A].[Quantity] AS [TotalByProduct]
              FROM [dbo].[InvoiceDetail] [A]
        INNER JOIN [dbo].[Invoice] [B] ON [A].[InvoiceId] = [B].[Id]
             WHERE [B].[Date] BETWEEN '2000-01-01 00:00:00.000' AND '2000-12-31 23:59:59.999') [AA]
   GROUP BY [AA].[ProductId]

)

    SELECT [A].[Id]             AS [Id]    
          ,[A].[Detail]         AS [Detail]
          ,[B].[TotalByProduct] AS [TotalSales]
      FROM [dbo].[Product]        [A]
INNER JOIN [SALES_BY_PRODUCT_CTE] [B] ON [A].[Id] = [B].[ProductId]
  ORDER BY [A].[Id];
