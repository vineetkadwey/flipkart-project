import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private http:HttpClient) { }
  Url2="https://jsonplaceholder.typicode.com/posts";
  users:any=[];

  ngOnInit(): void {
    
  }
  myForm = new FormGroup({
    firstName: new FormControl('',Validators.required),
    
    email: new FormControl('',[Validators.required,Validators.email]),
    address: new FormControl('',[Validators.required]),
    state: new FormControl('',[Validators.required]),
    zip: new FormControl('',[Validators.required]),
    cardNum: new FormControl('',[Validators.required]),
    cardName: new FormControl('',[Validators.required]),
    cardExpM: new FormControl('',[Validators.required]),
    cardExpY: new FormControl('',[Validators.required]),
    cardCvv: new FormControl('',[Validators.required]),

  });

  onSubmit() {
   debugger;
this.http.post(this.Url2,this.myForm.value).subscribe((res)=>{
  console.log(res);
})
  

  }

}
