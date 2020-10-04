import React from 'react'
import *as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDY2GQsg630bLQkxLpYMHj9ljdHlhZfUHI",
    authDomain: "webapp-dabb0.firebaseapp.com",
    databaseURL: "https://webapp-dabb0.firebaseio.com",
    projectId: "webapp-dabb0",
    storageBucket: "webapp-dabb0.appspot.com",
    messagingSenderId: "384399784706",
    appId: "1:384399784706:web:9bacadd87be9ef1c30e01b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;