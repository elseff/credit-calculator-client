import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { GetCreditPaymentsRequest } from "../_model/get-credit-payments-request";
import { Observable } from "rxjs";
import { GetCreditPaymentsResponse } from "../_model/get-credit-payments-response";

@Injectable({
    providedIn: 'root'
  })
export class CreditService{
    private options = {headers: new HttpHeaders().set('Content-Type', 'application/json')};
    api: string = "http://192.168.100.4:8080/credits";

    constructor(private httpClient: HttpClient){
    }

    calculate(request: GetCreditPaymentsRequest): Observable<GetCreditPaymentsResponse> {
        console.log('Sending request to ' + this.api)
        console.log(request)
        return this.httpClient.post<GetCreditPaymentsResponse>(this.api, request, this.options);
    }

}