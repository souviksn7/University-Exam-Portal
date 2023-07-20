import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SemesterService {

  constructor(private _http: HttpClient) {}

  //Load all semesters
  // public semesters(){
  //   return this._http.get(`${baseUrl}/semester`);
  // }
}
