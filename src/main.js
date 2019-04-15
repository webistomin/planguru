import Vue from 'vue';

import Vuelidate from 'vuelidate';
import { Modal } from 'ant-design-vue';
import 'ant-design-vue/lib/modal/style/css';

import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.use(Vuelidate);
Vue.use(Modal);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
