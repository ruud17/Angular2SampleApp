/**
 * Created by mehmedju on 23.5.2016.
 */
import {Component} from '@angular/core'
import {IEmployee} from './employee'

@Component({
  selector: 'mistral-employees',
  templateUrl: 'app/employees/employees.component.html',
  styleUrls: ['app/employees/employee.component.css']
})

export class EmployeesComponent {
  titles:string = 'Mistral employees:'
  newEmployee: IEmployee={
    name:'',
    project:''
  };
  allEmployees: IEmployee[] =
    [
      {
        name:'Irhad',
        project:'NCR'
      },
      {
        name:'Semir',
        project:'ESecuritel'
      },
      {
        name:'Nerman',
        project:'AT&T'
      }
    ]

  addEmployee(e:IEmployee ) {
    this.allEmployees.push(e);
  }
}
