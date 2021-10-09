import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc'

@Component({
  selector: 'app-password-flow-login',
  templateUrl: './password-flow-login.component.html',
  styleUrls: ['./password-flow-login.component.css']
})
export class PasswordFlowLoginComponent implements OnInit {

  userName: string = '';
  password: string = '';
  loginFailed: boolean = false;
  userProfile: object = [];

  constructor(private oauthService: OAuthService) { 
    this.oauthService.loadDiscoveryDocument();
  }

  ngOnInit(): void {
  }

  loadUserProfile(): void {
    this.oauthService.loadUserProfile().then((up) => (this.userProfile = up));
  }

  get access_token(){
    return this.oauthService.getAccessToken();
  }

  get access_token_expiration() {
    return this.oauthService.getAccessTokenExpiration();
  }

  get givenName() {
    var claims: any = this.oauthService.getIdentityClaims();
    if (!claims) return null;
    return claims['given_name'];
  }

  get familyName() {
    var claims: any = this.oauthService.getIdentityClaims();
    if (!claims) return null;
    return claims['family_name'];
  }

  loginWithPassword(){
    this.oauthService
      .fetchTokenUsingPasswordFlowAndLoadUserProfile(
        this.userName,
        this.password
      )
      .then(()=> {
        console.debug('succesfully logged in');
        this.loginFailed = false;
      })
      .catch((err)=>{
        console.error('error logging in',err);
        this.loginFailed = true;
      })
  }

}
