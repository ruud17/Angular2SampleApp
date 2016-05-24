/**
 * Created by mehmedju on 24.5.2016.
 */
import {Component} from '@angular/core'
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated'

@Component({
  selector:'mistral-header',
  templateUrl:'app/header/header.component.html',
  directives:[ROUTER_DIRECTIVES],
  styleUrls: ['app/header/header.component.css']
})

export class HeaderComponent{}
