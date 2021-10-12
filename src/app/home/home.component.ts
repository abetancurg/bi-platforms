import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private oauthservice: OAuthService) {}

  ngOnInit(): void {}

  // get givenName() {
  //   const claims = this.oauthservice.getIdentityClaims();
  //   if (!claims) {
  //     return null;
  //   }
  //   console.log('Los claims son: '+ claims)
  //   return claims;
  // }


}
