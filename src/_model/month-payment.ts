export interface MonthPayment{
    index: number,
    startPeriod: Date,
    endPeriod: Date,
    debtBalance: number,
    payment: number,
    percentagePart: number,
    debtPart: number,
    debtBalanceOnPeriodEnd: number,
    description: string
}