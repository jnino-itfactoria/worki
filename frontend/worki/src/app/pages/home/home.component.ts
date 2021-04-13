import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeneralService } from '../../services/general.service';
import { IGetEmployeeReq, IEmployeeRes, IUsuario } from '../../interfaces/employee';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  idEmployee: string;
  employeeReq: IGetEmployeeReq ={
    Id : ""
  }; 
  employee : IUsuario;

  constructor( private _generalService: GeneralService, 
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.idEmployee = this._activatedRoute.snapshot.params.idEmployee;
    this.getEmployee(this.idEmployee);
  }

  getEmployeeProfile(){
    let token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjBqZ0ZGMWlEYWlzQzE0b3hqamZITCJ9.eyJpc3MiOiJodHRwczovL2Rldi1zb281MXhpZi51cy5hdXRoMC5jb20vIiwic3ViIjoickpIRml4SWdzeW9BNWE5aGtRaUNFTHFjZmtvbFFHak9AY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vYXV0aDAtand0LWF1dGhvcml6ZXIiLCJpYXQiOjE2MTczMDU5MDksImV4cCI6MTYxNzMwNjAyOSwiYXpwIjoickpIRml4SWdzeW9BNWE5aGtRaUNFTHFjZmtvbFFHak8iLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.d2WaRm9AHJs5hTCWfmN_yKP5K9y1OvHUOFJM4KuGbr2DAzu087ojR3V7klVVCZ0j3on3e53H8MzDmKDYRnhR2nzrA0rP77GsDp_py4X0kSg-xjZ-v7P2yHkMdUVcazH11XdWJIaQ01ChMWQDoHTVw2bpBh87nFpAaefFQ7hreVWbFbnVsPjxCXXtr2Ca5GlwXnEQRv6QVykbMmdGdyoubtoBb4019pT0tb3do_0Ym3RTdmPLFdiVkuKS8WzmJqt01sdbV6euqQw3QC0Sw0ptkXEpdgPvRtINoASsGCmLWm2n2gwX6ZFLGVhxlJY_gc0YEprowXujdfN87c3B1dSDXw'
    this._generalService.getEmployeeProfile(token).subscribe(
      res=>{
        console.log("RES GET PROFILE ARRAY: ", res);
        console.log("RES GET PROFILE: ", res.Items[0].Nombre);
        

      }, 
      err=>{
        console.log("RES GET PROFILE: ", err);
      })

  }

  getEmployee(idEmployee: string){
    
    this.employeeReq.Id = idEmployee;
    
    this._generalService.getEmployee(this.employeeReq).subscribe(
      res=>{
        this.employee = res.Usuario;
        this._generalService.employee = res.Usuario;

      }, 
      err=>{
        console.log("RES GET EPLEMEA: ", err);
      })

  }

}
