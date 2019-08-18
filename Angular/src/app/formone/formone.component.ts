import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, FormBuilder, Form, Validators} from '@angular/forms'
import {userRegister} from './userModel'
import { HttpClient } from '@angular/common/http';
import { MyEmailValidators } from './email.validators';
import { userlogin1 } from './userlog.model';
import { Router } from '@angular/router';



@Component({
  selector: 'app-formone',
  templateUrl: './formone.component.html',
  styleUrls: ['./formone.component.css']
})
export class FormoneComponent implements OnInit {
  form:FormGroup;
  formlogin:FormGroup;
  user:Number;

  constructor(private _formbuilder:FormBuilder,private _httpClient:HttpClient,private _route:Router) { }
  
  
  ngOnInit() {
    this.createform();
    this.createform2();
  }
  
  createform(){
      this.form=this._formbuilder.group({
      FirstName:['',[Validators.required,Validators.pattern("^[A-Za-z.\s_-]+$"),Validators.minLength(3),Validators.maxLength(10)]],
      LastName:['',[Validators.required,Validators.pattern("^[A-Za-z.\s_-]+$"),Validators.minLength(3),Validators.maxLength(10)]],
      Address:['',[Validators.minLength(10),Validators.maxLength(50)]],
      mobile:['010',[Validators.required,Validators.maxLength(11),Validators.minLength(11),Validators.pattern("^[0-9]*$")]],
      Email:['asd@gmail.com',[Validators.required,Validators.email,Validators.minLength(6),Validators.maxLength(20),MyEmailValidators.cannotConatainSpace]],
      Password:['',[Validators.required,Validators.minLength(6),Validators.maxLength(20)]],
      ConfirmPassword:['',Validators.required]
    });
  }
  register()
  {
    if(this.form.valid){
    console.log(JSON.stringify(this.form.value));
    let user =new userRegister();
    user.Name=this.form.controls['FirstName'].value+this.form.controls['LastName'].value;
    user.Address=this.form.controls['Address'].value;
    user.Email=this.form.controls['Email'].value;
    user.Password=this.form.controls['Password'].value;
    user.PhoneNumber=this.form.controls['mobile'].value;
    this._httpClient.post("http://localhost:61117/User/Post",user)
    .subscribe(
      response=>{
        if((response as number)==0)
        {
          alert("data is incorrect");
        }
        else
        {
          localStorage.setItem("userid",(this.user).toString());
          alert("login successful")
        }
        //this.user = response as number;
        
        // alert(localStorage.getItem(user))
        //alert(localStorage.getItem("userid"))
        //alert("ok")}
      }
    )
        error=>(alert("error"))
    }
  }
  createform2()
  {
    this.formlogin=this._formbuilder.group({
      UserName:[''],
      Password:['']
    
  })
  
  

}
login(user1:string,pass:string)
  {
    
      console.log(JSON.stringify(this.form.value));
      let user2 =new userlogin1();
      user2.Name=user1;
     // user.Address=this.form.controls['Address'].value;
      //user.Email=this.form.controls['Email'].value;
      user2.Password=pass;
      //user.PhoneNumber=this.form.controls['mobile'].value;
      this._httpClient.post("http://localhost:61117/User/Get",user2)
      .subscribe(
        response=>{this.user = response as number;
          localStorage.setItem("userid",(this.user).toString());
         
         if(this.user==0)
         {
          alert("not valid");
          return this._route.navigateByUrl("/formoncomponent");
         } 
         else{
           return this._route.navigateByUrl("/home");
         }
         // alert(localStorage.getItem(user))
         // alert(localStorage.getItem("userid"))
          

        }
      )
          error=>(alert("error"))
      }

















// login(user:string,pass:string)
//   {
    
//       console.log(JSON.stringify(this.form.value));
//       let user2 =new userlogin1();
//       user2.Name=this.formlogin.controls['UserName'].value;
//      // user.Address=this.form.controls['Address'].value;
//       //user.Email=this.form.controls['Email'].value;
//       user2.Password=this.formlogin.controls['Password'].value;
//       //user.PhoneNumber=this.form.controls['mobile'].value;
//       this._httpClient.post("http://localhost:61117/User/Get",user2)
//       .subscribe(
//         response=>{this.user = response as number;
//           localStorage.setItem("userid",(this.user).toString());
//           // alert(localStorage.getItem(user))
//          // alert(localStorage.getItem("userid"))
//           alert("ok")
//         }
//       )
//           error=>(alert("error"))
//       }
    
  }

