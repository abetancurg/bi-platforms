import { Component,Injectable } from '@angular/core';
import { authCodeFlowConfig } from './Config/auth-code-flow.config'
import { authConfig } from './auth-config'
import { OAuthService, OAuthStorage } from 'angular-oauth2-oidc'
import { useHash } from '../../src/flags'
import { Router } from '@angular/router'
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
import { catchError, map} from 'rxjs/operators'
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http'
import { TOKEN } from './token-schema'
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
  
  constructor(private oauthService: OAuthService){
              //Distinta ubicación a la de la documentación del issue:
              this.oauthService.initImplicitFlow();
              this.oauthService.redirectUri = window.location.origin + '/index.html';
              this.oauthService.clientId = 'bi-solutions'
              this.oauthService.scope = 'openid email'
              this.oauthService.oidc = true;
              this.oauthService.setStorage(sessionStorage);
              // this.oauthService.loginUrl = "http://host.docker.internal:9080/auth/realms/contento-local/protocol/openid-connect/auth?client_id=bi-solutions&redirect_uri=http://localhost:4200&response_mode=fragment&response_type=code&scope=openid"
              this.oauthService.tokenEndpoint = "http://host.docker.internal:9080/auth/realms/contento-local/protocol/openid-connect/token"
              //***
              // var estado1 = this.oauthService.state;
              var estado1 = this.oauthService.authorizationHeader();
              console.log('Estado #1: '+ estado1)
              //***
              this.oauthService.issuer = 'http://host.docker.internal:9080/auth/admin/master/console/#/realms/contento-local/authentication/flows/clients'
              this.oauthService.requireHttps = false;
              
              
              const url = 'http://host.docker.internal:9080/auth/admin/master/console/#/realms/contento-local/authentication/flows/clients.well-known/openid-configuration';

              this.oauthService.loadDiscoveryDocument(url).then((doc) => {
                this.oauthService.tryLogin({
                  onTokenReceived: context => {
                      //
                      // Output just for purpose of demonstration
                      // Don't try this at home ... ;-)
                      //
                      console.debug("logged in");
                      console.debug(context);
                      console.log('into de trylogin')
                  }
              }
                );
                console.debug('discovery succeeded', doc);
              });

              // this.oauthService.tokenValidationHandler = new JwksValidationHandler();
              // this.oauthService.initCodeFlow();
              // this.oauthService.initImplicitFlow();
              // this.oauthService.configure(authCodeFlowConfig);
              // this.oauthService.getAccessToken();
              // this.oauthService.tryLogin();

              //***
              var estado2 = this.oauthService.state;
              console.log('Estado #2: '+ estado2)
              //***

              // let token = this.oauthService.hasValidAccessToken();
              let token = this.oauthService.getIdentityClaims(); //--> nul
              console.log('El token es: '+ token)
              
                            
              }       
    }



