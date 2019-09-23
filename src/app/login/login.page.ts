import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import {auth} from 'firebase/app';
// @ts-ignore

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user = {email: '', password: ''};
  InvalidUser = false;
  constructor(private router: Router, public  auth1: AngularFireAuth) {
  }

  ngOnInit() {
  }
  async login() {
    try {
      const res = await this.auth1.auth.signInWithEmailAndPassword(this.user.email, this.user.password);
      this.router.navigate(['main']);
    } catch (err) {
      this.InvalidUser = true;
    }
  }
}



