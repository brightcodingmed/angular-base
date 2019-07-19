import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resume'
})
export class ExtraitPipe implements PipeTransform {

  transform(value: string, limit: number): any {
    let myLimit = limit ? limit : 20;
    return value.substr(0, myLimit) + '...';
  }

}
