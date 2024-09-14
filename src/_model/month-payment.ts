/**
 * Ежемесячный платёж
 */
export interface MonthPayment{
    index: number, //Номер месяца
    startPeriod: Date, //Начало периода
    endPeriod: Date, //Конец периода
    debtBalance: number, //Сумма долга
    payment: number, //Сумма платежа
    percentagePart: number, //Процентная часть
    debtPart: number, //Долговая часть
    debtBalanceOnPeriodEnd: number, //Конец долга на конец периода
    description: string // Описание
}