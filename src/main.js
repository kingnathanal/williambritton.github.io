import Vue from 'vue'
import App from './App.vue'

/**
 * The following is from including the font awesome library for icons 
 * usage: https://www.npmjs.com/package/@fortawesome/vue-fontawesome
 */
import {
  library
} from '@fortawesome/fontawesome-svg-core'
import {
  faCamera,
  faEnvelope,
  faChevronDown
} from '@fortawesome/free-solid-svg-icons'
import {
  faFontAwesome,
  faGithub,
  faLinkedin,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'

import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

import router from './router'

library.add(faFontAwesome, faGithub, faLinkedin, faInstagram, faCamera, faEnvelope, faChevronDown)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')