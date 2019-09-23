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
  //let database=firebase.database();
  //var database=firebase.database();
  history = [];
  ref = firebase.database().ref('history/');




constructor(public geolocation: Geolocation,private http: HttpClient) {
    this.ref.orderByChild('Name').equalTo(firebase.auth().currentUser.email).on('value', resp => {
      this.history = [];
      this.history = snapshotToArray(resp);
    });
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
      firebase.database().ref('history/').push({Name: firebase.auth().currentUser.email, Value: this.accuracy});
// tslint:disable-next-line:no-shadowed-variable
    }).catch((error) => {
      this.errors = 'Error getting location: ' + error;

    });
  }
}
export const snapshotToArray = snapshot => {
  let returnArr = [];

  snapshot.forEach(childSnapshot => {
    let item = childSnapshot.val();
    item.key = childSnapshot.key;
    returnArr.push(item);
  });

  return returnArr;
};
