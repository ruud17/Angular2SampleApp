import {Component} from '@angular/core';
import {ROUTER_PROVIDERS,ROUTER_DIRECTIVES,RouteConfig} from '@angular/router-deprecated'
import {AboutComponent} from './about/about.component'
import {EmployeeComponent} from './employee/employee.component'
import {HeaderComponent} from './header/header.component'
import {HTTP_PROVIDERS} from '@angular/http'
import 'rxjs/Rx'

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives:[HeaderComponent,ROUTER_DIRECTIVES],
  providers:[ROUTER_PROVIDERS,HTTP_PROVIDERS]
})

@RouteConfig([
  { path:'/about',
    name:'About' ,
    component:AboutComponent,
    useAsDefault:true
  },
  { path:'/employee',
    name:'Employees' ,
    component:EmployeeComponent
  }
])

export class AppComponent { }
