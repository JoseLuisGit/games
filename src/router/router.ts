import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/Home.vue";
import TicTacToe from "../tictactoe/Main.vue";
const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/tictactoe",
    component: TicTacToe,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
