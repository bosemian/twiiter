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
    <div v-if="tweets" v-for="tweet in list" class="ui segment">
      <div class="ui itemS">
        <div class="item">
          <div class="image">
            <img :src="tweet.user.photo"
                alt="avatar"
                v-if="tweet.user"
                class="ui tiny circular image">
          </div>
          <div class="content">
            <div v-if="tweet.user" class="head">
              {{ tweet.user.name }}
            </div>
            <div class="description">
              {{ tweet.content }}
            </div>
            <div class="date">
              {{ tweet.timestamp  | fromNow }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Tweet, User } from '../services'
export default {
  data: () => ({
    input: '',
    posting: false
  }),
  subscriptions: () => ({
    tweets: Tweet.getTweets(),
    users: User.getUsers()
  }),
  computed: {
    list () {
      if (this.tweets && this.users) {
        const posts = this.tweets.map((tweet) => {
          const user = this.users.reduce((p, v) => {
            p[v.$id] = v
            return p
          }, {})
          return {
            ...tweet,
            user: user[tweet.owner]
          }
        })
        return posts
      }
    }
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
    }
  }
}
</script>

<style scoped>
  img.tiny.circular.image {
    width: 100px;
    height: 100px;
  }
</style>
