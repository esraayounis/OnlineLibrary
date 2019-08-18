 import { Component, OnInit } from '@angular/core';
import { borrowbook } from '../dataentry/borrow.model';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { newborrow } from './newborrowbook.model';
import { borrowbook3 } from './borrowBook2.model';
import { rbook } from '../requestedforborrow/reqbook.model';


@Component({
  selector: 'app-detailsforborrowed',
  templateUrl: './detailsforborrowed.component.html',
  styleUrls: ['./detailsforborrowed.component.css']
})
export class DetailsforborrowedComponent implements OnInit {
bookid2:number;
  userid2:number;
  chack2:number;
  borrow=new borrowbook();
  acceptobj=new rbook();
  b=new newborrow();
  acc:boolean;
  borrow2=new borrowbook3();
  constructor(private _HttpClient:HttpClient,private _ActivatedRoute:ActivatedRoute) {
    this._ActivatedRoute.paramMap.subscribe(parmap=>{
      let id=+parmap.get('id');
      this.getborrowbook(id);
    })
   }

  ngOnInit() {
  }
  getborrowbook(id: number) {
    this._HttpClient.get(`http://localhost:61117/DataEntry/ShowBorrowBook?BookID=${id}`).subscribe(
      response => { 
        this.borrow = response as borrowbook;
      })
    }
    addborrowbook2(bookid3:number,orgnailbookID:number)
    {
      //alert("start function")
      //alert(bookid3)
      this.borrow2.bookID=bookid3;
      this.borrow2.userID=1;
      this.borrow2.newbookID=orgnailbookID;
      this._HttpClient.post("http://localhost:61117/User/UserRequestForBorrow2",this.borrow2). subscribe()
        
    
    }
    addnewborrowbook(
      title:string,
      autherName:string,
      publicherName:string,
      numberOfPage:number,
      image:string,bookID:number
    )

    {
        alert(title+"  inserted");
        this.b.BorrowedBookID=0;
        this.b.Title=title;
        //alert(title);
        this.b.AutherName=autherName;
        this.b.PublicherName=publicherName;
        this.b.NumberOfPage=numberOfPage;
        this.b.Image=image;
        //alert(JSON.stringify(this.b));
        //console.log(JSON.stringify(this.b))
        this._HttpClient.post("http://localhost:61117/User/UserRequestForBorrow",this.b 
       ).
       subscribe(response=>{
        this.chack2 =response as number;
        this.addborrowbook2(bookID,response as number)
        // this.addborrowbook2(this.chack2)
       });
     
      
    }
 
  

}
