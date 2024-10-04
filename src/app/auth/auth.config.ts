import { AuthConfig } from "angular-oauth2-oidc";
import { environment } from "src/environments/environment";

export const AuthCodeFlowConfig: AuthConfig = {
    issuer: environment.issuerUrl,
    redirectUri: window.location.origin + ['/login'],
    clientId: environment.clientId,
    dummyClientSecret: environment.clientSecret,
    responseType: 'code',
    scope: 'openid',
    disableAtHashCheck: true,
    showDebugInformation: false,
    timeoutFactor: 0.75,
    sessionCheckIntervall: 60000,
    requireHttps: false,
    sessionChecksEnabled: true,
    disablePKCE: true
  };