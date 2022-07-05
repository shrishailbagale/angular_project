import { Component, OnInit } from '@angular/core';
import { AlertService } from '../alert.service';


@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  options = {
    autoClose: false,
    keepAfterRouteChange: false
};

  constructor(protected alertService: AlertService) { }

  ngOnInit(): void {
  }

}
