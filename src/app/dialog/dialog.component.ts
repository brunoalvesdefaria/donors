import { Component } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  constructor() {
    console.log('open dialog');
  }

}
