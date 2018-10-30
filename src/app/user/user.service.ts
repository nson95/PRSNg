import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from './user.class';
import { JsonResponse } from '../util/json-response.class';
const url = 'http://localhost:8080/Users/';
@Injectable({
  providedIn: 'root'
})

export class UserService {

  list(): Observable<JsonResponse> {
    return this.http.get(url +'List') as Observable<JsonResponse>;
  }
  get(id): Observable<JsonResponse> {
    return this.http.get(url +'Get/' +id) as Observable<JsonResponse>;
  }
  constructor(private http: HttpClient) {

  }
}
