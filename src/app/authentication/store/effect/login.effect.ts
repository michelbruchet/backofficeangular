import { Injectable } from "@angular/core";
import { Actions, createEffect, Effect, ofType } from "@ngrx/effects";
import { catchError, delay, map, of, switchMap } from "rxjs";
import { LoginRequestModel } from "src/app/models/login";
import { AzedServiceService } from "src/app/service/azed-service.service";
import { LoginResponse, LoginResponseData } from "src/app/service/model/login-response";
import { LoadLogin, LoadLoginFail, LoadLoginSuccess, LoginActionTypes } from "../action/login.actions";


@Injectable()
export class LoginEffects {
    constructor(private actions$: Actions, private service: AzedServiceService) { }

  //  @Effect()
  loadLogin$ = createEffect( () => this.actions$.pipe(
      ofType(LoginActionTypes.LoadLogin),
      delay(5000),
      switchMap((req: LoadLogin) =>
        this.service.login(req.payload).pipe(
          map((resp: LoginResponse) => new LoadLoginSuccess(resp)),
          catchError(error => of(new LoadLoginFail(error)))
        )
      ))
    );
  }