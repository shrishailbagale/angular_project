import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent  {
  title = 'app';
  constructor(){
  }
  
  selectedValue:string = "";
  getProductVal(val:any){
    console.log(val.target.value)
    this.selectedValue= val.target.value;

  }
}

