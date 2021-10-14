import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { OAuthService } from 'angular-oauth2-oidc'
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private oauthService:OAuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    /*
        Lo siguiente genera un método, el cual no se recibe satisfactoriamente
        por el dict del httpheaders, por lo tanto se recurre al sessionStorage:

        const token = this.oauthService.getAccessToken;

        https://stackoverflow.com/a/40350534 non-null assertion operator (!)
    */
    var token  = sessionStorage.getItem('access_token')!;
    
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token,
    });

    const reqClone = req.clone({
      headers
    })

    //El next.handle() hace que por acá pase todo lo que llegue por requerimientos http
    //Es decir, que todo requerimiento que se haga, se le incluye este token
    //ToDo: add the ErrorHandler
    return next.handle(reqClone)
    
  }


}
