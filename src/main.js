import Vue from 'vue';

import Vuelidate from 'vuelidate';
import { Modal, DatePicker, Slider } from 'ant-design-vue';
import 'ant-design-vue/lib/modal/style/css';
import 'ant-design-vue/lib/date-picker/style/css';
import 'ant-design-vue/lib/slider/style/css';

import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.use(Vuelidate);

Vue.component('Modal', Modal);
Vue.component('DatePicker', DatePicker);
Vue.component('Slider', Slider);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
