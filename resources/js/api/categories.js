import Vue from 'vue'
import axios from 'axios'
import config from '../config'

Vue.use(axios)

export default {
  name: 'categoryService',

  getCategories () {
    let url = config.CATEGORIES_URL
    return axios.get(url)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },

  getCategoryPosts (categoryId) {
    let url = config.CATEGORIES_URL  + '/' + categoryId + '/posts'
    return axios.get(url)
    .then((response) => Promise.resolve(response.data))
    .catch((error) => Promise.reject(error))
  }
}
