import {Component} from '@angular/core';
import {ROUTER_PROVIDERS,ROUTER_DIRECTIVES,RouteConfig} from '@angular/router-deprecated'
import {AboutComponent} from './about/about.component'
import {EmployeesComponent} from './employees/employees.component'
import {HeaderComponent} from './header/header.component'

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.html',
  directives:[HeaderComponent,ROUTER_DIRECTIVES],
  providers:[ROUTER_PROVIDERS]
})

@RouteConfig([
  { path:'/about', name:'About' , component:AboutComponent, useAsDefault:true},
  { path:'/employees', name:'Employees' , component:EmployeesComponent}
])

export class AppComponent { }
