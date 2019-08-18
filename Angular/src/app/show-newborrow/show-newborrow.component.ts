import { Component, OnInit } from '@angular/core';
import {shownewborrowed} from './shownewborrow.model'
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-newborrow',
  templateUrl: './show-newborrow.component.html',
  styleUrls: ['./show-newborrow.component.css']
})
export class ShowNewborrowComponent implements OnInit {
  newborrowed=new shownewborrowed();
  constructor(private _httpclient:HttpClient,private _ActivatedRoute:ActivatedRoute) { 
    this._ActivatedRoute.paramMap.subscribe(parmap=>{
      let id=+parmap.get('id');
      this.getborrowbook(id);
    })
  }

  ngOnInit() {
  }
  getborrowbook(id: number) {
    this._httpclient.get(`http://localhost:61117/DataEntry/ShowNewBorrowBook?BookID=${id}`).subscribe(
      response => { 
        this.newborrowed = response as shownewborrowed;
      })
    }

}
