import { Component } from '@angular/core';
import { MdMenuTrigger} from '@angular/material';

import { HeaderComponent } from './header/header.component';
import { EsriMapModule } from './esri-map/esri-map.module';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

  constructor() { }

}
