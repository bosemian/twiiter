<template>
  <div class="ui segment">
    <h3 class="ui header">Profile</h3>
    <profile-detail :profile="profile"></profile-detail>
    <br><br>
    <router-link to="/profile/edit"class="ui button green">Edit</router-link>
  </div>
</template>

<script>
import { Me } from '../services'
import ProfileDetail from './ProfileDetail'
export default {
  components: {
    ProfileDetail
  },
  subscriptions: () => ({
    profile: Me.get()
  })
}
</script>

<style scoped>
  img.circular.image {
    width: 120px;
    height: 120px;
    margin-bottom: 5px;
  }
</style>
