USE [DwInvoiceDb]
GO

WITH [INVOICE_BY_CLIENT_CTE] AS 
(
SELECT [A].[CustomerId] AS [CustomerId]
      ,[A].[Date]       AS [InvoiceDate]
  FROM [dbo].[Invoice] [A]
 WHERE [A].[CustomerId] IS NOT NULL
),
[SALES_FRECUENCY_BY_CLIENT_CTE] AS 
(
    SELECT [A].[CustomerId]       AS [CustomerId]
          ,[A].[InvoiceDate]      AS [Date_Sale_A]
          ,MIN([B].[InvoiceDate]) AS [Date_Sale_B]
      FROM [INVOICE_BY_CLIENT_CTE] [A]
INNER JOIN [INVOICE_BY_CLIENT_CTE] [B] ON ([A].[InvoiceDate] < [B].[InvoiceDate] AND [A].[CustomerId] = [B].[CustomerId])
  GROUP BY [A].[CustomerId]
          ,[A].[InvoiceDate]
),
[SALES_FRECUENCY_DAYS_BY_CLIENT_CTE] AS 
(

SELECT [A].[CustomerId] AS [CustomerId]
      ,DATEDIFF(DAY, [Date_Sale_A], [Date_Sale_B]) AS [Frecuency]
  FROM [SALES_FRECUENCY_BY_CLIENT_CTE] [A]

),
[AVG_FRECUENCY_DAYS_BY_CLIENT_CTE] AS 
(

  SELECT [A].[CustomerId]     AS [CustomerId]
        ,AVG([A].[Frecuency]) AS [Avg_Frecuency_Day]
    FROM [SALES_FRECUENCY_DAYS_BY_CLIENT_CTE] [A]
GROUP BY [A].[CustomerId]
)

    SELECT [CC].[Name]
          ,[CC].[Surname]
          ,[AA].[LastInvoice]
          ,DATEADD(DAY, [BB].[Avg_Frecuency_Day], [AA].[LastInvoice]) AS [NextPurchaseEstimate]
      FROM (SELECT [A].[CustomerId] AS [CustomerId]
                  ,MAX([A].[Date])  AS [LastInvoice]
              FROM [dbo].[Invoice] [A]
             WHERE [A].[CustomerId] IS NOT NULL
        GROUP BY [A].[CustomerId]) [AA]
INNER JOIN [AVG_FRECUENCY_DAYS_BY_CLIENT_CTE] [BB] ON [AA].[CustomerId] = [BB].[CustomerId]
INNER JOIN [dbo].[Customer]                   [CC] ON [AA].[CustomerId] = [CC].[Id]