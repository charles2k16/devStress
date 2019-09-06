function getApiUrl () {
  let hn = window.location.hostname
  if (hn === 'localhost') {
    return 'http://127.0.0.1:8000/api/'
  } else if (hn === 'devstress.dev') {
    return 'https://devstress.dev/api/'
  }
  return 'http://127.0.0.1:8000/api/'
}

const API_URL = getApiUrl();

export default {
  USERS_URL: API_URL + 'users',
  POSTS_URL: API_URL + 'posts',
  CATEGORIES_URL: API_URL + 'categories'
}