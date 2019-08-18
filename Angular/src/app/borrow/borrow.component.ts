import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { borrowbook } from '../dataentry/borrow.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-borrow',
  templateUrl: './borrow.component.html',
  styleUrls: ['./borrow.component.css']
})
export class BorrowComponent implements OnInit {
  borrowbooks:borrowbook[];


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  constructor(private _HttpClient:HttpClient) { }

  ngOnInit() {
    this._HttpClient.get("http://localhost:61117/User/getbooksthatcanbeborrowed").subscribe(data=>{
      this.borrowbooks=data as borrowbook[];
    })
  }

}
