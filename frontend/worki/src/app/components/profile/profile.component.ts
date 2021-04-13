import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GeneralService } from '../../services/general.service';
import { IUsuario } from '../../interfaces/employee';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  @Input() employee : IUsuario

  constructor() { }

  ngOnInit() {
  }

}
