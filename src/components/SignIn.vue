<template>
  <div class="ui segment">
    <h2 class="ui header">Sign In</h2>
    <div @click="signin" class="ui google plus button">
      <i class="google plus icon"></i>
      Sign In with Google+
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  beforeRouteEnter (to, from, next) {
    const cancel = firebase.auth().onAuthStateChanged(user => {
      cancel()
      if (user) {
        next(to.query.redirect || '/')
        return
      }
      next()
    })
  },
  methods: {
    signin () {
      firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then(res => {
          this.$router.replace(this.$route.query.redirect || '/')
        })
    }
  }
}
</script>
