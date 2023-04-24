import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { IExpense } from '../employee';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  template: `

<h2>Expense List</h2>
    <ul>
      <li *ngFor="let expense of expenses">
        {{ expense.date | date: 'medium' }} | {{ expense.reason | myCustomPipe }}
      </li>
    </ul>

  `,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public expenses: IExpense[] = [];

  constructor(private _employeeService: EmployeeService, private datePipe: DatePipe) {}

  ngOnInit(): void {
    this._employeeService.getEmployees().subscribe((data) => {
      console.log('Data:', data);
      this.expenses = data;
      console.log('Expense:', this.expenses);
    });


  }
}
