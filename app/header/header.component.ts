/**
 * Created by mehmedju on 24.5.2016.
 */
import {Component} from '@angular/core'
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated'
import {IHeaderItem} from './header-item'

@Component({
  selector: 'mistral-header',
  templateUrl: 'app/header/header.component.html',
  directives: [ROUTER_DIRECTIVES],
  styleUrls: ['app/header/header.component.css']
})

export class HeaderComponent {
  headerItems:IHeaderItem[] =
    [
      {
        id: 1,
        name: "About",
        selected: true
      },
      {
        id: 2,
        name: "Employees",
        selected: false
      }
    ];

  selectHeaderItem(item:IHeaderItem):void {

    for (let i in this.headerItems) {
      let j = Number(i) + 1;
      item.id === j ? this.headerItems[i].selected = true : this.headerItems[i].selected = false;
    }
  }
}
