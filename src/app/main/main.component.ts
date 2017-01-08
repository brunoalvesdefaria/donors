import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  socket = null;

  constructor() {
  }

  ngOnInit() {
    this.socket = io.connect('http://localhost');
    this.socket.on('news', function (data) {
      console.log(data);
      this.socket.emit('my other event', { my: 'data' });
    });
  }

}
