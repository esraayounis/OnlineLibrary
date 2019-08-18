import { Component, OnInit } from '@angular/core';
import { author } from './author.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors:author[]=[];
  isloading:boolean=false;
  constructor(private _HttpClient:HttpClient) { }

  ngOnInit() {
    this._HttpClient.get("http://localhost:61117/User/gatauthors").subscribe(
      response=>{
        this.authors=response as author[];
        this.isloading=true;
      }
    )
  }

}
