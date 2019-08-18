import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(arr: any,item:string): any {
      if(item==""||item==undefined)
      {
        return arr;
      }
      else
      {
        return arr.filter(function(arr){
          return arr.authorname.toLowerCase().includes(item.toLowerCase());
        })
      }

  }

}
