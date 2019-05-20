import VueRouter from 'vue-router'
import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Contacts from './pages/Contacts'

export default new VueRouter({
    routes: [
        {
            path: '',
            component: Home
        },
        {
            path: '/About',
            component: About
        },
        {
            path: '/Gallery',
            component: Gallery
        },
        {
            path: '/Contacts',
            component: Contacts
        }
    ],
    mode: 'history'
})