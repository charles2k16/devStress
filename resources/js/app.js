require('./bootstrap');

window.Vue = require('vue');

import vuetify from './plugins/vuetify'
import router from './router'

Vue.component('main-container', require('./containers/MainContainer.vue').default);
Vue.component('admin-container', require('./containers/AdminContainer.vue').default);

const app = new Vue({
  el: '#app',
  vuetify,
  router
});