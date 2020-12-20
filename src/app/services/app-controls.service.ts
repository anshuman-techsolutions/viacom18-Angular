
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AppControlsService {
  // authHeader = {
  //   headers: new HttpHeaders({
  //     'Authorization': 'Bearer ' + this.getToken()
  //   })
  // };
  constructor(private http: HttpClient) { }

  getDescription() {
    return this.http.get(environment.apiBaseUrl + '/fetchDescription');
  }
  getCities() {
    return this.http.get(environment.apiBaseUrl + '/fetchCities');
  }
}
