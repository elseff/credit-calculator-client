export interface GetCreditPaymentsRequest{
    startDate: Date, //Дата начала кредита
    amount: number, //Сумма кредита
    period: number, //Период
    paymentType: string, //Тип платежей
    rate: number //Годовая ставка
}