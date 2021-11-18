import { AuthConfig } from 'angular-oauth2-oidc';

export const authCodeFlowConfig: AuthConfig = {

    //The following url you might extract from de well-known part of the Línea de Producción:
    // issuer : 'http://host.docker.internal:9080/auth/realms/contento-local', //por si Robert me regaña
    // issuer : 'http://sso-server:9080/auth/realms/contento-local', //para pruebas locales
    issuer : 'https://contento-developer.uc.r.appspot.com/auth/realms/contento-developer',

    requireHttps: false,

    clientId : 'bi-solutions',

    responseType : 'code',
    
    scope : 'openid email profile',

  // URL of the SPA to redirect the user to after login
    redirectUri: 'http://localhost:4200/home' ,

  // The SPA's id. The SPA is registered with this id at the auth-server
  // clientId: 'spa-demo',

  // // set the scope for the permissions the client should request
  // // The first three are defined by OIDC. The 4th is a usecase-specific one
  // scope: 'openid profile email voucher',

  };