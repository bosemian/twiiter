<template>
  <form class="ui form" @submit.prevent="save">
    <div class="field">
      <label>Name</label>
      <input v-model="name">
    </div>
    <div class="field">
      <label>Description</label>
      <input v-model="description">
    </div>
    <button class="ui submit button blue">Save</button>
    <div class="ui button red">Cancel</div>
  </form>
</template>

<script>
export default {
  data: () => ({
    name: '',
    description: ''
  }),
  methods: {
    save () {
      this.$emit('save')
    }
  }
}
</script>
