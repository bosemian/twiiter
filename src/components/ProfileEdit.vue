<template>
  <div class="ui segment">
    <h3 class="ui header">Edit Profile</h3>
    <profile-form @save="saveForm"></profile-form>
  </div>
</template>

<script>
import ProfileForm from './ProfileForm'
export default {
  components: {
    ProfileForm
  },
  methods: {
    saveForm () {
      console.log('save from profile edit')
    }
  }
}
</script>
