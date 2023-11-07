<template>
    <div class="container-fluid pt-5">
      <div class="row">
        <div class="col-md-12 mx-auto">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Liste des Utilisateurs</h5>
              <table class="table">
                <thead>
                  <tr>
                    <th>Nom d'utilisateur</th>
                    <th>Prénom</th>
                    <th>Nom</th>
                    <th>Email</th>
                    <th>Adresse</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="user in users" :key="user.id">
                    <td>{{ user.username }}</td>
                    <td>{{ user.first_name }}</td>
                    <td>{{ user.last_name }}</td>
                    <td>{{ user.mail }}</td>
                    <td>{{ user.adress }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        users: []
      };
    },
    beforeMount() {
      this.fetchUsers();
    },
    methods: {
      fetchUsers() {
        fetch('/api/users', { method: "GET" })
          .then(response => response.json())
          .then(data => {
            this.users = data;
          })
          .catch(error => {
            console.error('Erreur:', error);
          });
      }
    }
  };
  </script>
  
  <style>
    .table {
      margin-top: 20px;
    }
  </style>
  