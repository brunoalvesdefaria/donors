import { Component } from '@angular/core';

import * as io from "socket.io-client";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'BloodMap';
  socket = null;

  ngOnInit() {
    this.socket = io.connect('http://localhost:5000');
    this.socket.emit('new user', { my: 'data' });
  }
}
