<template>
  <div>
    <v-progress-linear indeterminate :active="showProgress" color="yellow darken-2"></v-progress-linear>
    <v-card id="theme" class="my-1" flat v-show="!showProgress">
      <v-card-title class="textTitle white--text">{{post.title}}</v-card-title>
      <v-card-text class="subTitle white--text mt-2">{{post.sub_content}}</v-card-text>
      <v-card-title class="font-weight-bold body-2 white--text mt-3">
        Posted <span class="cyan--text ml-2"> {{post.created_at | moment("MMMM Do YYYY")}}</span>
        , last updated <span class="cyan--text ml-2"> {{post.updated_at | moment("MMMM Do YYYY")}}</span> 
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text class="white--text">
        {{post.content}}
      </v-card-text>
      <v-card-actions>
        <v-icon class="mr-1" color="cyan lighten-3" small>mdi-heart</v-icon>
        <span class="caption mr-2 white--text">{{post.views}}</span>
        <v-speed-dial :v-model="share" left direction="right"
          open-on-hover :transition="transition">
          <template v-slot:activator>
            <v-btn :v-model="share" color="blue darken-2" dark fab x-small>
              <v-icon v-if="!share">mdi-close</v-icon>
              <v-icon v-else>mdi-share-outline</v-icon>
            </v-btn>
          </template>
          <v-btn fab dark x-small color="primary">
            <v-icon>mdi-facebook</v-icon>
          </v-btn>
          <v-btn fab dark x-small color="light-blue darken-2">
            <v-icon>mdi-twitter</v-icon>
          </v-btn>
          <v-btn fab dark x-small color="teal accent-3">
            <v-icon>mdi-whatsapp</v-icon>
          </v-btn>
        </v-speed-dial>
        <v-spacer></v-spacer>
        <router-link to="/">
        <v-button>Go Back Home</v-button>
        </router-link>
      </v-card-actions>
    </v-card>
  </div>
</template>


<script>
import Vue from 'vue'
import postService from '../api/posts'

Vue.use(require('vue-moment'));

export default {
  name: 'SinglePostComponent',
  data: () => ({
    postId: null,
    post: [],
    showProgress: true,
    share: true,
    transition: 'slide-y-reverse-transition',
  }),
  created () {
    this.postId = this.$route.query.id
    this.init()
  },
  methods: {
    init () {
      this.showProgress = true
      postService.getPost(this.postId)
        .then((response) => {
          this.showProgress = false
          let postData = response.post
          this.post = postData
        })
        .catch((errors) => console.log(errors))
    }
  }
}
</script>


