import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AngularFireDatabase} from 'angularfire2/database'
import {HttpClient} from '@angular/common/http';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-speech',
  templateUrl: './speech.page.html',
  styleUrls: ['./speech.page.scss'],
})
export class SpeechPage implements OnInit {


  latitude: any;
  longitude: any;
  altitude: any;
  altitudeaccuracy: any;
  accuracy: any;
  errors: any;


  items: Observable<any[]>;



constructor(public geolocation: Geolocation,public db: AngularFireDatabase) {
  this.items = db.list('items').valueChanges();
  }
  ngOnInit() {
  }

  getDetails() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude ;
      this.longitude = resp.coords.longitude ;
      this.altitude = resp.coords.altitude ;
      this.accuracy = resp.coords.accuracy + ' Meters';
      this.altitudeaccuracy = resp.coords.altitudeAccuracy ;
      console.log(this.altitude, this.altitudeaccuracy);
      this.db.list('items').push({ content: this.latitude + ',' + this.longitude + ',' + this.accuracy});
      // this.itemValue = '';
// tslint:disable-next-line:no-shadowed-variable
    }).catch((error) => {
      this.errors = 'Error getting location: ' + error;

    });
  }
}
