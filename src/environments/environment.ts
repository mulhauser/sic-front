// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDS9TJE_tWNKJJlFnixT5rB5OkJFQ0YVu0",
    authDomain: "modern-bond-263410.firebaseapp.com",
    databaseURL: "https://modern-bond-263410.firebaseio.com",
    projectId: "modern-bond-263410",
    storageBucket: "modern-bond-263410.appspot.com",
    messagingSenderId: "108327814733",
    appId: "1:108327814733:web:3df271b6607e7a655ffe04",
    measurementId: "G-KKGJ88XBQM",
    vapidKey:
      "BAJope0SK9TcWMA9uSJp4Y7DHW37spsvCeBrPo8HGrbvf2tfwF7yJ5kqpkYFbgy2oCNBUL4Wso1rDNWszu_YBx0"
  },
  backend: {
    protocol: "http",
    host: "127.0.0.1",
    port: "3000",
    endpoints: {
      getProfile: "/profile"
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
