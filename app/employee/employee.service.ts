/**
 * Created by mehmedju on 25.5.2016.
 */
import {Injectable} from '@angular/core'
import {IEmployee} from "./employee";

@Injectable()
export class EmployeeService {
  getEmployees():IEmployee[] {
    return [
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
      }]
  };
}
