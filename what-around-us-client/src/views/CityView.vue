<template>
    <div class="container-fluid pt-5">
      <div class="row">
        <div class="col-md-12 mx-auto">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Liste des Villes</h5>
              <table class="table">
                <thead>
                  <tr>
                    <th>Nom</th>
                    <th>Pays</th>
                    <th>Note</th>
                    <th>Longitude</th>
                    <th>Latitude</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="city in cities" :key="city.id">
                    <td>{{ city.name }}</td>
                    <td>{{ city.country }}</td>
                    <td>{{ city.grade.toFixed(2) }}</td>
                    <td>{{ city.longitude.toFixed(5) }}</td>
                    <td>{{ city.latitude.toFixed(5) }}</td>
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
        cities: []
      };
    },
    beforeMount() {
      this.fetchCities();
    },
    methods: {
      fetchCities() {
        fetch('/api/cities', { method: "GET" })
          .then(response => response.json())
          .then(data => {
            this.cities = data;
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
  