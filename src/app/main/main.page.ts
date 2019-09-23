import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  searchterm: '';
  searchResult: '';
  constructor( private http: HttpClient) { }

  ngOnInit() {
  }
  findEmotion() {
    // tslint:disable-next-line:max-line-length
    this.http.get('https://cors-anywhere.herokuapp.com/https://api.uclassify.com/v1/uClassify/Sentiment/classify/?readKey=DyLNsR66KSvN&text='+this.searchterm)
        .subscribe(data => {
          // @ts-ignore

          this.searchResult = 'Positivity :' + data.positive;

        });
  }
}
