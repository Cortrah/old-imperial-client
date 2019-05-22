import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import VueDraggable from 'vue-draggable'


Vue.config.productionTip = false;

Vue.use(VueDraggable)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

