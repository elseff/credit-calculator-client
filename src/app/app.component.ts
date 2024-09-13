import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { CreditService } from '../_service/credit.service';
import { GetCreditPaymentsRequest } from '../_model/get-credit-payments-request';
import { FormsModule } from '@angular/forms';
import { GetCreditPaymentsResponse } from '../_model/get-credit-payments-response';
import { MonthPayment } from '../_model/month-payment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  request: GetCreditPaymentsRequest = {
    amount: 0,
    paymentType: '',
    period: 0,
    rate: 0,
    startDate: new Date()
  }
  payments: MonthPayment[] = []
  constructor(private creditService: CreditService){

  }

  clickCalculate(){
    this.creditService.calculate(this.request).subscribe(response=>{
      console.log(response)
      this.payments = response.payments
    });
  }
}
