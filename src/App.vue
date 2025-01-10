<template>
  <div>
    <h1>Ma ToDo</h1>
    <ul class="todo-grid">
      <!-- Affichage des tâches -->
      <li v-for="todo in todos" :key="todo.id" class="todo-item">
        <img :src="todo.image" alt="Product image" />
        <div>
          <h5>{{ todo.title }}</h5>
          <p>{{ todo.description }}</p>
          <p>Prix: ${{ todo.price }}</p>
        </div>
      </li>
    </ul>

    <!-- Indicateur de chargement -->
    <div v-if="isLoading" class="loading">Chargement...</div>

    <!-- Message d'erreur -->
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
    };
  },
  methods: {
    // Méthode pour récupérer les données depuis l'API
    async getTodos() {
      this.isLoading = true; // Activer le chargement
      this.error = null; // Réinitialiser les erreurs
      try {
        const response = await axios.get("https://fakestoreapi.com/products"); // Exemple d'API
        this.todos = response.data.slice(0, 25).map(todo => ({
          ...todo,
           // Ajouter une image unique pour chaque tâche
        }));
      } catch (err) {
        this.error = "Une erreur est survenue lors du chargement des tâches.";
      } finally {
        this.isLoading = false; // Désactiver le chargement
      }
    },
  },
  mounted() {
    this.getTodos(); // Appeler la méthode lors du montage du composant
  },
};
</script>

<style>
/* Style des erreurs */
.error {
  color: red;
  margin-top: 10px;
  text-align: center;
}

/* Style de chargement */
.loading {
  text-align: center;
  font-weight: bold;
  margin-top: 10px;
}

/* Grille pour les tâches */
body {
  background: #e8f5e9; /* Fond vert pâle */
}
h1{
  color: #333;
}
.todo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Colonnes adaptatives */
  gap: 20px; /* Espacement entre les éléments */
  padding: 0;
  list-style-type: none;
  margin: 20px 0;
}

/* Style des éléments de la grille */
.todo-item {
  background: #ffffff;
  border: 1px solid #007BFF;
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
</style>
