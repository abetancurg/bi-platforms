import { Component } from '@angular/core';
import { authCodeFlowConfig } from './auth-code-flow.config'
import { authConfig } from './auth-config'
import { OAuthService } from 'angular-oauth2-oidc'
import { useHash } from '../../src/flags'
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'bi-services';
  
  constructor(private oauthService: OAuthService, private router: Router){
    if(sessionStorage.getItem('flow') === 'code')
    {
      this.configureCodeFlow();
    } else {
      this.configureImplicitFlow();
    }
  }

  private configureCodeFlow(){
    this.oauthService.configure(authCodeFlowConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then(
      (_) => {
        if (useHash) {
          this.router.navigate(['/']);
        }
      }
    )
  }

  private configureImplicitFlow(){
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then(
      (_) => {
        if (useHash){
          this.router.navigate(['/'])
        }
      }
    )
  }
}




