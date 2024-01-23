// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


export const environment = {
  production: false,
  apiKey: '27a984d720b43e1df4ab675ed1edc2d3', // <-- Enter your own key here!'
  baseUrl: 'https://api.themoviedb.org/3',
  images: 'https://image.tmdb.org/t/p',
  firebaseConfig: {
    apiKey: 'AIzaSyDp6vgGL0cacCMK8v81bEz0AcxQz4Q_awY',
    authDomain: 'movieapp-fb475.firebaseapp.com',
    projectId: 'movieapp-fb475',
    storageBucket: 'movieapp-fb475.appspot.com',
    messagingSenderId: '146520480100',
    appId: '1:146520480100:android:9caa7925526633c0454271',
  },

};



/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
