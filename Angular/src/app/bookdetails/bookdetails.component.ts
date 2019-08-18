import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { add_book } from '../dataentry/addbook.model';
import { ActivatedRoute } from '@angular/router';
import { bookmdel } from './getbook.model';
import { buy1 } from './buybook.model';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {
  book1=new bookmdel();
  buybook=new buy1();
  check:number;
  constructor(private _HttpClient:HttpClient,private _ActivatedRoute:ActivatedRoute) {
    this._ActivatedRoute.paramMap.subscribe(parmap=>{
      let title=parmap.get('name');
      this.getbook(title);
    })
   }

  ngOnInit() {
  }
  getbook(title: string) {
    this._HttpClient.get(`http://localhost:61117/User/searchBooks/?book=${title}`).subscribe(
      response => { 
        this.book1 = response as bookmdel;
      })
    }

    buy(book: string) {
      
    this.buybook.BookName= book;
    this.buybook.UserId= ((localStorage.getItem("userid") as unknown as number));

      this._HttpClient.post("http://localhost:61117/User/Buy",this.buybook).subscribe(
        response => { 
      if((response as number)==1){
        alert("book is bought successfully")
      }
      else if((response as number)==2)
      {
        alert("no copies available")
      }
      else if((response as number)==3)
      {
        alert("You Have To Log In First")
      }
        })
      }
}
