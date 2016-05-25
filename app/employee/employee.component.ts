/**
 * Created by mehmedju on 23.5.2016.
 */
import {Component, OnInit} from '@angular/core'
import {IEmployee} from './employee'
import {EmployeePipe} from './employee-filter.pipe'
import {EmployeeService} from './employee.service'

@Component({
  selector: 'mistral-employees',
  templateUrl: 'app/employee/employee.component.html',
  styleUrls: ['app/employee/employee.component.css'],
  pipes: [EmployeePipe],
  providers: [EmployeeService]
})

export class EmployeeComponent implements OnInit {
  titles:string = 'Mistral employee:';
  searchEmployee:string = '';
  errorMessage:string;
  newEmployee:IEmployee = {
    name: '',
    project: ''
  };
  allEmployees:IEmployee[] = [];

  constructor(private _employeeService:EmployeeService) {
  }

  addEmployee(e:IEmployee):void {
    this.allEmployees.push(e);
  }

  ngOnInit():void {
    this._employeeService.getEmployees()
      .subscribe(
        employees=> this.allEmployees = employees,
        error=> this.errorMessage = <any>error
      );
  }
}
