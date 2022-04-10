/* 
1. create a new firebase project in console.firebase.google.com
2. npm install firebase
3. create firebase.init.js and import getAuth to export auth
4. Firebase settings > Authentication > enable email and password auth
5. create login, signup component, setup route
6. attach form field handle and form submit handler
7.npm install --save react-firebase-hooks
8.useCreateUserWithEmailAndPassword from react-firebase-hooks
9.if user creacte redirect to the expected
10. useSignInAndEmailAndPassword
11. create RequireAuth component ==> chechk user exsists, also tract user loacation
12. in route wrap protected component by using RequireAuth components

*/

/**
**hosting steps**
1.npm install -g firebase-tools
2. firebase login
3. firebase init
4. firebase deploy
**/