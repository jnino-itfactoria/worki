import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralService } from '../../services/general.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm: FormGroup;
  createEmployeeOk= false;


  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _generalService: GeneralService
  ) {
    this.createSingUpForm();
  }


  ngOnInit() {
  }

  get documentoNoValido() {
    return this.signUpForm.get('DocumentoIdentidad').invalid && this.signUpForm.get('DocumentoIdentidad').touched;
  }

  get nombreNoValido() {
    return this.signUpForm.get('PrimerNombre').invalid && this.signUpForm.get('PrimerNombre').touched;
  }

  get apellidoNoValido() {
    return this.signUpForm.get('SegundoNombre').invalid && this.signUpForm.get('SegundoNombre').touched;
  }

  get emailNoValido() {
    return this.signUpForm.get('email').invalid && this.signUpForm.get('email').touched;
  }

  get cargoNoValido() {
    return this.signUpForm.get('cargo').invalid && this.signUpForm.get('cargo').touched;
  }

  get salarioNoValido() {
    return this.signUpForm.get('salario').invalid && this.signUpForm.get('salario').touched;
  }

  get hobbiesNoValido() {
    return this.signUpForm.get('hobbies').invalid && this.signUpForm.get('hobbies').touched;
  }

  get gustosNoValido() {
    return this.signUpForm.get('gustos').invalid && this.signUpForm.get('gustos').touched;
  }


  createSingUpForm() {
    this.signUpForm = this._formBuilder.group({
      DocumentoIdentidad: ['', Validators.required],
      PrimerNombre: ['', Validators.required],
      SegundoNombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      cargo: ['', Validators.required],
      salario: ['', Validators.required],
      hobbies: ['', Validators.required],
      gustos: ['', Validators.required],

    });
  }



  onSubmit() {
    console.log("REG FORM", this.signUpForm.value);
    this._generalService.createEmployee(this.signUpForm.value).subscribe(
      res => {
        console.log("RES CREATE EMP", res);
        console.log("RES CREATE EMP ID", res.Id);
        this.createEmployeeOk = true;
      }, 
      err => {
        console.log("ERR CREATE EMP", err);

       })

  }


}
