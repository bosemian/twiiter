<template>
  <div id="app">
    <top-menu></top-menu>
    <router-view class="ui container"></router-view>
  </div>
</template>

<script>
import TopMenu from './components/TopMenu'

export default {
  components: {
    TopMenu
  }
}
</script>
