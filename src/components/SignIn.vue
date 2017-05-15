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
