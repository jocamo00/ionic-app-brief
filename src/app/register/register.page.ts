import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private authSvc:AuthService, private route: Router) { }

  ngOnInit() {
  }

  async onRegister(email, password) {
    try {
      const user = await this.authSvc.register(email.value, password.value);
      if (user) {
        this.route.navigate(['login']);
      }
    } catch (error) {
      console.log('Error', error);
    }
  }


  logout() {
    this.authSvc.logout();
    this.route.navigate(['home']);
  }

}
