import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public srvc : LoginService , public rtr : Router) { }
 
  ngOnInit(): void {      
  }
  loginfrm = new FormGroup({
    username : new FormControl(),
    password : new FormControl()
  })

  CheckUser(){
    alert();
    /*var res = this.srvc.ValidateUser(this.loginfrm.value["username"], this.loginfrm.value["password"]);
    if(true){
      this.rtr.navigate(["home"]);
    }
    else{
      alert("Invalid User..!");
    } */

  }
}
