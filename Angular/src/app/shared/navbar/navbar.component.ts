import { Component, OnInit } from '@angular/core';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Userlogin } from './userlogin.model';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  faCoffee = faCartArrowDown;
  constructor(private _httpclient:HttpClient,private _activatedroute:ActivatedRoute) { }
 chack:number;
  ngOnInit() {
   
  }
  assignlocalstorage(id:number){
    if(id==0)
    {
      alert("enter correct user name and password")
    }
    else{
      localStorage.setItem("userid","id");
      console.log(localStorage);
    }}

  userlogin(name:string,password:string)
  {
      let login =new Userlogin();
      alert("start fun")
      login.Name=name;
      login.Password=password;
      this._httpclient.post("http://localhost:61117/User/Get",login).subscribe(Response=>{
      this.chack=Response as number;
      alert(this.chack);
      this.assignlocalstorage(this.chack);
      }
      )}
    
  }
