import Vue from 'vue'
import App from './App.vue'

import { BootstrapVue } from 'bootstrap-vue'

Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import VueAgile from 'vue-agile'

Vue.use(VueAgile)

import VueMask from 'v-mask'

Vue.use(VueMask);

import 'animate.css'
import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
import VueFullPage from 'vue-fullpage.js'

Vue.use(VueFullPage);

import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

Vue.use(CoolLightBox)

import VueNumber from 'vue-number-animation'

Vue.use(VueNumber)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
