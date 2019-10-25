import Vue from 'vue'
import axios from 'axios'
import config from '../config'

Vue.use(axios)

export default {
  name: 'commentService',

  getComments () {
    let url = config.COMMENTS_URL
    return axios.get(url)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },

  addComment (comment) {
    let url = config.COMMENTS_URL
    return axios.post(url, comment)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  }
}