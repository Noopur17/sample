import { Component, OnInit } from '@angular/core';
import { timeout } from 'q';
import { empty } from 'rxjs';

@Component({
  //selector: '[app-servers]',
  selector:'.app-servers',
  //inline code is below
  /* template: `
  <app-server></app-server>
  <app-server></app-server>`, */

  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowbutton = false;
  serverCreationStatus = "Server was not created";
  serverName = 'testServer';
  userName = '';
  enableUserNameButton =  false;

  constructor() { 
  setTimeout(()=>{
    this.allowbutton = true;
    },2000);

    
  }


  ngOnInit() {
  }

  enableUserName(){
    if(this.userName != ''){
      
      this.enableUserNameButton = true;
    }
  }

  onClickServer(){
   this.serverCreationStatus = "Server was created and name is " + this.serverName;
  }

  onUpdateServerName(event: Event){
    //console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onClickUserNameButton(){
    this.userName = '';
    this.enableUserNameButton = false;
  }
}
