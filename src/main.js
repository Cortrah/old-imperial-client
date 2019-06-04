import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import VueDraggable from 'vue-draggable'

//import joint from 'jointjs';
//import joint from "jointjs"
//import v from "jointjs"
//import g from "jointjs"

//Object.defineProperty(Vue.prototype, $joint,  {value: joint});
//Object.defineProperty(Vue.prototype, v,  {value: v});
//Object.defineProperty(Vue.prototype, g,  {value: g});


Vue.config.productionTip = false;

Vue.use(VueDraggable)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

