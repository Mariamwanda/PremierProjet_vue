<template>
  <li>
    <span>{{ contact.name }}  {{ contact.phone }}   {{ contact.email }}</span>
    <button class="modif" @click="$emit('editContact', contact)">Modifier</button>
    <button class="supprime" @click="$emit('deleteContact', contact.id)">Supprimer</button>
  </li>
</template>

<script>
export default {
  props: ['contact'],
};
</script>
<style>
.modif {
  background-color: blue;
  padding:10px;
  border:none;
  border-radius:5px;
  margin:10px;
  color:white;
}
.supprime {
  color:white;
  background-color: red;
  padding:10px;
  border:none;
  border-radius:5px;
}
</style>
