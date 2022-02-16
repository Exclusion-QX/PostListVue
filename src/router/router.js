import Main from "@/pages/Main";
import {createRouter, createWebHistory} from "vue-router";
import PostsListPage from "@/pages/PostsListPage";
import PostPage from "@/pages/PostPage";
import PostsListWithStore from "@/pages/PostsListWithStore";
import PostPageCompositionApi from "@/pages/PostPageCompositionApi";


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
    },
    {
        path: '/store',
        component: PostsListWithStore
    },
    {
        path: '/composition',
        component: PostPageCompositionApi
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;