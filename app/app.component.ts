import {Component} from '@angular/core';
import {EmployeesComponent} from './employees/employees.component'
import {HeaderComponent} from './header/header.component'

@Component({
  selector: 'my-app',
  directives:[HeaderComponent,EmployeesComponent],
  templateUrl: 'app/app.html'
})
export class AppComponent { }
