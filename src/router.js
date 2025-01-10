import { createRouter, createWebHistory } from "vue-router";


import App from './App.vue';
import ContactFormulaire from './components/ContactFormulaire.vue';
import ListContact from './components/ListContact.vue';
import contact from './components/contact.vue';
import todoList from './components/todoList.vue';
import Taches from './components/Taches.vue';


const routes = [
  { path: "/", component: App, name: "App" }, 
  { path: "/tache", component: Taches, name: "Taches" }, 
  { path: "/todo", component: todoList, name: "todoListe" }, 
];

const router = createRouter({
  history: createWebHistory(), 
  routes,
});

export default router;
