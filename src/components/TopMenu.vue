<template>
  <div class="ui menu">
      <router-link class="header item" to="/" active-class="active" exact>Home</router-link>
      <div class="right menu">
        <router-link class="item" to="/profile" active-class="active">Profile</router-link>
        <router-link class="item" to="/signin" active-class="active">Sign In</router-link>
        <div v-if="currentUser" class="link item">Sign Out</div>
      </div>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
  data: () => ({
    currentUser: null
  }),
  created () {
    firebase.auth.onAuthStateChanged(user => {
      console.log(`currentUser: ${user}`)
      this.currentUser = user
    })
  }
}
</script>
