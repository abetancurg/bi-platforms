import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private oauthservice: OAuthService
  ) {
    this.to_store_token_in_local();
   }

  // public code = localStorage.getItem('code');
  
  to_store_token_in_local (){
    let code_ = localStorage.setItem('code',JSON.stringify({'code':'code'}));
    // var code = 'soy el codigo';
    console.log(code_)
  }

  get access_token(){
    return this.oauthservice.getAccessToken()
  }


  ngOnInit(): void {
  }

}
