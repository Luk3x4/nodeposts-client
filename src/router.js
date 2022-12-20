import { createWebHistory, createRouter } from "vue-router";
import Home from './pages/HomeComponent.vue'
import Create from './pages/CreatePost.vue'
import SinglePost from './pages/SinglePost.vue'

const routes = [
    {
        name: "Home",
        component: Home,
        path: '/'
    },
    {
        name: "Create",
        component: Create,
        path: '/create'
    },
    {
        name: "SinglePost",
        component: SinglePost,
        path: '/post/:id'
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to){
        if(to.hash){
            return{
                el: to.hash,
                top: 70,
                // behavior: 'smooth'
            }
        }else{
            return{
                top: 0
            }
        }
    }
})

export default router