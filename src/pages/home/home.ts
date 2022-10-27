import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProveedorProvider } from '../../providers/proveedor/proveedor';
import { InfoHermandadPage } from '../info-hermandad/info-hermandad';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  hermandades
  @ViewChild ('map') mapRef: ElementRef;
  constructor(public navCtrl: NavController, public proveedor:ProveedorProvider) {
  }

    ionViewDidLoad(){
        this.proveedor.obtenerDatos()
        .subscribe(
          (data)=>{this.hermandades = data;
            console.log(this.hermandades);},
          (error)=>{console.log(error);}
        )
    }
    consultaPagina(hermandad){
      this.navCtrl.push(InfoHermandadPage, { hermandad: hermandad });
    }
    /*showMap(){
      const location = new google.maps.LatLng(51,-0.12);
      const options = {
        center: location,
        zoom: 10,
      }
      this.map = new google.maps.Map(this.mapRef.nativeElement, options);
    }*/


}
