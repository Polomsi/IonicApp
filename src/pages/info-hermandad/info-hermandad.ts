import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InfoRecorridoPage } from '../info-recorrido/info-recorrido';

/**
 * Generated class for the InfoHermandadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info-hermandad',
  templateUrl: 'info-hermandad.html',
})
export class InfoHermandadPage {
  hermandad;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.hermandad=navParams.data.hermandad;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoHermandadPage');
  }
  consultaPagina(hermandad){
    this.navCtrl.push(InfoRecorridoPage, { hermandad: hermandad });
  }

}
