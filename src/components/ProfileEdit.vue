<template>
  <div class="ui segment">
    <h3 class="ui header">Edit Profile</h3>
    <profile-form 
      @save="saveForm" 
      @cancel="back"
      v-model="profile">
    </profile-form>
    {{ profile }}
  </div>
</template>

<script>
import ProfileForm from './ProfileForm'
import firebase from 'firebase'
export default {
  components: {
    ProfileForm
  },
  data: () => ({
    profile: {
      name: '',
      description: ''
    }
  }),
  created () {
    const userId = firebase.auth().currentUser.uid
    firebase.database().ref(`user/${userId}`)
        .once('value', snapshot => {
          this.profile = snapshot.val()
        })
  },
  methods: {
    saveForm () {
      const userId = firebase.auth().currentUser.uid
      firebase.database().ref(`user/${userId}`)
        .set(this.profile)
        .then(() => {
          this.back()
        })
    },
    back () {
      this.$router.push('/profile')
    }
  }
}
</script>
