import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

// import Router from 'vue-router';
// import Contactus from '../components/Contactus.vue';
// import Services from '../components/Services.vue';

// Vue.use(Router);

Vue.config.productionTip = false

// const routers = [{
//         path: '/contactus',
//         name: 'contactus',
//         component: Contactus
//     },
//     {
//         path: '/services',
//         name: 'services',
//         component: Services
//     },
//     {
//         path: '/',
//         name: 'home',
//         component: Home
//     }
// ];

// const router = new VueRouter({
//     mode: 'history', routes: routers
// });

new Vue({

    vuetify,
    render: h => h(App)
        // ,
        // router
}).$mount('#app')