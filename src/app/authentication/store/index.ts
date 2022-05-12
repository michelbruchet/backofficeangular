import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { environment } from "src/environments/environment";
import {  loginReducer, LoginState } from "./reducer/login.reducer";


export interface AppState {
  loginState: LoginState;
}

export const reducers: ActionReducerMap<AppState,any> = {

  loginState : loginReducer
};

export const selectLoginResponse = (state: AppState) => state.loginState ? state.loginState : null;
export const metaReducers: MetaReducer<any>[] = !environment.production ? [] : [];
