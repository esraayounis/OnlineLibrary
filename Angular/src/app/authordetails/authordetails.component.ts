import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { getauthorbook } from './getauthorbooks.model';
import { get_author } from './getauthor.model';

@Component({
  selector: 'app-authordetails',
  templateUrl: './authordetails.component.html',
  styleUrls: ['./authordetails.component.css']
})
export class AuthordetailsComponent implements OnInit {
  books:getauthorbook[]=[];
  authorobj=new get_author();
  constructor(private _HttpClint:HttpClient,private _ActivatedRoute:ActivatedRoute) {
    _ActivatedRoute.paramMap.subscribe(data=>{
      let a=data.get('AutherName');
      this.getauthorbook(a);
      let b=data.get('AutherName');
      this.getAutherOject(b);
    }
      
    )
   }

  ngOnInit() {
  }
  getauthorbook(name:string)
  {
    this._HttpClint.get(`http://localhost:61117/User/getbooksofauthor?Auther=${name}`).subscribe(data=>{
      this.books=data as getauthorbook[];
    }) 
  }
  getAutherOject(name:string)
  {
    
    this._HttpClint.get(`http://localhost:61117/User/GetAuthweByName?Auther=${name}`).subscribe(respnse=>{
      this.authorobj=respnse as get_author;
    })
  }

}
