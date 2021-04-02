import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralService } from '../../services/general.service';
import { ITokenReq } from '../../interfaces/token';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  tokenReq: ITokenReq ={
    client_id: '',
    client_secret:'',
    audience:'',
    grant_type:''

  };

  constructor(
    private _formBuilder: FormBuilder, 
    private _generalService: GeneralService, 
    private _router: Router) {
    this.createForm();
   }

  ngOnInit() {
    
  }

  get emailNoValido(){
    return this.loginForm.get('email').invalid && this.loginForm.get('email').touched
  }

  get passwordNoValido(){
    return this.loginForm.get('password').invalid && this.loginForm.get('password').touched
  }

  createForm(){
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', Validators.required],
      
    });

  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', this.loginForm.valid); // true or false
    console.log('Email', this.loginForm.value.email);
    console.log('Password', this.loginForm.value.password);
    this.tokenReq.audience ='https://auth0-jwt-authorizer';
    this.tokenReq.client_id ='rJHFixIgsyoA5a9hkQiCELqcfkolQGjO';
    this.tokenReq.client_secret ='1QiPi1hLSvOpmDSm53iOGqrgCTTyHjpsOlhzvd_ASSIY7VOILtSp-5s6b5eu5xXY';
    this.tokenReq.grant_type ='client_credentials';
    this._generalService.getToken(this.tokenReq).subscribe(
      res=>{
        console.log("RESPUESTA :", res);
        console.log("RESPUESTA TOKEN:", res.access_token);
        this._router.navigate(['/home']);
        
      }, err=>{
        console.log("ERROR RESPUESTA TOKEN:", err);
        this._router.navigate(['/home']);

      })
    
    
  }

  SignUp(){
    console.log("SIGNUP");
    this._router.navigate(['signup'])
    
  }

}
