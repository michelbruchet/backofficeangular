import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './login/home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './service/token.interceptor';
//import { CustomErrorHandler } from './service/custom-error-handler';
import { HttpCancelService } from './service/HttpCancelService';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffects } from './authentication/store/effect/login.effect';
import { metaReducers, reducers } from './authentication/store';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent
  ],
  imports: [
    EffectsModule.forRoot([LoginEffects]),
    StoreModule.forRoot(reducers, { metaReducers }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
   // StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [
   // HttpCancelService,
//     {
//     provide: ErrorHandler,
//     useClass: CustomErrorHandler
// },
// {
//     provide: HTTP_INTERCEPTORS,
//     useClass: TokenInterceptor,
//     multi: true,
// }
//,
],
  bootstrap: [AppComponent]
})
export class AppModule { }
