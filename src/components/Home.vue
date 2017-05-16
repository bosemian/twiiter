<template>
  <div class="ui basic segment">
    <div class="segment">
      <form class="ui form" @submit.prevent="post">
        <div class="field">
          <textarea v-model.trim="input"></textarea>
        </div>
        <button class="ui blue button" :class="{'loading disabled': posting}">Post</button>
      </form>
    </div>
    <div v-for="tweet in tweets" class="ui segment">
      <img :src="findUserPhoto(tweet.owner)"
        alt="avatar"
        v-if="findUserPhoto(tweet.owner)"
        class="ui circular image">
      {{ findUserName(tweet.owner) }}<br>
      {{ tweet.content }} ({{ tweet.timestamp  | fromNow}})
    </div>
  </div>
</template>

<script>
import { Tweet, User } from '../services'

export default {
  data: () => ({
    input: '',
    posting: false,
    tweets: [],
    users: []
  }),
  created () {
    Tweet.list((list) => {
      this.tweets = list
    })
    User.list((list) => {
      this.users = list
    })
  },
  methods: {
    post () {
      if (!this.input) return
      this.posting = true
      Tweet.post(this.input)
        .then(() => {
          this.input = ''
          this.posting = false
        })
    },
    findUserName (id) {
      const x = this.users.find((it) => it.$id === id)
      return x ? x.name : ''
    },
    findUserPhoto (id) {
      const x = this.users.find((it) => it.$id === id)
      return x ? x.photo : ''
    }
  }
}
</script>

<style>
  img.circular.image {
    width: 100px;
    height: 100px;
  }
</style>
