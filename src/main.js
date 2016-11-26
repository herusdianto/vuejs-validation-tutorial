import Vue from 'vue'
import VeeValidate from 'vee-validate'
import { Validator } from 'vee-validate';

import App from './App'

Validator.extend('age', {
    getMessage: (field, [args]) => `The ${field} must be older than or equal to ${args}.`,
    validate: (value, [args]) => parseInt(value) >= parseInt(args)
});

Vue.use(VeeValidate)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
