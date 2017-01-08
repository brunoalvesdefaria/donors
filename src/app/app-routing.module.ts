import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './map/map.component';
import { DialogComponent } from './dialog/dialog.component';

const APP_ROUTES: Routes = [
  { path: '', component: MapComponent },
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
