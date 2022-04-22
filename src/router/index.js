import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
import Login from "@/components/user-login.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/user-login",
    name: "Login",
    component: Login,
  }
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
