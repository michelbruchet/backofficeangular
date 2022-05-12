import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
//import { UserService } from './services/user.service';
import { Observable, throwError, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { catchError, filter, take, switchMap, takeUntil } from 'rxjs/operators';
//import { AuthenticationService } from './app-services/authentication-service';
import { Router, RouterStateSnapshot } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpCancelService } from './HttpCancelService';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    private isAuthorized = true;
    private isRefreshing:boolean = false;
    private refreshTokenSubject: Subject<void> = new Subject<void>();
    private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

    constructor(
        //public userService: UserService, private authenticationService: AuthenticationService,
        private router:Router, private toastr:ToastrService,private httpCancelService: HttpCancelService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // if (this.userService.getCurrentUser()) {
        //     var userModel = this.userService.getCurrentUser();
        //     request = this.addToken(request, userModel.token);
        // }

        return next.handle(request).pipe(takeUntil(this.httpCancelService.onCancelPendingRequests()), catchError(error => {
            return next.handle(request);
            if (error instanceof HttpErrorResponse && error.status === 401) {

                if(!this.isRefreshing){
                    this.isRefreshing = true;
                    this.httpCancelService.cancelPendingRequests();
                    const snapshot: RouterStateSnapshot = this.router.routerState.snapshot;
                  //  this.authenticationService.logout();
                    this.toastr.error("You have been idle for 24 hour so the system has logged you out. Please log back in to access the system.", undefined, {
                        closeButton: true,
                        disableTimeOut: true,
                        positionClass: 'toast-bottom-right'
                    });
                    if(snapshot.url.includes("authentication/page-login")){
                        this.router.navigate(['authentication/page-login']);
                    }else{
                        this.router.navigate(['authentication/page-login'], { queryParams: { returnUrl: snapshot.url } });
                    }
                    this.isRefreshing = false;
                    return next.handle(request);
                }
                //this.handle401Error(request, next);
            } 
            else {
                return throwError(error);
            }
        }));
    }

    private onCancelPendingRequests(){

    }
    private addToken(request: HttpRequest<any>, token: string) {
        return request.clone({
            setHeaders: {
                'Authorization': `Bearer ${token}`
            }
        });
    }
}