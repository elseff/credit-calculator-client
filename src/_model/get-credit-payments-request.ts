export interface GetCreditPaymentsRequest{
    startDate: Date,
    amount: number,
    period: number,
    paymentType: string,
    rate: number
}