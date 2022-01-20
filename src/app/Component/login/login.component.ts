import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient) { }
Url="http://brinfotech.net/wp-json/wp/v2/posts";
  users:any=[];
  ngOnInit(): void {
  }

  myForm = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required]),

  });

  onSubmit() {
    
    console.warn(this.myForm.value);
    this.users.push(this.myForm.value);
this.http.post(this.Url,this.users).subscribe((res)=>{
  console.log(res);
})
  }

  delete(element:any){
    this.users.forEach((value:any,index:any)=>{
      if(value==element)
      this.users.splice(index,1);
    });

  }


  
}
