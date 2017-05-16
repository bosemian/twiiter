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
    <div class="ui button red" @click="$emit('cancel')">Cancel</div>
  </form>
</template>

<script>
export default {
  props: ['value'],
  data: () => ({
    name: '',
    description: ''
  }),
  created () {
    this.reload()
  },
  watch: {
    value: 'reload'
  },
  methods: {
    save () {
      this.$emit('input', {
        name: this.name,
        description: this.description
      })
      this.$emit('save')
    },
    reload () {
      this.name = this.value.name
      this.description = this.value.description
    }
  }
}
</script>
