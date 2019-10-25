<template>
  <div class="mb-5" style="max-height:100vh">
    <v-progress-linear indeterminate :active="showProgress" color="yellow darken-2"></v-progress-linear>
    <v-card id="theme" class="my-1" v-for="post in posts" :key="post.id" flat>
      <v-layout wrap>
        <v-flex md9>
          <v-card-title class="textTitle white--text" @click="showSinglePost(post)">
            {{post.title}}
          </v-card-title>
          <v-card-text class="subTitle white--text mt-2">{{post.sub_content}}</v-card-text>
          <v-card-actions>
            <v-icon class="mr-1" color="cyan lighten-3" small>mdi-eye</v-icon>
            <span class="body-2 mr-2 white--text">{{post.views}}</span>
            <span class="mr-1">·</span>
            <v-icon class="mr-1" color="blue-grey lighten-5" small>mdi-timer</v-icon>
            <span class="body-2 white--text">{{post.updated_at}} ago</span>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-flex>
      
        <v-flex md3>
          <v-card-title class="font-weight-medium body-1 white--text">{{post.updated_at | moment("MMM Do YYYY")}}</v-card-title>
          <div class="text-center mt-3" x-large>
            <v-chip :color="post.category.name == 'Javascript' ? 'yellow accent-3' : (post.category.name == 'Vue') ? 'teal lighten-2' : (post.category.name == 'Laravel') ? 'orange' : 'secondary'">
              {{post.category.name}}
            </v-chip>
          </div>
        </v-flex>
      </v-layout>
    </v-card>
  </div>
</template>

<script>
import Vue from 'vue'
import categoryService from '../api/categories'

Vue.use(require('vue-moment'));

export default {
  name: 'categoryPost',
  data () {
    return {
      posts: [],
      categoryId: this.$route.query.id,
      showProgress: true,
    }
  },
  watch: {
    $route: 'updateRoute'
  },
  created() {
    this.getPosts()
  },
  methods: {
    getPosts () {
      categoryService.getCategoryPosts(this.categoryId)
        .then((response) => {
          this.showProgress = false
          let postData = response.posts
          this.posts = postData
        })
        .catch((errors) => console.log(errors))
    },
    showSinglePost(post) {
      this.$router.push({ path: '/post', query: { id: post.id, title: post.title } }) 
    },
    updateRoute () {
      this.categoryId = this.$route.query.id
      this.getPosts()
    }
  }
}
</script>

<style>
  #theme {
    background-color: #1E2227;
    font-family: 'Montserrat', sans-serif;
  }
  #theme:hover {
    background: #282C34;
  }
</style>

