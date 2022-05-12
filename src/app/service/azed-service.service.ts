import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginResponse } from './model/login-response';
import { LoginRequestModel } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class AzedServiceService {
  loginURL: string= 'http://api.azed-crypto.com/api/profile/login';

  constructor(private http: HttpClient) {
 } 
 login(login : LoginRequestModel) {

  const reqAPI = {
    "Email":login.Email,
    "NewPassword":login.Password
};
  const httpOptions = {
    headers: new HttpHeaders({ 'SecureApiKey': '1HvQuPcLVVpqzrAGm14Q28GFm4NFnPExSV', 'Accept': 'application/json','Content-Type': 'application/json' })
  }

  return this.http.post<LoginResponse>(`${this.loginURL}`, JSON.stringify(reqAPI), httpOptions);
}
}
