import Vue from 'vue'
import router from './router'
import firebase from 'firebase'

import '!script-loader!jquery/dist/jquery.min.js'
import '!script-loader!semantic-ui-css/semantic.min.js'
import '!style-loader!css-loader!semantic-ui-css/semantic.min.css'

import App from './App'

// Initialize Firebase
firebase.initializeApp({
  apiKey: 'AIzaSyBF4WOu-T7_3_2-ucYXJBJEGXGvWK2c6UI',
  authDomain: 'twiiter-b335f.firebaseapp.com',
  databaseURL: 'https://twiiter-b335f.firebaseio.com',
  projectId: 'twiiter-b335f',
  storageBucket: 'twiiter-b335f.appspot.com',
  messagingSenderId: '567003771596'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  ...App
})
