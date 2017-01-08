import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { MapComponent } from './map.component';
import { HeaderComponent } from './header/header.component';

import { EsriMapModule } from './esri-map/esri-map.module';

@NgModule({
  declarations: [
    MapComponent,
    HeaderComponent
  ],
  imports: [
    EsriMapModule,
    MaterialModule.forRoot()
  ],
  bootstrap: [MapComponent]
})
export class MapModule { }
