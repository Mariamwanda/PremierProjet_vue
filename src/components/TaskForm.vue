<template>
  <form @submit.prevent="submitForm">
    <input type="text" v-model="newTask" placeholder="Nouvelle tâche" />
    <button type="submit">Ajouter</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      newTask: '',
    };
  },
  methods: {
    submitForm() {
      if (this.newTask.trim()) {
        this.$emit('addTask', this.newTask);
        this.newTask = '';
      }
    },
  },
};
</script>

<style>
form {
  margin-bottom: 20px;
}
input {
  padding: 10px;
  margin-right: 10px;
}
button {
  padding: 10px;
}
</style>
