import firebase from 'firebase'
require('firebase/auth');

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyDy2zlzqu-FVIxKOJgGFycXcC_GWZa-dQY",
  authDomain: "goalcoach-f55fd.firebaseapp.com",
  databaseURL: "https://goalcoach-f55fd-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "goalcoach-f55fd",
  storageBucket: "goalcoach-f55fd.appspot.com",
  messagingSenderId: "993215783774",
  appId: "1:993215783774:web:d9821ce7ff49b61ce365cf",
  measurementId: "G-GHKTR9JHZS"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef=firebase.database().ref('completeGoals');
