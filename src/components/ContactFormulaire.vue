<template>
  <form @submit.prevent="handleSubmit" class="form">
    <input type="text" v-model="nom" placeholder="Nom" required />
    <input type="tel" v-model="phone" placeholder="Téléphone" required />
    <input type="email" v-model="email" placeholder="E-mail" required />
    <Button type="primary">{{ isEditing ? "Modifier" : "Ajouter" }}</Button>
    
  </form>
</template>

<script>
export default {
  props: ['contactToEdit'],
  
  data() {
    return {
      nom: '',
      phone: '',
      email: '',
    };
  },
  computed: {
    isEditing() {
      return !!this.contactToEdit;
    },
  },
  watch: {
    contactToEdit: {
      immediate: true,
      handler(newVal) {
        if (newVal) {
          this.nom = newVal.name;
          this.phone = newVal.phone;
          this.email = newVal.email;
        }
      },
    },
  },
  methods: {
    handleSubmit() {
      this.$emit('addContact', {
        name: this.nom,
        phone: this.phone,
        email: this.email,
      });
      this.nom = '';
      this.phone = '';
      this.email = '';
    },
  },
};
</script>

<style scoped>
.form {
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}
input {
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  font-size: 14px;
  margin:10px;
}
button{
background-color:#3b4d61;
padding:10px;
border-radius: 5px;
border:none;
color:#f3ca20;
}
</style>
