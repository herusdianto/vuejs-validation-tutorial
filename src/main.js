import Vue from 'vue'
import VeeValidate from 'vee-validate'

import App from './App'

Vue.use(VeeValidate)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
