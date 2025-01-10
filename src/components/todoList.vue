<template>
  <div>
    <h1>Liste des Produits{{ checkEmoji}}{{ checkEmoji}}</h1>
    <ul class="todo-grid">
     
      <li v-for="todo in todos" :key="todo.id" class="todo-item">
        <img :src="todo.image" alt="Todo Image" />
        <div>
          <h5>{{ todo.title }}</h5>
          <p>{{ todo.description }}</p>
          <p><span>Prix:</span> ${{ todo.price }}</p>
        </div>
      </li>
    </ul>

   
    <div v-if="isLoading" class="loading">Patientez...</div>

    <div v-if="error" class="error">{{ error }}</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "TodoListe",
  data() {
    return {
      todos: [],
      isLoading: false,
      error: null,
      checkEmoji: "✅",
    };
  },
  methods: {
    // c'est ici j'ai récuperer les données
    async getTodos() {
      this.isLoading = true; // pour attendre que ça charge
      this.error = null; 
      try {
        const response = await axios.get("https://fakestoreapi.com/products"); // voici l'Api là
        this.todos = response.data.slice(0, 25).map(todo => ({
          ...todo,
           
        }));
      } catch (err) {
        this.error = "Une erreur est survenue lors du chargement des tâches.";
      } finally {
        this.isLoading = false; 
      }
    },
  },
  mounted() {
    this.getTodos();
  },
};
</script>
<style scoped>
.error {
  color: red;
  margin-top: 10px;
  text-align: center;
}


.loading {
  text-align: center;
  font-weight: bold;
  margin-top: 10px;
}
 

h1{
  color: #3b4d61;
  text-align:center;
}
.todo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); 
  gap: 20px;
  padding: 0;
  list-style-type: none;
  margin: 20px 0;
}

.todo-item {
  background: #ffffff;
  border: 1px solid #3b4d61;
  border-radius: 8px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  color: #455a64;
}

.todo-item img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 10px;
}

.todo-item h5 {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
}

.todo-item p {
  font-size: 14px;
  color: #666;
  margin-top: 7px;
}

.todo-item span{
  color:#f3ca20;
}
</style>
