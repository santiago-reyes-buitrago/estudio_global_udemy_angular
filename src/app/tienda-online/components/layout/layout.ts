import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {LoginService} from '../../core/services/login.service';

@Component({
  selector: 'app-layout',
  imports: [
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {

  constructor(
    private loginService: LoginService,
  ) {}
  isAuth() {
    return this.loginService.isAuthenticated()
  }

  logout() {
    this.loginService.logout();
  }
}
