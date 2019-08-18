import { Injectable } from '@angular/core';
import { dataentry } from './dataentry.model';

@Injectable({
  providedIn: 'root'
})
export class DataentryService {

  constructor() { }
  isExists(username:string,password:string ,dataentry1:dataentry[])
  {
    return dataentry1.some( (ww=>ww.userName==username) &&  (ww=>ww.Password==password)  );
  }
}
