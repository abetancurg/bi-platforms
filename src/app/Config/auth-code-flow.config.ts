import { AuthConfig } from 'angular-oauth2-oidc'

export const authCodeFlowConfig: AuthConfig = {
    // Url of the Identity Provider
    // The following URL is the main URL of Local SSO:
    issuer: 'http://host.docker.internal:9080/auth/admin/master/console/',
  
    // URL of the SPA to redirect the user to after login
    redirectUri: window.location.origin + '/index.html',
  
    // The SPA's id. The SPA is registerd with this id at the auth-server
    // clientId: 'server.code',
    clientId: 'bi-solutions',
  
    // Just needed if your auth server demands a secret. In general, this
    // is a sign that the auth server is not configured with SPAs in mind
    // and it might not enforce further best practices vital for security
    // such applications.
    // dummyClientSecret: 'secret',
  
    responseType: 'code',
  
    // set the scope for the permissions the client should request
    // The first four are defined by OIDC.
    // Important: Request offline_access to get a refresh token
    // The api scope is a usecase specific one
    scope: 'openid',

    disableAtHashCheck: true,
  
    showDebugInformation: true,

    requestAccessToken: true,
    /*
      If this is set as true, may show an error, but this error
      is normal when one uses localhost proof.

      https://github.com/manfredsteyer/angular-oauth2-oidc/blob/master/projects/lib/src/oauth-service.ts
      529 line
    */
    requireHttps: false,

    oidc: true,

    disablePKCE: true,

    // requireHttps: false,

    // sessionChecksEnabled: false,

    // clearHashAfterLogin: true,
  };