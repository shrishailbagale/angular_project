import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClientModule) { }
  login(username:any,password:any){
    console.log("hi!!!");
    console.log(username,password);  
  }
}
