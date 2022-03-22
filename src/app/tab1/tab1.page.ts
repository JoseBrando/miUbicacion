import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  latitud: number;
  longitud: number;

  constructor() {}

  async obtenerCoordenadas() {
    const obtenerCoordenada = await Geolocation.getCurrentPosition();
  
    this.latitud = obtenerCoordenada.coords.latitude;
    this.longitud = obtenerCoordenada.coords.longitude;
  }

}
