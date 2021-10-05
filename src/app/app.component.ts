import { Component,Injectable } from '@angular/core';
import { authCodeFlowConfig } from './config/auth-code-flow.config'
import { authConfig } from './auth-config'
import { OAuthService, OAuthStorage } from 'angular-oauth2-oidc'
import { useHash } from '../../src/flags'
import { Router } from '@angular/router'
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
import { catchError, filter, map} from 'rxjs/operators'
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http'
import { TOKEN } from './token-schema'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
// import { Token } from '@angular/compiler/src/ml_parser/lexer';
/*
  The JwksValidationHandler is explained in ManFred docs 
  as it was of the angular-oauth2-oidc library
  but this handler was independed. This must be installed by 
  "npm i  angular-oauth2-oidc-jwks --save"
*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  title = 'bi-services';
  
  constructor(private oauthService:OAuthService){
    this.configureSingleSignOn();
  }   
  
  configureSingleSignOn(){
    this.oauthService.configure(authCodeFlowConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndLogin();
    const estado = this.oauthService.state;
    console.log('EL ESTADO ES: ' + estado)
    // this.oauthService.setStorage(localStorage);
    // const token = this.oauthService.getIdentityClaims();
    // console.log('TOKEN IS: '+ token)
    
  }
  
  login(){
            this.oauthService.initImplicitFlow();
          }
  logout(){
            this.oauthService.logOut();
            console.log('ESTOY DESLOGUEADO')
          }
}



