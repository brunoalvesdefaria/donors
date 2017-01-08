import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { MainComponent } from './main/main.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogApplyComponent } from './dialog/dialog-apply.component';

import { HeaderComponent } from './header/header.component';
import { EsriMapModule } from './esri-map/esri-map.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DialogComponent,
    DialogApplyComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AppRoutingModule,
    EsriMapModule
  ],
  entryComponents: [
    DialogApplyComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
