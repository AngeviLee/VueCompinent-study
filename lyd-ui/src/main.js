import Vue from 'vue'
import App from './App.vue'
import LydButton from './components/button.vue'
import './assets/font/iconfont.css'
import LydDialog from './components/dialog.vue'
import LydInput from './components/input.vue'
import LydSwitch from './components/switch.vue'

Vue.config.productionTip = false
Vue.component(LydButton.name, LydButton)
Vue.component(LydDialog.name, LydDialog)
Vue.component(LydInput.name, LydInput)
Vue.component(LydSwitch.name, LydSwitch)

new Vue({
  render: h => h(App)
}).$mount('#app')
