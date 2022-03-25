import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from '../../../core/services/data-sharing.service';

@Component({
  selector: 'eat-together-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('navBurger') navBurger: ElementRef;
  @ViewChild('navMenu') navMenu: ElementRef;

  public isLogged: boolean = false;
  public isAdmin: boolean = false;

  public register: string = 'Registrate';
  public login: string = 'Iniciar sesión';

  public activateRoute: string = '';

  constructor(
    private _router: Router,
    private _dataSharingService: DataSharingService
  ) {}

  ngOnInit() {
    this._dataSharingService.isUserLoggedIn.subscribe((value) => {
      this.isLogged = value;
    });
    this._dataSharingService.isUserAdmin.subscribe((value) => {
      this.isAdmin = value;
    });
  }

  logout() {
    this._dataSharingService.isUserLoggedIn.next(false);
    this.navigateToHome();
  }
  toggleNavbar() {
    this.navBurger.nativeElement.classList.toggle('is-active');
    this.navMenu.nativeElement.classList.toggle('is-active');
  }

  navigateToHome() {
    this._router.navigateByUrl('home');
  }

  navigateToLogin() {
    this._router.navigateByUrl('users/login');
  }

  navigateToRegister() {
    this._router.navigateByUrl('users/register');
  }

  navigateToAdminPanel() {
    this._router.navigateByUrl('admin-panel/main-info');
  }
}
