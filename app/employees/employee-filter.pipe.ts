/**
 * Created by mehmedju on 25.5.2016.
 */
import {Pipe, PipeTransform} from '@angular/core'
import {IEmployee} from './employee'


@Pipe({
  name: 'employeeFilter'
})

export class EmployeePipe implements PipeTransform {

  transform(value:IEmployee[], filter:string):IEmployee[] {
    filter = filter ? filter.toLocaleLowerCase() : null;

    return filter ? value.filter((employee:IEmployee) =>
    employee.name.toLocaleLowerCase().indexOf(filter) !== -1) : value;
  }
}
