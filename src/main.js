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
  faCamera
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

library.add(faFontAwesome, faGithub, faLinkedin, faInstagram, faCamera)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')