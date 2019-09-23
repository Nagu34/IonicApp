import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})



export class RegisterPage implements OnInit {

  email: string="";
  password: string="";
  firstname:string="";
  confirmpassword:string="";

  ngOnInit(){
    }

  constructor(private router: Router,public auth: AngularFireAuth) { }


  register() {
    const {firstname,  email, password, confirmpassword } = this
    if (password !== confirmpassword) {
      return console.error('Password don\'t match');
    }
    try {
      const result = this.auth.auth.createUserWithEmailAndPassword(email, password)
      this.router.navigate(['login']);
    } catch (err) {
      console.dir(err);
    }

  }


}
