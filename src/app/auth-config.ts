// This api will come in the next version

import { computeDecimalDigest } from '@angular/compiler/src/i18n/digest';
import { AuthConfig } from 'angular-oauth2-oidc';
// import { opendir } from 'fs';

export const authConfig: AuthConfig = {
  // Url of the Identity Provider
  issuer: 'http://host.docker.internal:9080/auth/realms/contento-local',

  requireHttps: false,

  // access-control-allow-origin: *,

  redirectUri: 'http://localhost:4200/login',

  // URL of the SPA to redirect the user after silent refresh
  silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',

  // The SPA's id. The SPA is registerd with this id at the auth-server
  clientId: 'metlife',

  // set the scope for the permissions the client should request
  // The first three are defined by OIDC. The 4th is a usecase-specific one
  scope: 'openid email',

  silentRefreshShowIFrame: true,

  showDebugInformation: true,

  sessionChecksEnabled: true,

  timeoutFactor: 0.01,
  /*
    For implicit flow one uses "token" as value, and in 
    refresh flows one uses "code" as value
  */
  // responseType: 'token',
};