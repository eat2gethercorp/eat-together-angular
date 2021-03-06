import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'eat-together-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  loginRegister = [
    {
      cod: 'username',
      name: 'Nombre de usuario',
    },
    {
      cod: 'email',
      name: 'Correo Electrónico',
    },
    {
      cod: 'pass',
      name: 'Contraseña',
    },
    {
      cod: 'passConf',
      name: 'Confirmar Contraseña',
    },
  ];

  submmited: boolean = false;
  public form: FormGroup = new FormGroup({});

  constructor() {}

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

  register() {
    this.submmited = true;
  }
}
