import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private _http:HttpClient) { }
  //load all the categories
  // public subjects(){
  //   return this._http.get(`${}/categories`);

  // }


  //add subject
  // public addSubject(){
  //   this._http.post(`${baseUrl}/subject`, subject)
  // }

   //add subject
  // public deleteSubject(subjectId: any){
  //   this._http.delete(`${baseUrl}/subject`);
  // }

  //add new category
  // public addSubject(subject){
  //   return this._http.post(`${baseUrl}/subject/`, subject);
  // }
}
