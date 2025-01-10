<template>
  <div>
    <h2>Liste des Contacts</h2>
    <input type="text" placeholder="Rechercher..." v-model="search" />
    <ul>
      <contact
        v-for="contact in filteredContacts" 
        :key="contact.id"
        :contact="contact" 
        @deleteContact="$emit('deleteContact', contact.id)" 
        @editContact="$emit('editContact', contact)" 
      />
    </ul>
  </div>
</template>

<script>
import contact from './contact.vue';

export default {
  components: { contact },
  props: ['contacts'],
  data() {
    return {
      search: '',
    };
  },
  computed: {
    filteredContacts() {
      return this.contacts.filter(contact =>
        contact.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
};
</script>

<style scoped>
input {
  margin: 10px 0;
  padding: 10px;
  width: 100%;
  max-width: 400px;
  font-size: 14px;
  border: 1px solid #ced4da;
  border-radius: 5px;
}
</style>
