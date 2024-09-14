import { MonthPayment } from "./month-payment";

export interface GetCreditPaymentsResponse{
    payments: MonthPayment[], //Платежи
    rate: number, //Ставка
    description: string, //Описание
    startPeriod: Date, //Начало периода
    endPeriod: Date, //Конец периода
    amount: number, //Сумма заёма
    paymentType: string, //Тип платежей
    totalAmount: number, //Общая сумма кредита
    overpayment: number, //Переплата в рублях
    percentageOverpayment: number //Переплата в процентах  
}