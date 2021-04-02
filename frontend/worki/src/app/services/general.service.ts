import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITokenReq, ITokenRes } from '../interfaces/token';
import { IEmployeeReq, IEmployeeRes } from '../interfaces/employee';
import { IProfileRes } from '../interfaces/profile';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private _httpClient: HttpClient) { 
    
  }

  getToken(tokenReq: ITokenReq): Observable<ITokenRes>{
    console.log("PAYLOAD GET TOKEN: ", tokenReq);
    return this._httpClient.post<ITokenRes>(`https://dev-soo51xif.us.auth0.com/oauth/token`, tokenReq);
  }


  getEmployeeProfile(token: string){
    console.log("PAYLOAD GET PROFILE: ", token);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    return this._httpClient.get<IProfileRes>(`https://1wjonre1f9.execute-api.us-east-2.amazonaws.com/default/profile-service`, {headers: headers});
  }
  

  createEmployee(employee: IEmployeeReq): Observable<IEmployeeRes>{
    console.log("PAYLOAD POST EMPLOYEE: ", employee);
    
    return this._httpClient.post<IEmployeeRes>(`https://vfk66twvg5.execute-api.us-east-1.amazonaws.com/default/ProyectoDiplomadoAgregarUsuario`, employee);

  }
}
