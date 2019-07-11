import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Play from './views/Play.vue'
import About from './views/About.vue'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/play',
            name: 'play',
            component: Play
        },
        {
            path: '/about',
            name: 'about',
            component: About
        }
    ]
})
