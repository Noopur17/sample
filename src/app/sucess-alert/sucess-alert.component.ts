import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sucess-alert',
  template: `
  <warning-alert></warning-alert>
  <warning-alert></warning-alert>
  `,
  styleUrls: ['./sucess-alert.component.css']
})
export class SucessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
