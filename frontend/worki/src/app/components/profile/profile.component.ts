import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  profileForm: FormGroup;
  nombre= "dennis rodman";
  cedula= "80850493";
  imagen= "https://www.atlassian.com/es/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg";
  salario= "12500000";
  direccion="Avenida Suba # 103 B-50 Apartamento 302";
  telefono="3004910911";



  constructor() { }

  ngOnInit() {
  }

}
