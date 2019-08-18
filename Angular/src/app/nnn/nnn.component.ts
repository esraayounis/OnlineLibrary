import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MyEmailValidators } from '../formone/email.validators';
import { HttpClient } from '@angular/common/http';
import {DataEntryLogin} from './dataEntry';

@Component({
  selector: 'app-nnn',
  templateUrl: './nnn.component.html',
  styleUrls: ['./nnn.component.css']
})
export class NnnComponent implements OnInit {
  login:boolean;
  form:FormGroup;
  
  constructor(private _formbuilder:FormBuilder,private _httpClient:HttpClient) { }
  
  ngOnInit() {
    this.createform();
  }
  
  createform(){
      this.form=this._formbuilder.group({
      UserName:['',[Validators.required,Validators.minLength(3),Validators.maxLength(20),Validators.pattern("^[A-Za-z.\s_-]+$")]],
      Password:['',[Validators.required,Validators.minLength(6),Validators.maxLength(20)]],
    });
  }
  DataEntryRegister()
  {
    
    let user =new DataEntryLogin();
    user.userName=this.form.controls['UserName'].value;
    user.Password=this.form.controls['Password'].value;
    this._httpClient.post("http://localhost:61117/DataEntry/PostForLogin",user)
    .subscribe(
      response=>{
        this.login=response as boolean;
        if(this.login==false)
        {
          alert("Sorry Not Valid ... ")
        }

      
    }
    )
        error=>(alert("error"))
    }
  

}
