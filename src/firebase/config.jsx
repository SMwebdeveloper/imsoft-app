import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBDSGtwrWGIaPXp6ItQz-bMtBO8PcdcEWw",
    authDomain: "online-market-6080d.firebaseapp.com",
    projectId: "online-market-6080d",
    storageBucket: "online-market-6080d.appspot.com",
    messagingSenderId: "835736142487",
    appId: "1:835736142487:web:f243218af043c671009fd2"
  };

// initialize firbase

firebase.initializeApp(firebaseConfig)

// init

const projextFireStore = firebase.firestore()

export {projextFireStore}
