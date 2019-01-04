// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'
import ElementUI from 'element-ui'	//手动变红
import '../node_modules/element-ui/lib/theme-chalk/index.css'	//手动变红


Vue.use(ElementUI)
Vue.config.productionTip = false


/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  store,//加入store对象
  router,
  components: { App },
  template: '<App/>'
})
