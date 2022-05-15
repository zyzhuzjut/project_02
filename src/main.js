import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  //把render函数指定的组件，渲染到HTML页面中
  render: h => h(App),
}).$mount('#app')
