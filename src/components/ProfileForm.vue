<template>
  <form v-if="value" class="ui form" @submit.prevent="save">
    <div class="field">
      <label>Photo</label>
      <img v-if="photo" :src="photo" class="ui small circular image">
      <div @click="openUpload" class="ui green button">Upload Photo</div>
    </div>
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
    <upload-modal ref="upload" @success="uploaded"></upload-modal>
  </form>
</template>

<script>
import UploadModal from './UploadModal'

export default {
  components: {
    UploadModal
  },
  props: ['value'],
  data: () => ({
    name: '',
    description: '',
    photo: ''
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
        description: this.description,
        photo: this.photo
      })
      this.$emit('save')
    },
    reload () {
      if (this.value) {
        this.name = this.value.name
        this.description = this.value.description
        this.photo = this.value.photo
      }
    },
    openUpload () {
      this.$refs.upload.open()
    },
    uploaded (url) {
      this.photo = url
    }
  }
}
</script>

<style scoped>
  img.circular.image {
    width: 120px;
    height: 120px;
    margin-bottom: 5px;
  }
</style>
