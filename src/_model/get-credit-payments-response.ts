import { MonthPayment } from "./month-payment";

export interface GetCreditPaymentsResponse{
    payments: MonthPayment[],
    rate: number,
    description: string,
    startPeriod: Date,
    endPeriod: Date,
    amount: number,
    paymentType: string,
    totalAmount: number,
    overpayment: number,
    percentageOverpayment: number   
}