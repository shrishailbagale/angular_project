import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

   title="";
  constructor(private contact : ContactService ) { }

  ngOnInit(): void {
  }
  loginUser(ContactForm:NgForm)
  {
    console.log(ContactForm);
    console.log(ContactForm.value.username);
    console.log(ContactForm.value.password);    
  this.contact.login(ContactForm.value.username,ContactForm.value.password);
 
  } 
}
