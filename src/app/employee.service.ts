import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IExpense } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string = "assets/Data/employees.json";

  constructor(private http: HttpClient) { }

  getEmployees():Observable<IExpense[]>{
    return this.http.get<IExpense[]>(this._url);
    
  }
}
