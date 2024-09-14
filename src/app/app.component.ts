import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { CreditService } from '../_service/credit.service';
import { GetCreditPaymentsRequest } from '../_model/get-credit-payments-request';
import { FormsModule } from '@angular/forms';
import { GetCreditPaymentsResponse } from '../_model/get-credit-payments-response';
import { MonthPayment } from '../_model/month-payment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, FormsModule, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  request: GetCreditPaymentsRequest = {
    paymentType: 'annual',
  }
  response?: GetCreditPaymentsResponse;
  constructor(private creditService: CreditService) {

  }

  clickCalculate() {
    this.creditService.calculate(this.request).subscribe(response => {
      console.log(response)
      this.response = response;
    });
  }

  fieldsIsValid(): boolean {
    return this.request.amount != null
      && this.request.period != null
      && this.request.rate != null
      && this.request.startDate != null;
  }

  clearForm(){
    this.request = {
      paymentType: 'annual'
    };
    this.response = undefined;
  }
}
