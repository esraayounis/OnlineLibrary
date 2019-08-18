import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookserach'
})
export class BookserachPipe implements PipeTransform {

  transform(arr: any, item: string): any {
    if(item==""||item==undefined)
    {
      return arr;
    }
    else
    {
      return arr.filter(function(arr){
        return arr.Title.toLowerCase().includes(item.toLowerCase());
      })
    }
  }

}
