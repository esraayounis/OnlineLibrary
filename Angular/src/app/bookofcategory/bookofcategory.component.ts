import { Component, OnInit } from '@angular/core';
import { bookmdel } from '../bookdetails/getbook.model';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bookofcategory',
  templateUrl: './bookofcategory.component.html',
  styleUrls: ['./bookofcategory.component.css']
})
export class BookofcategoryComponent implements OnInit {

  booksofcat:bookmdel[];
  constructor(private _HttpClient:HttpClient, private _ActivatedRoute:ActivatedRoute) {
    this._ActivatedRoute.paramMap.subscribe(parmap=>{
      let name=parmap.get('bookofcat');
      this.getbookofcat(name);
    })
   }

  ngOnInit() {
  }
  getbookofcat(name:string)
  {
    this._HttpClient.get(`http://localhost:61117/User/GetbooksByCategory?name=${name}`).subscribe(
      response => { 
        this.booksofcat = response as bookmdel[];
  })}

}
