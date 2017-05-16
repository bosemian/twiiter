<template>
  <div class="ui segment">
    <h3 class="ui header">Edit Profile</h3>
    <profile-form @save="saveForm" v-model="profile"></profile-form>
    {{ profile }}
  </div>
</template>

<script>
import ProfileForm from './ProfileForm'
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
  methods: {
    saveForm () {
      console.log(this.profile)
      console.log('save from profile edit')
    }
  }
}
</script>
