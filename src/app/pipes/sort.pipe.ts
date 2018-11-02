import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../user/user.class';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(users: User[]): User[] {
    let sortColumn = "lastName";
    return users.sort(compareFn);


    function compareFn(a, b) {
      let x = (a[sortColumn]).toUpperCase();
      let y = (b[sortColumn]).toUpperCase();
      if (x===y) return 0;
      if (x<y) return -1;
      else
      return 1;

    }
  }

}
