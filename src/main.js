// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
// import Home from './components/HelloFromVux'
// import Hello from './components/Hello'

Vue.use(VueRouter)




const routes = [{
	path: '/',
	component: resolve => require(['./components/menu'], resolve),
	redirect: '/home',
	children: [
		{
			path: '/home',
			component: resolve => require(['./components/HelloFromVux'], resolve)
		},
		{
			path: '/hello',
			component: resolve => require(['./components/Hello'], resolve)	
		}
	]
}]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
