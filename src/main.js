import Vue from 'vue';
import VueMasonry from 'vue-masonry-css';

import App from './App.vue';
import router from './router';

import './assets/scss/index.scss';

Vue.use(VueMasonry);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
