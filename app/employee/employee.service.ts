/**
 * Created by mehmedju on 25.5.2016.
 */
import {Injectable} from '@angular/core'
import {IEmployee} from "./employee";
import {Http, Response} from '@angular/http'
import {Observable} from 'rxjs/Observable'

@Injectable()
export class EmployeeService {
  private _employeeUrl = "app/api/employees.json";

  constructor(private _http:Http) {
  }

  getEmployees():Observable<IEmployee[]> {
    return this._http.get(this._employeeUrl)
      .map((response:Response)=> <IEmployee[]> response.json())
      .do(data => console.log('All: ' +  JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
