import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState, selectLoginResponse } from '../authentication/store';
import { LoadLogin } from '../authentication/store/action/login.actions';
import { LoginState } from '../authentication/store/reducer/login.reducer';
import { LoginRequestModel } from '../models/login';
import { AzedServiceService } from '../service/azed-service.service';
import { LoginResponse } from '../service/model/login-response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm!: FormGroup;
  selectCandidateRequestList$ = this.store.select(selectLoginResponse);


  constructor(private service: AzedServiceService, private router: Router, private store: Store<AppState>) {
    this.selectCandidateRequestList$.subscribe((resp: LoginState | null) => {
      if (resp && resp.loading === false && resp.login?.success) {
        localStorage.setItem('user-name',resp.login.data.userName);
        this.router.navigateByUrl('/dashboard');
      }
    })
  }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      Email: new FormControl(''),
      Password: new FormControl(''),
      RememberMe: new FormControl('')
    });
  }

  onSubmit(formData: any) {
    const req: any = formData.value as LoginRequestModel;
    this.store.dispatch(new LoadLogin(req));

    // this.service.login(formData.value.Email, formData.value.Password).subscribe((resp: LoginResponse) => {
    //   if (resp.success) {
    //     localStorage.setItem("user-name",resp.data.userName);
    //     this.router.navigateByUrl('/dashboard');
    //   }
    // })
  }

}
