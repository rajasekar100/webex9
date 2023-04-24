import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { IExpense } from '../employee';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  template:`
  <h2>Employee Details</h2>
  <ul>
    <li *ngFor="let employee of employees">
      {{employee.serialNo}}-{{employee.date}}-{{employee.reason}}-{{employee.amount}}-{{employee.debitCredit}}
    </li>
  </ul>
`,
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  public employees: IExpense[] = [];
  constructor(
    private _route: ActivatedRoute,
    private _employeeService: EmployeeService
  ) { }
 
  ngOnInit(): void {
    this._employeeService.getEmployees().subscribe((data) => {
      console.log('Data:', data);
      this.employees = data;
      console.log('Employees:', this.employees);
    });
  }
 
}

