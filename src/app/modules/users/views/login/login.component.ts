import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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

  loginRegister = [
    {
      cod: 'username',
      name: 'Nombre de usuario',
    },
    {
      cod: 'pass',
      name: 'Contraseña',
    },
  ];

  submmited: boolean = false;
  public form: FormGroup = new FormGroup({});

  constructor(
    private _router: Router,
    private _dataSharingService: DataSharingService
  ) {}

  ngOnInit() {
    this.createForm();
    this.addValidations();
  }

  createForm() {
    for (let control of this.loginRegister) {
      this.form.addControl(control.cod, new FormControl(''));
    }
  }

  addValidations() {
    for (let control of this.loginRegister) {
      this.form.controls[control.cod].setValidators([Validators.required]);
    }
  }

  login() {
    this.submmited = true;
    this._dataSharingService.isUserLoggedIn.next(true);
    if (this.user.role === 'admin') {
      this._dataSharingService.isUserAdmin.next(true);
    }
    sessionStorage.setItem('user', JSON.stringify(this.user));
    this._router.navigateByUrl('home');
  }
}
