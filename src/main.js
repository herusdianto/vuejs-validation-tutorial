import Vue from 'vue'
import VeeValidate from 'vee-validate'
import { Validator } from 'vee-validate';
import messagesEn from './i18n/messages/en.js';
import attributesEn from './i18n/attributes/en.js';
import messagesId from './i18n/messages/id.js';
import attributesId from './i18n/attributes/id.js';

import App from './App'

Validator.extend('age', {
    getMessage: (field, [args]) => `The ${field} must be older than or equal to ${args}.`,
    validate: (value, [args]) => parseInt(value) >= parseInt(args)
});

Vue.use(VeeValidate, {
    locale: 'en',
    dictionary: { // dictionary object
        en: {  // locale key
            messages: messagesEn,   // English messages
            attributes: attributesEn  // English attributes
        },
        id: {   // locale key
            messages: messagesId,   // Indonesian messages
            attributes: attributesId  // Indonesian attributes
        }
    }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
