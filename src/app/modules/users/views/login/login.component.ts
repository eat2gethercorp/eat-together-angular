import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from '../../../../core/services/data-sharing.service';

@Component({
  selector: 'eat-together-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user = {
    name: 'Alvaro',
    username: 'dachez',
    role: 'admin',
  };

  constructor(
    private _router: Router,
    private _dataSharingService: DataSharingService
  ) {}

  ngOnInit() {}

  login() {
    this._dataSharingService.isUserLoggedIn.next(true);
    if (this.user.role === 'admin') {
      this._dataSharingService.isUserAdmin.next(true);
    }
    sessionStorage.setItem('user', JSON.stringify(this.user));
    this._router.navigateByUrl('home');
  }
}
