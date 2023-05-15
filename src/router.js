import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Home from "./components/HomeComponent.vue";
import Login from "./components/LoginComponent.vue";
import Archive from "./components/ArchiveComponent.vue";
import Help from "./components/HelpComponent.vue";
import Students from "./components/StudentsComponent.vue";
import PageNotFound from './components/PageNotFoundComponent.vue'

const routes = [
    { path: "/", redirect: "/login" },
    { path: "/login", component: Login },
    { path: "/home", component: Home },
    { path: "/archive", component: Archive },
    { path: "/help", component: Help },
    { path: "/students", component: Students },
    { path: "*", component: PageNotFound }
];

const router = new VueRouter({
    mode: "history",
    routes,
});

export default router;
