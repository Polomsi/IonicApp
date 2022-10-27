import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
declare var google:any;
/**
 * Generated class for the InfoRecorridoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info-recorrido',
  templateUrl: 'info-recorrido.html',
})
export class InfoRecorridoPage {
  map: any;
  hermandad;
  @ViewChild ('map') mapRef: ElementRef;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.hermandad=navParams.data.hermandad;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoRecorridoPage');
    this.showMap();
  }

  showMap(){
    const location = new google.maps.LatLng(37.4625946,-3.9226806);
    const options = {
      center: location,
      zoom: 14.5,
      maxZoom: 18,
      minZoom: 14,
      mapTypeId: 'roadmap',
      zoomControl: false,
      streetViewControl: false,
      mapTypeControl: false,
      fullscreenControl: false
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
    console.log(Object.keys(this.hermandad.calles).length);
    var total = Object.keys(this.hermandad.calles).length;
    var latitudes=[];
    var markers=[];
    var infowindows=[];
    for(var i=0; i<total; i++){
      
        var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h2 id="firstHeading" class="firstHeading">'+this.hermandad.calles[i].nombreCalle+'</h2>'+
        '<div>Salida: '+this.hermandad.hora+' desde '+this.hermandad.calles[0].nombreCalle+'</div>'+
        '</div>';
      
        latitudes[i] = new google.maps.LatLng(this.hermandad.calles[i].latitud,this.hermandad.calles[i].longitud);
        if(i==0){
          markers[i] = new google.maps.Marker({
            position: latitudes[i],
            title:this.hermandad.calles[i].nombreCalle,
            animation: google.maps.Animation.DROP,
            map: this.map
          });
          markers[i].index = i;
          infowindows[i] = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 300
          });

          google.maps.event.addListener(markers[i], 'click', function() {
            console.log(this.index); // this will give correct index
            console.log(i); //this will always give 10 for you
            infowindows[this.index].open(this.map, this);
            this.map.panTo(markers[this.index].getPosition());
          });
      }     
    }
    var iconsetngs = {
      path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
  };
    var flightPath = new google.maps.Polyline({
      path: latitudes,
      geodesic: true,
      strokeColor: '#862d70',
      strokeOpacity: 1.0,
      strokeWeight: 4,
      icons: [{
        icon: iconsetngs,
        repeat:'35px',
        offset: '100%'}]
    });
    flightPath.setMap(this.map);
  }

}
