import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.page.html',
  styleUrls: ['./twitter.page.scss'],
})
export class TwitterPage implements OnInit {

  link: string;
  // url1: string='https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dleopt__ATR0%0A';
  todo: string;
  // @ts-ignore
  comments = [];
  public output;
  encode  = encodeURIComponent(this.link);
  // encoded : string = encodeURI(this.link);


  constructor( public http: HttpClient) {

  }

  ngOnInit() {
  }

  extract() {

    this.http.get('https://api.diffbot.com/v3/discussion?token=f105472d42803bca68eea6472c932d0b&url=https%3A%2F%2Ftwitter.com%2Fsearch%3Fq%3D%2523DonaldTrump%26src%3Dtrend_click'
    ).subscribe((data: any) => {
      this.output = data;
      console.log(data);
      for (var i = 0; i < 10; i++) {
        this.comments[i] = {
          comment: data.objects[0].posts[i].text,
        }
        console.log(this.comments);
      }
    });
  }
}
