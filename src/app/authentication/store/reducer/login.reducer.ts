import { LoginResponse } from "src/app/service/model/login-response";
import { LoginActions, LoginActionTypes } from "../action/login.actions";


export interface LoginState {
  login: LoginResponse | undefined;
  loading: boolean;
  error: boolean;
}

export const intitalState: LoginState = {
    login: undefined,
  loading: false,
  error: false
};


export function loginReducer(state : LoginState = intitalState, action: LoginActions): LoginState {
  switch (action.type) {
    case LoginActionTypes.LoadLogin: {
      return {
        ...state,
        loading: true,
        error: false
      };
    }

    case LoginActionTypes.LoadLoginSuccess: {
        
      return {
        ...state,
        loading: false,
        login: action.payload,
        error: false
      };
    }

    case LoginActionTypes.LoadLoginFail: {
      return {
        ...state,
        loading: false,
        error: true
      };
    }

    default: {
      return state;
    }
  }
}
