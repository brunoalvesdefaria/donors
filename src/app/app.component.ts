import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  socket = null;

  constructor() {
  }

  ngOnInit() {
    const newsHandler = data => {
      console.log(data);
      this.socket.emit('my other event', { my: 'data' });
    };

    this.socket = io.connect('http://localhost');
    this.socket.on('news', newsHandler);
  }

}
