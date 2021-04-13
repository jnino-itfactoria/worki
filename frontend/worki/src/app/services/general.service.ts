import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITokenReq, ITokenRes } from '../interfaces/token';
import { IEmployeeReq, IEmployeeRes, IGetEmployeeRes, IGetEmployeeReq, IUsuario } from '../interfaces/employee';
import { IProfileRes } from '../interfaces/profile';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  employee: IUsuario;

  constructor(private _httpClient: HttpClient) { 
    
  }

  getToken(tokenReq: ITokenReq): Observable<ITokenRes>{
    return this._httpClient.post<ITokenRes>(`https://dev-soo51xif.us.auth0.com/oauth/token`, tokenReq);
  }


  getEmployeeProfile(token: string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    return this._httpClient.get<IProfileRes>(`https://1wjonre1f9.execute-api.us-east-2.amazonaws.com/default/profile-service`, {headers: headers});
  }
  

  createEmployee(employee: IEmployeeReq): Observable<IEmployeeRes>{
    return this._httpClient.post<IEmployeeRes>(`https://vfk66twvg5.execute-api.us-east-1.amazonaws.com/default/ProyectoDiplomadoAgregarUsuario`, employee);
  }


  getEmployee(idEmployee: IGetEmployeeReq): Observable<IGetEmployeeRes>{
    return this._httpClient.post<IGetEmployeeRes>(`https://nkxtlcnkib.execute-api.us-east-1.amazonaws.com/default/ProyectoDiplomadoObtenerUsuario`, idEmployee);
  }


}
