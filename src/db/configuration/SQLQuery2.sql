USE [DwInvoiceDb]
GO

ALTER TABLE dbo.Invoice ADD CONSTRAINT
	FK_Invoice_Customer FOREIGN KEY
	(
	CustomerId
	) REFERENCES dbo.Customer
	(
	Id
	)
	
GO

ALTER TABLE dbo.InvoiceDetail ADD CONSTRAINT
	FK_InvoiceDetail_Product FOREIGN KEY
	(
	ProductId
	) REFERENCES dbo.Product
	(
	Id
	)

ALTER TABLE dbo.InvoiceDetail ADD CONSTRAINT
	FK_InvoiceDetail_Invoice FOREIGN KEY
	(
	InvoiceId
	) REFERENCES dbo.Invoice
	(
	Id
	)