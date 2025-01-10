import { createRouter, createWebHistory } from 'vue-router';
import todoList from '../components/todoList.vue';
import process from 'process';


const routes = [
  {
    path: '/todoList',
    name: 'todoList',
    component: todoList
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
