import Main from "@/pages/Main";
import {createRouter, createWebHistory} from "vue-router";
import PostsListPage from "@/pages/PostsListPage";
import PostPage from "@/pages/PostPage";


const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: PostsListPage
    },
    {
        path: '/posts/:id',
        component: PostPage
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;