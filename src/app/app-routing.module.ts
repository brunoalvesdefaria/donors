import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DialogComponent } from './dialog/dialog.component';

const APP_ROUTES: Routes = [
  { path: '', component: MainComponent },
  { path: 'apply', component: DialogComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
