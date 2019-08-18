import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { rbook } from './reqbook.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-requestedforborrow',
  templateUrl: './requestedforborrow.component.html',
  styleUrls: ['./requestedforborrow.component.css']
})
export class RequestedforborrowComponent implements OnInit {
   exchangedbook=new rbook();
  listofrbook:rbook[]=[];
 listofnewborrowedbook:rbook[]=[];
 acceptobj=new rbook();
 acc:boolean;

  
  constructor(private _httpclient:HttpClient,private _activatedroute:ActivatedRoute) { 
    this._httpclient.get("http://localhost:61117/DataEntry/requstedbooks").subscribe(
      response=>{
         this.listofrbook=response as rbook[];
        // alert(JSON.stringify(this.listofrbook));
        // alert("start")
        this._httpclient.post("http://localhost:61117/DataEntry/ShowListBorrowBook",response as rbook[]).subscribe(
          data=>{
            alert("mmmmm")

            this.listofnewborrowedbook=data as rbook[];
            alert("mmmmm")
            alert(JSON.stringify(this.listofrbook));
    
           alert(JSON.stringify(this.listofnewborrowedbook));
          }
        )
       
      }


    )
   
   
    //alert("end")
  }
  // showExchangedBook(bookid:number){
  //   this._httpclient.get(`http://localhost:61117/DataEntry/ShowNewBorrowBook?BookID=${bookid}`).subscribe(
  //     response=>{
  //      this.exchangedbook = response as rbook;
  //      alert(JSON.stringify(this.exchangedbook));
  //     }
  //   )
  // }
  accept(id:number)
  {
    this.acceptobj.ID=id;
    this._httpclient.get(`http://localhost:61117/DataEntry/AcceptBorrowBooke?BookID=${id}`).subscribe(
      data=>{
        this.acc=data as boolean;
      }
    )
  }
  reject(id:number)
  {
    this.acceptobj.ID=id;
    this._httpclient.get(`http://localhost:61117/DataEntry/RejectBorrowBooke?BookID=${id}`).subscribe(
      data=>{
        this.acc=data as boolean;
      }
    )
  }
  ngOnInit() {
    
    
  }

}
