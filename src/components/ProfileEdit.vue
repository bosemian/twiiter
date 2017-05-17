<template>
  <div class="ui segment">
    <h3 class="ui header">Edit Profile</h3>
    <profile-form 
      @save="saveForm" 
      @cancel="back"
      v-model="profile">
    </profile-form>
  </div>
</template>

<script>
import ProfileForm from './ProfileForm'
import { Me } from '../services'

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
  subscriptions: () => ({
    profile: Me.get()
  }),
  methods: {
    saveForm () {
      Me.set(this.profile)
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
