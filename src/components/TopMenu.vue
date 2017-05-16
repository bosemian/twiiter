<template>
  <div class="ui menu">
      <router-link class="header item" to="/" active-class="active" exact>Home</router-link>
      <div class="right menu">
        <router-link v-if="currentUser" class="item" to="/profile" active-class="active">Profile</router-link>
        <router-link v-if="!currentUser" class="item" to="/signin" active-class="active">Sign In</router-link>
        <div v-if="currentUser" @click="signOut" class="link item">Sign Out</div>
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
    firebase.auth().onAuthStateChanged(user => {
      this.currentUser = user
    })
  },
  methods: {
    signOut () {
      firebase.auth().signOut()
      this.$router.replace('/')
    }
  }
}
</script>
