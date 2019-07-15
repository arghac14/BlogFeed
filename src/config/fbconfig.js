import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
var firebaseConfig = {
    apiKey: "AIzaSyBaovRjkGO8RS4tcQ4pzpwDzFQVtvpaDVw",
    authDomain: "blogfeed-b475a.firebaseapp.com",
    databaseURL: "https://blogfeed-b475a.firebaseio.com",
    projectId: "blogfeed-b475a",
    storageBucket: "",
    messagingSenderId: "925741075879",
    appId: "1:925741075879:web:df84440c8a900210"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;
