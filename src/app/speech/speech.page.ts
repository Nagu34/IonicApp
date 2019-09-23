import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {catchError} from 'rxjs/operators';
import {error} from 'util';
import {HttpClient} from '@angular/common/http';
import * as firebase from 'firebase';
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





constructor(public geolocation: Geolocation,private http: HttpClient) {

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

// tslint:disable-next-line:no-shadowed-variable
    }).catch((error) => {
      this.errors = 'Error getting location: ' + error;

    });
  }
}
