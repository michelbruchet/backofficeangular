// import { ErrorHandler, Injectable,Inject, Injector } from '@angular/core';
// import { ToastrService } from 'ngx-toastr';
// // import { AuthenticationService } from './app-services/authentication-service';
// // import { UserService } from './services/user.service';
// // import { AppConfig } from './app.config';
// // import { StdErrMsg } from './../assets/data/Enum';
// import { HttpErrorResponse } from '@angular/common/http';
// @Injectable()
// export class CustomErrorHandler implements ErrorHandler {
//     constructor(@Inject(Injector) private injector: Injector) { }
//     // Need to get ToastrService from injector rather than constructor injection to avoid cyclic dependency error
//     private get _toastrService(): ToastrService {
//             return this.injector.get(ToastrService);
//     }
//     handleError(error: any) {
//         if(error && error.status && error.status == 401){
//         }
//         else{
//             const chunkFailedMessage = /Loading chunk [\d]+ failed/;
            
//             if (error.message&& chunkFailedMessage.test(error.message)) {
//                 window.location.reload();
//             }
//             else {
//                 if (error instanceof HttpErrorResponse) {
//                     if (!navigator.onLine) {
//                         console.error("Client error occurred: ", error.error.message);
//                         this._toastrService.error(error.error.message);
//                     } else {
//                         //console.error(`Backend returned code ${error.status},`+`body was:`);
//                         console.error(error.error);
//                         this._toastrService.error(error.error.message);
//                     }
//                 } 
//                 else {
//                     if(error.message && error.message.toString().indexOf("InvalidPipeArgument") != -1   ){
//                         this._toastrService.error(error.message, undefined, {
//                             closeButton: true,
//                             disableTimeOut: true,
//                             positionClass: 'toast-bottom-right'
//                         });
//                     }
//                     else{
//                         if(error.message){
//                             error.message = error.message;
//                         }else if(error){
//                             error.message = error;
//                         }
//                         else{
//                             error.message = StdErrMsg;
//                         }
//                         this._toastrService.error(error.message, undefined, {
//                             closeButton: true,
//                             disableTimeOut: true,
//                             positionClass: 'toast-bottom-right'
//                         });
//                         if (AppConfig.settings.logError) {
//                             const service = this.injector.get(AuthenticationService);
//                             const userService = this.injector.get(UserService);
//                             var user = userService.getCurrentUser();
//                             var browser = this.getBrowserName(window.navigator.userAgent);
//                             service.logError(error.stack, error.message, user ? (user.firstName + " " + user.lastName) : '', window.location.href,browser)
//                             .subscribe((obj:any) => {
//                             });
//                         }
//                     }
//                 }
//                 console.error(error);
//             }
//         }
//     }
//     getBrowserName(userAgent:string)
//         {
//             //userAgent = "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko";
//             let currentBrowser:string = "";
//             if (userAgent.includes("OPR"))
//             {
//                 currentBrowser = "Opera " + userAgent.split("OPR/")[1].split(" ")[0];
//             }
//             else if (userAgent.includes("Edg"))
//             {
//                 currentBrowser = "Microsoft Edge " + userAgent.split("Edg/")[1].split(" ")[0];
//             }
//             else if (userAgent.includes("Chrome"))
//             {
//                 currentBrowser = "Chrome " + userAgent.split("Chrome/")[1].split(" ")[0];
//             }
//             else if (userAgent.includes("MSIE") || userAgent.includes("rv:"))
//             {
//                 if(userAgent.includes("rv:"))
//                     currentBrowser = "Internet Explorer " + userAgent.split("rv:")[1].split(")")[0];
//                 else
//                     currentBrowser = "Internet Explorer" + userAgent.split("MSIE")[1].split(";")[0];
//             }
//             else if (userAgent.includes("Firefox"))
//             {
//                 currentBrowser = "Firefox " + userAgent.split("Firefox/")[1].split(" ")[0];
//             }
//             else if (userAgent.includes("Safari") && !userAgent.includes("Chrome"))
//             {
//                 currentBrowser = "Safari " + userAgent.split("Safari/")[1].split(" ")[0];
//             }
            
//             return currentBrowser;
//     }
// }