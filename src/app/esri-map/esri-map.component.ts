import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-esri-map',
  templateUrl: './esri-map.component.html',
  styleUrls: ['./esri-map.component.css']
})
export class EsriMapComponent implements OnInit {
  mapProperties: __esri.MapProperties = {
    basemap: 'streets'
  };
  mapViewProperties: __esri.MapViewProperties = {
    center: [-118, 34.5],
    zoom: 8,
  };
  map: __esri.Map;
  mapView: __esri.MapView;

  constructor(private router: Router) { }

  ngOnInit() { }

  onMapInit(mapInfo: {map: __esri.Map, mapView: __esri.MapView}) {
    this.map = mapInfo.map;
    this.mapView = mapInfo.mapView;

    mapInfo.mapView.on('click', event => {
      const lat = event.mapPoint.latitude;
      const lon = event.mapPoint.longitude;
      const navigationExtras: NavigationExtras = { queryParams: { lat, lon } };
      this.router.navigate(['apply'], navigationExtras);
    });
  }
}
