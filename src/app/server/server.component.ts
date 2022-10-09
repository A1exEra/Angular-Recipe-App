import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss'],
})
export class ServerComponent implements OnInit {
  'angular-recipe-app';
  allowNewServer = false;
  serverCreationStatus = 'No serer was created!';
  serverName = 'Test Server';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = !this.allowNewServer;
    }, 2000);
  }
  ngOnInit(): void {}

  onServerCreate() {
    this.serverCreationStatus = 'Server was created!';
  }
  onUpdateServerName(event: any) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
