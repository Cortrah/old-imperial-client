import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import VueDraggable from 'vue-draggable'
import { VueContext } from 'vue-context'

// import * as _ from "lodash";
// import joint from '../../node_modules/jointjs';
// import {g as g} from "jointjs";
// import {Vectorizer as V} from 'jointjs';

//Object.defineProperty(Vue.prototype, $joint,  {value: joint});
//Object.defineProperty(Vue.prototype, v,  {value: v});
//Object.defineProperty(Vue.prototype, g,  {value: g});


Vue.config.productionTip = false;

Vue.use(VueDraggable);
Vue.use(VueContext);

let appView = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

store.dispatch('onInit', appView);

