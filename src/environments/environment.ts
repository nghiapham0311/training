// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

//Replace localhost environment when integrate with resources on local machince
export const environment = {
  production: false,
  gatewayService: 'https://topx-app-gateway-dev-southeastasia-001.azurewebsites.net',
  issuerUrl: 'https://login.techstacklab.net:9443/auth/realms/topx',
  clientId: 'topxapplication',
  clientSecret: 'Seqyx82PcIEe1aYb6D5nC1pkm9Azl6bP',
  funcService: 'https://topx-func-file-dev-southeastasia-001.azurewebsites.net'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
