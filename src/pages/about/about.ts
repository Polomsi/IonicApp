import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProveedorProvider } from '../../providers/proveedor/proveedor';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  allImages
  imagenes
  constructor(public navCtrl: NavController, public proveedor: ProveedorProvider) {

  }
  ionViewDidLoad(){
    this.proveedor.obtenerImagenes()
    .subscribe(
      (data)=>{
        this.allImages = data;
        this.imagenes=this.allImages.images.image;
        //console.log(this.imagenes);
      
      },
      (error)=>{console.log(error);}
    )
  }
}
