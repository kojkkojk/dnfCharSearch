const firebase = require("firebase");

const firebaseConfig = {
  apiKey: "AIzaSyBsopfct30Iex5YvR68kkxJ8zgGu9QTylY",
  authDomain: "thorarcv.firebaseapp.com",
  databaseURL: "https://thorarcv-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "thorarcv",
  storageBucket: "thorarcv.appspot.com",
  messagingSenderId: "1089375906972",
  appId: "1:1089375906972:web:242e9920df35ef54a0d159"
};

let app = firebase.initializeApp(firebaseConfig)

module.exports = app;