import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PurchaseRequest } from './purchase-request.class';
import { JsonResponse } from '../util/json-response.class';
const url = 'http://localhost:8080/PurchaseRequests/';
@Injectable({
  providedIn: 'root'
})
export class PurchaseRequestService {

  list(): Observable<JsonResponse> {
    return this.http.get(url +'List') as Observable<JsonResponse>;
  }
  get(id): Observable<JsonResponse> {
    return this.http.get(url +'Get/' +id) as Observable<JsonResponse>;
  }
  add(purchaseRequest: PurchaseRequest): Observable<JsonResponse> {
    return this.http.post(url +'Add', purchaseRequest) as Observable<JsonResponse>
  }
  change(purchaseRequest: PurchaseRequest): Observable<JsonResponse> {
    return this.http.post(url +'Change', purchaseRequest) as Observable<JsonResponse>
  }
  remove(purchaseRequest: PurchaseRequest): Observable<JsonResponse> {
    return this.http.post(url +'Remove', purchaseRequest) as Observable<JsonResponse>
  }
  constructor(private http: HttpClient) {
  }
}
