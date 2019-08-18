import { Component, OnInit } from '@angular/core';
import { category } from './leftside.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-leftside',
  templateUrl: './leftside.component.html',
  styleUrls: ['./leftside.component.css']
})
export class LeftsideComponent implements OnInit {
  catnames:category[]=[];
  isloading:boolean=false;
  constructor(private _HttpClient:HttpClient) { }

  ngOnInit() {
    this.isloading=true;
    this._HttpClient.get("http://localhost:61117/User/getcategories").subscribe(
      response=>{
        this.catnames=response as category[];
      }

    )
  }

}
