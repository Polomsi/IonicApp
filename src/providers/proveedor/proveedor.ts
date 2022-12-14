import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

/*
  Generated class for the ProveedorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProveedorProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ProveedorProvider Provider');
  }

  obtenerDatos(){
    return this.http.get('assets/data/ssalcala.json');
  }
  obtenerImagenes(){
    console.log('Estoy recopilando imagenes');
    return this.http.get('assets/data/images.json');
  }
}