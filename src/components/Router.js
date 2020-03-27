import Vue from 'vue';
import Router from 'vue-router';
import Contactus from '../components/Contactus';
import Services from '../components/Services';

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'home',
            component: App

        },
        {
            path: '/contactus',
            name: 'contactus',
            component: Contactus

        },
        {
            path: '/services',
            name: 'services',
            component: Services

        }
    ]
})