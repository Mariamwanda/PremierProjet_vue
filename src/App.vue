<template>
  <h1>Bienvenue sur mes Premiers Projets en VueJS...{{ rocketEmoji }}{{ rocketEmoji }}</h1>
  <div>
   
    <nav class="nav-bar">
      <router-link to="/tache" class="nav-link left-link">GestionContacts</router-link>
      <router-link to="/todo" class="nav-link right-link">ListeProduits</router-link>
    </nav>

    
    <router-view />
  </div>
</template>


<script>
export default {
  data() {
    return {
      rocketEmoji: "🚀",
      pencilEmoji: "✏️",
      checkEmoji: "✅",
    };
  },
};
</script>


<style>

/* Global Styling */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  background-color: #ffffff;
  color: #333;
}


h1 {
  text-align: center;
  font-weight: bold;
  color:  #3b4d61; 
  font-family: 'Arial', sans-serif;
  margin: 40px 0;
  font-size: 2rem;
}


.nav-bar {
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  background-color:white; 
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
}

.nav-link {
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  padding: 10px 15px;
  border-radius: 5px;
  transition: all 0.3s ease;
}


.left-link {
  color: #f3ca20;
  background-color: #3b4d61; 
}


.right-link {
  color: #000000;
  background-color: #f3ca20;
}

.nav-link:hover {
  opacity: 0.8;
  transform: scale(1.05);
}


.router-view {
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

 </style>
