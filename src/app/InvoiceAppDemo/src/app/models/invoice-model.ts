export interface InvoiceModel {

    id?: number;
    customerId?: number;
    date?: Date;
    invoiceSequence?: number;
    prefix?: string;
    deleted?: boolean;
}