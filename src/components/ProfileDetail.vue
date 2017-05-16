<template>
  <div>
    <img 
      class="ui circular image" 
      :src="profile.photo" 
      v-if="profile.photo"
      alt="avatar">
    <h4>Name:</h4> {{ profile.name | upper }}<br>
    <h4>Description:</h4> {{ profile.description }}
  </div>
</template>

<script>
export default {
  props: ['profile']
}
</script>

<style scoped>
  img.circular.image {
    width: 180px;
    height: 180px;
  }
</style>
