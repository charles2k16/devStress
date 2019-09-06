require('./bootstrap');

window.Vue = require('vue');

import vuetify from './plugins/vuetify'
import router from './router'

Vue.component('main-component', require('./containers/MainComponent.vue').default);

const app = new Vue({
  el: '#app',
  vuetify,
  router
});
