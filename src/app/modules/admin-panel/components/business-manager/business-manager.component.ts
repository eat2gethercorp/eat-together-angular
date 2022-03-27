import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'eat-together-business-manager',
  templateUrl: './business-manager.component.html',
  styleUrls: ['./business-manager.component.scss'],
})
export class BusinessManagerComponent implements OnInit {
  negocios: string[] = ['create', 'show', 'edit'];

  businessRegister = [
    {
      cod: 'name',
      name: 'Nombre de restaurante',
    },
    {
      cod: 'street',
      name: 'Dirección del restaurante',
    },
    {
      cod: 'pass',
      name: 'Contraseña',
    },
    {
      cod: 'passConf',
      name: 'Confirmar contraseña',
    },
  ];

  submmited: boolean = false;
  public form: FormGroup = new FormGroup({});

  constructor() {}

  ngOnInit() {
    this.createForm();
    this.addValidations();
    console.log(this.form.controls['name'].errors);
  }

  createForm() {
    for (let control of this.businessRegister) {
      this.form.addControl(control.cod, new FormControl(''));
    }
  }

  addValidations() {
    for (let control of this.businessRegister) {
      this.form.controls[control.cod].setValidators([Validators.required]);
    }
  }

  onSubmit() {
    this.submmited = true;
  }
}
