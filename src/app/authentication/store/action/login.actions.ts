

import { Action } from "@ngrx/store";
import { LoginRequestModel } from "src/app/models/login";
import { LoginResponse } from "src/app/service/model/login-response";


export enum LoginActionTypes {
  LoadLogin = '[Login] Load Login',
  LoadLoginSuccess = '[Login] Load Login Success',
  LoadLoginFail = '[Login] Load Login Fail'
}

export class LoadLogin implements Action {
  readonly type = LoginActionTypes.LoadLogin;
  constructor(public payload: LoginRequestModel) {}
}

export class LoadLoginSuccess implements Action {
  readonly type = LoginActionTypes.LoadLoginSuccess;
  constructor(public payload: LoginResponse) {}
}

export class LoadLoginFail implements Action {
  readonly type = LoginActionTypes.LoadLoginFail;
  constructor(public payload: string) {}
}

export type LoginActions =
  | LoadLogin
  | LoadLoginSuccess
  | LoadLoginFail;


