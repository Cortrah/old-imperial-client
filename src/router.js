// import Vue from 'vue'
// import Router from 'vue-router'
// import Home from './views/Home.vue'

// import Register from './views/lobby/Register.vue';
// import SignIn from './views/lobby/SignIn.vue';
// import Forgot from './views/lobby/Forgot.vue';
// import Profile from './views/lobby/Profile.vue';

// import Host from './views/lobby/Host.vue';
// import TableTop from './views/lobby/TableTop.vue';

// Vue.use(Router);
//
// export default new Router({
//     routes: [
//         {
//             path: '/',
//             name: 'home',
//             component: Home
//         },
//         {
//             path: '/about',
//             name: 'about',
//             // route level code-splitting
//             // this generates a separate chunk (about.[hash].js) for this route
//             // which is lazy-loaded when the route is visited.
//             component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
//         },
//     ]
// })

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
