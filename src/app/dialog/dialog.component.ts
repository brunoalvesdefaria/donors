import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { DialogApplyComponent } from './dialog-apply.component';

@Component({
  selector: 'app-dialog',
  template: ''
})
export class DialogComponent implements OnInit {

  dialogRef: MdDialogRef<DialogApplyComponent>;

  constructor(private router: Router, public dialog: MdDialog) {
  }

  ngOnInit() {
    this.dialogRef = this.dialog.open(DialogApplyComponent);

    this.dialogRef.afterClosed().subscribe(result => {
      this.dialogRef = null;
      this.router.navigate(['']);
    });
  }

}
