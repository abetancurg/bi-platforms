import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { OAuthService } from 'angular-oauth2-oidc';

// @Injectable()
// export class AuthGuard implements CanActivate {

//   constructor(private oauthService: OAuthService, private router: Router) { }

//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
//     if (this.oauthService.hasValidIdToken()) {
//       return true;
//     }

//     this.router.navigate(['/home']);
//     return false;
//   }
// }
