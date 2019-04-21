import Vue from 'vue';

import { SimpleSVG } from 'vue-simple-svg';
import VueTextareaAutosize from 'vue-textarea-autosize';
import Vuelidate from 'vuelidate';
import VModal from 'vue-js-modal';
import Datepicker from 'vuejs-datepicker';
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css';

import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.use(Vuelidate);
Vue.use(VueTextareaAutosize);
Vue.use(VModal, { componentName: 'Modal' });
Vue.component('RangeSlider', VueSlider);
Vue.component('Datepicker', Datepicker);
Vue.component('v-select', vSelect);
Vue.component('simple-svg', SimpleSVG);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
