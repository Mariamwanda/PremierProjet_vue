<template>
  <div id="app">
    <h1>Gestion des Contacts</h1>
    <Card>
      <ContactFormulaire @addContact="addContact" :contactToEdit="contactToEdit" />
    </Card>
    <Card>
      <ListContact 
        :contacts="contacts" 
        @deleteContact="deleteContact" 
        @editContact="editContact" 
      />
    </Card>

    <!-- Ajout de TodoList dans la vue -->
    <router-view></router-view>
  </div>
</template>

<script>
//import ContactFormulaire from './components/ContactFormulaire.vue';
//import ListContact from './components/ListContact.vue';

export default {
  name: 'App',
  components: {
    //ContactFormulaire,
    //ListContact,
    
  },
  data() {
    return {
      contacts: [],
      contactToEdit: null,
    };
  },
  methods: {
    addContact(contact) {
      if (this.contactToEdit) {
        const index = this.contacts.findIndex(c => c.id === this.contactToEdit.id);
        this.contacts[index] = { ...contact, id: this.contactToEdit.id };
        this.contactToEdit = null;
      } else {
        this.contacts.push({ ...contact, id: Date.now() });
      }
    },
    deleteContact(id) {
      this.contacts = this.contacts.filter(contact => contact.id !== id);
    },
    editContact(contact) {
      this.contactToEdit = contact;
    },
  },
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 20px;
}
</style>
