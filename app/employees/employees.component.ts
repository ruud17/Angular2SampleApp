/**
 * Created by mehmedju on 23.5.2016.
 */
import {Component,OnInit} from '@angular/core'
import {IEmployee} from './employee'
import {EmployeePipe} from './employee-filter.pipe'

@Component({
  selector: 'mistral-employees',
  templateUrl: 'app/employees/employees.component.html',
  styleUrls: ['app/employees/employee.component.css'],
  pipes:[EmployeePipe]
})

export class EmployeesComponent implements OnInit{
  titles:string = 'Mistral employees:';
  searchEmployee:string = '';
  newEmployee:IEmployee = {
    name: '',
    project: ''
  };
  allEmployees:IEmployee[] =
    [
      {
        name: 'Irhad',
        project: 'NCR'
      },
      {
        name: 'Semir',
        project: 'ESecuritel'
      },
      {
        name: 'Nerman',
        project: 'AT&T'
      }
    ]

  addEmployee(e:IEmployee) : void {
    this.allEmployees.push(e);
  }

  ngOnInit():void{
    console.log('initialization employee page');
  }
}
