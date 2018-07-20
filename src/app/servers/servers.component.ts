import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: 'Servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = true;
  serverCreationStatus = 'No Server was Created!';

  constructor() {
    setTimeout(() => { this.allowNewServer = !this.allowNewServer;
    }, 1000);
  }

  ngOnInit() {
  }
onCreateServer() {
  this.serverCreationStatus = 'Server Created';
}
}
