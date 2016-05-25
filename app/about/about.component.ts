/**
 * Created by mehmedju on 24.5.2016.
 */
import {Component} from '@angular/core'
import {DescriptionComponent} from "../description/description.component";

@Component({
  selector: 'mistral-about',
  templateUrl: 'app/about/about.component.html',
  styleUrls: ['app/about/about.component.css'],
  directives: [DescriptionComponent]
})

export class AboutComponent {
  mistralImage:string = './images/mistral.jpg';
  mistralCity:string = 'Sarajevo';

  updateImagePath(message:string):void {
    this.mistralImage = message;
  }
}
