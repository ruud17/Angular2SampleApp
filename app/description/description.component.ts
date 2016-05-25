/**
 * Created by mehmedju on 25.5.2016.
 */
import {Component,Input} from '@angular/core'

@Component({
  selector:'mistral-description',
  templateUrl:'app/description/description.component.html',
  styleUrls:['app/description/description.component.css']
})

export class DescriptionComponent{
  @Input() cityName : string;
}
