<template>
  <div>
    <v-progress-linear indeterminate :active="showProgress" color="yellow darken-2"></v-progress-linear>
    <v-card id="theme" class="my-1" flat v-show="!showProgress">
      <v-card-title class="textTitle white--text">{{post.title}}</v-card-title>
      <v-card-text class="subTitle white--text mt-2">{{post.sub_content}}</v-card-text>
      <v-card-title class="font-weight-bold body-2 white--text mt-3">
        Posted <span class="cyan--text ml-2"> {{post.created_at | moment("MMM Do YYYY")}}</span>
        , last updated <span class="cyan--text ml-2"> {{post.updated_at | moment("MMM Do YYYY")}}</span> 
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text class="white--text">
        {{post.content}}
      </v-card-text>
      <v-card-actions>
        <v-icon class="mr-1" color="cyan lighten-3" small>mdi-eye</v-icon>
        <span class="body-2 mr-2 white--text">{{post.views}}</span>
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
        <v-btn text color="primary">
          <v-icon left dark x-small>mdi-comment-plus-outline</v-icon>Go Back Home
        </v-btn>
        </router-link>
      </v-card-actions>
      <br><br>
      <div v-if="!checkComments">
        <span>
          <v-bottom-sheet v-model="postCommentVisible" inset max-width="50%" scrollable>
            <template v-slot:activator="{ on }">
              <v-btn v-on="on">
              <v-icon left dark x-small>mdi-comment-plus-outline</v-icon> Post Comment
              </v-btn>
            </template>
            <v-sheet height="300px" class="px-4 py-3">
              <v-form ref="commentsForm" v-model="valid" lazy-validation>
                <v-text-field v-model="commentsForm.name" :counter="15"
                  label="First name" required :rules="rules.name">
                </v-text-field>
                <v-textarea v-model="commentsForm.comment" label="Comment"
                  autofocus auto-grow :rules="rules.comment">
                </v-textarea>
                <v-btn color="deep-purple accent-4" dark block @click="postComment" :loading="btnLoading">Post</v-btn>
              </v-form>
            </v-sheet>
          </v-bottom-sheet>
        </span>
        <!-- Comments Section -->
        <v-timeline dense v-for="comment in post.comments" :key="comment.id">
          <v-timeline-item>
            <template v-slot:icon>
              <v-avatar color="pink">
                <span class="white--text headline">{{comment.alphabet}}</span>
              </v-avatar>
            </template>
            <v-card class="elevation-2">
              <v-card-title class="headline">{{comment.name}}</v-card-title>
              <v-card-text>
                {{comment.comment}}
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </div>
      <div v-else class="mx-4 pb-5">
        <span class="subTitle white--text">No Comments <br> 
          <span class="body-2">Post a comment or add your contributions</span>
        </span>
        <span style="float:right;">
          <v-bottom-sheet v-model="sheet" inset max-width="50%" scrollable>
            <template v-slot:activator="{ on }">
              <v-btn v-on="on">
              <v-icon left dark x-small>mdi-comment-plus-outline</v-icon> Post Comment
              </v-btn>
            </template>
            <v-sheet height="300px" class="px-4 py-3">
              <v-form ref="commentsForm" v-model="valid" lazy-validation>
                <v-text-field v-model="commentsForm.name" :counter="15"
                  label="First name" required :rules="rules.name">
                </v-text-field>
                <v-textarea v-model="commentsForm.comment" label="Comment"
                  autofocus auto-grow :rules="rules.comment">
                </v-textarea>
                <v-btn color="deep-purple accent-4" dark block @click="postComment" :loading="btnLoading">Post</v-btn>
              </v-form>
            </v-sheet>
          </v-bottom-sheet>
        </span>
      </div>
    </v-card>
  </div>
</template>

<script>
import Vue from 'vue'
import postService from '../api/posts'
import commentService from '../api/comments'

import { quillEditor } from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.use(require('vue-moment'));

export default {
  name: 'SinglePost',
  components: { quillEditor },
  data: () => ({
    postId: null,
    post: [],
    btnLoading: false,
    postCommentVisible: false,
    editPostViews: {
      id: null,
      views: null 
    },
    commentsForm: {
      name: '',
      alphabet: '',
      comment: '',
      post_id: ''
    },
    rules: {
      name: [
        v => !!v || 'Name field is required',
        v => v.length <= 15 || 'Name should be less than 15 characters'
      ],
      comment: [
        v => !!v || 'Comment field is required'
      ],
    },
    valid: true,
    showProgress: true,
    share: true,
    sheet: false,
    transition: 'slide-y-reverse-transition',
  }),
  computed: {
    checkComments: function () {
      let c = this.post.comments
      return !Array.isArray(c) || !c.length
    }
  },
  created () {
    this.postId = this.$route.query.id
    this.init()
  },
  methods: {
    init () {
      this.getPost()
    },
    getPost () {
      postService.getPost(this.postId)
        .then((response) => {
          this.showProgress = false
          let postData = response.post
          this.post = postData
          this.updatePostViews()
        })
        .catch((errors) => console.log(errors))
    },
    postComment () {
      let self = this
      this.btnLoading = true
      if (this.$refs.commentsForm.validate()) {
        let str = self.commentsForm.name
        let alpha = str.charAt(0)
        self.commentsForm.post_id = self.post.id
        self.commentsForm.alphabet = alpha
        commentService.addComment(self.commentsForm)
          .then(() => {
            self.finish()
            self.init()
          }).catch((errors) => {console.log(errors)})
      } else {
        this.btnLoading = false
        return false
      }
    },
    updatePostViews () {
      this.editPostViews.id = this.post.id
      this.editPostViews.views = this.post.views += 1
      postService.updatePost(this.editPostViews)
        .then(() => {}).catch((errors) => {console.log(errors)})
    },
    finish () {
      this.btnLoading = false
      this.postCommentVisible = false
      this.sheet = false
    }
  }
}
</script>


