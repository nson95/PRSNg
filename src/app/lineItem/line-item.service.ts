import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { LineItem } from './line-item.class';
import { JsonResponse } from '../util/json-response.class';
const url = 'http://localhost:8080/LineItems/';

@Injectable({
  providedIn: 'root'
})
export class LineItemService {
  login(lineitem: LineItem): Observable<JsonResponse> {
		return this.http.post(url+"Authenticate", lineitem) as Observable<JsonResponse>;
  }
  list(): Observable <JsonResponse> {
    return this.http.get(url+"List") as Observable<JsonResponse>;
  }
  add(lineitem: LineItem): Observable<JsonResponse> {
      return this.http.post(url+"Add", lineitem) as Observable<JsonResponse>;
  } 
  get(id): Observable<JsonResponse> {
    return this.http.get(url+"Get/"+id) as Observable<JsonResponse>;
  }
  remove(lineitem: LineItem): Observable<JsonResponse> {
      return this.http.post(url+"Remove", lineitem) as Observable<JsonResponse>;
  }
  change(lineitem: LineItem): Observable<JsonResponse> {
		return this.http.post(url+"Change", lineitem) as Observable<JsonResponse>;
  }
  getPrli(id): Observable<JsonResponse> {
    return this.http.get(url+"LinesforPR/"+id) as Observable<JsonResponse>;
  }
  constructor(private http: HttpClient) { }
}
