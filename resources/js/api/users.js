import Vue from 'vue'
import axios from 'axios'
import config from '../config'

Vue.use(axios)

export default {
  name: 'userService',

  getUsers () {
    let url = config.USERS_URL
    return axios.get(url)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  }
}
