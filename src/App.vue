<template>
  <div id="app">
    <h1>To-Do List</h1>
    <TaskForm @addTask="addTask" />
    <TaskList :tasks="tasks" @deleteTask="deleteTask" />
  </div>
</template>

<script>
import TaskForm from './components/TaskForm.vue';
import TaskList from './components/TaskList.vue';
import './style.css'
export default {
  components: { TaskForm, TaskList },
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    addTask(newTask) {
      this.tasks.push({ id: Date.now(), title: newTask, completed: false });
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter(task => task.id !== id);
    },
  },
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
}
</style>
