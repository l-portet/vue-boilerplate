import Vue from 'vue';
import App from './App';
import router from './router';
import store from './vuex';
import api from './api';

Vue.config.productionTip = false;
Vue.prototype.$api = api;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  store,
  template: '<App/>'
});
