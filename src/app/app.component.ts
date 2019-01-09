import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  //inline is below
  styles:[
    `h3{
      color:dodgerblue;
    }
    `
  ]
})
export class AppComponent {
  title = 'app';
}
