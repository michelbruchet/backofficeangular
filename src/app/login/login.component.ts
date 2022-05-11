import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AzedServiceService } from '../service/azed-service.service';
import { LoginResponse } from '../service/model/login-response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm!: FormGroup;

  constructor(private service: AzedServiceService, private router: Router) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      Email: new FormControl(''),
      Password: new FormControl(''),
      RememberMe: new FormControl('')
    });
  }

  onSubmit(formData: any) {
    this.service.login(formData.value.Email, formData.value.Password).subscribe((resp: LoginResponse) => {
      if (resp.success) {
        localStorage.setItem("user-name",resp.data.userName);
        this.router.navigateByUrl('/dashboard');
      }
    })
  }

}
