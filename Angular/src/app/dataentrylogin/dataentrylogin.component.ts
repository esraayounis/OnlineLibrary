import { Component, OnInit } from '@angular/core';
import { dataentry } from '../dataentry/dataentry.model';
import { DataentryService } from '../dataentry/dataentry.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dataentrylogin',
  templateUrl: './dataentrylogin.component.html',
  styleUrls: ['./dataentrylogin.component.css']
})
export class DataentryloginComponent implements OnInit {

  
  dataentryarray:dataentry[]=[];
  dataentryarray1:dataentry[]=[{userName:"ahmed",Password:"1234"},{userName:"deeb",Password:"1111"}];
  notvalid:boolean=false;
  data1=new dataentry();
  
  constructor(private _DataentryService:DataentryService,private _HttpClient:HttpClient) { }
  search(username:string,password:string)
  {
    if(this._DataentryService.isExists(username,password,this.dataentryarray1))
    {
      this.notvalid=true;  
        //alert("Valid Login ");
      
    //  this._HttpClient.post("http://localhost:61117/DataEntry/PostForLogin",{username,password}).subscribe(
    //    response=>{
    //     // data1.DataEntryID=response as number;
    //    // this.tasks.push(task1);
    //   return alert("Valid Login ");
    //  });
     
    }
    else
    {
      this.notvalid=false;
       alert("Sorry this Is Unvalid Login");
    }
     
  }
  ngOnInit() {
  }

}
