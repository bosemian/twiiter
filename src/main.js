import Vue from 'vue'
import router from './router'
import firebase from 'firebase'
import moment from 'moment'
import { Observable, Subscription } from 'rxjs'
import VueRx from 'vue-rx'

import '!script-loader!jquery/dist/jquery.min.js'
import '!script-loader!semantic-ui-css/semantic.min.js'
import '!style-loader!css-loader!semantic-ui-css/semantic.min.css'

import App from './App'
import { Auth } from './services'

// Initialize Firebase
firebase.initializeApp(process.env.FIREBASE)
Auth.init()

Vue.filter('upper', (value) => {
  if (typeof value === 'string') {
    return value.toUpperCase()
  }
  return value
})

const ticker = new Vue({
  data: () => ({
    tick: 0
  }),
  created () {
    setInterval(() => {
      this.tick = Date.now()
    }, 10000)
  }
})

Vue.filter('fromNow', (value) => {
  ticker.tick
  return moment(value).fromNow()
})

Vue.config.productionTip = false

Vue.use(VueRx, { Observable, Subscription })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  ...App
})
