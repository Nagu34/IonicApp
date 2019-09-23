import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AlertController, Platform} from '@ionic/angular';
import {LocalNotifications} from '@ionic-native/local-notifications/ngx';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage  {

  data = { title: '', description: '', date: '', time: '' };

  constructor(public router: Router,
              public localNotifications: LocalNotifications,
              public platform: Platform,
              public alertController: AlertController) {}

  submit() {

    console.log(this.data);
    const date = new Date(this.data.date + ' ' + this.data.time);
    console.log(date);
    this.localNotifications.requestPermission().then(async (permission) => {
      this.localNotifications.schedule({
        id: 1,
        title: 'Hello ASE class',
        text: 'You have a Lab Deadline on Saturday',
        led: 'FF0000',
        // sound: 'file://assets/sounds/Rooster.mp3'

      });
      const alert = await this.alertController.create({
        header: 'Congagulations',
        subHeader: 'setup successful',
        message: 'This is an alert message.' + date,
        buttons: ['OK']
      });

      await alert.present();
      this.data = {title: '', description: '', date: '', time: ''};

    });
  }
}
