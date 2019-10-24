import Vue from 'vue'
import axios from 'axios'
import config from '../config'

Vue.use(axios)

export default {
  name: 'postService',

  getPosts () {
    let url = config.POSTS_URL
    return axios.get(url)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  getPost (postId) {
    let url = config.POSTS_URL + '/' + postId
    return axios.get(url)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  updatePost (post) {
    let url = config.POSTS_URL + '/' + post.id
    return axios.put(url, post)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  }
}
