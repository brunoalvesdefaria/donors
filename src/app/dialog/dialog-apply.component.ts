import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog-apply',
  templateUrl: './dialog-apply.component.html',
  styleUrls: ['./dialog-apply.component.css']
})
export class DialogApplyComponent {

  bloodTypes = [
    {value: 'op', viewValue: 'O+'},
    {value: 'on', viewValue: 'O-'},
    {value: 'bp', viewValue: 'B+'},
    {value: 'bn', viewValue: 'B-'},
    {value: 'ap', viewValue: 'A+'},
    {value: 'an', viewValue: 'A-'},
    {value: 'abp', viewValue: 'AB+'},
    {value: 'abn', viewValue: 'AB-'}
  ];

}
