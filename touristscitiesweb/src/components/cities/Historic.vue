<template>
<div class="card content-c">
  <div class="card-body">

      <div class="row text-centers">
          <div class="col-6">
              <h1>Historial de visitas</h1>
          </div>
          <div class="col-6">
            <input type="search" class="form-control form-control search"  placeholder="Buscar por nombre de Turista">
            <router-link :to="{ name: 'cities'}" class="btn btn-outline-primary">Volver</router-link>
          </div>
      </div>
      
<table class="table table-striped ">
    
  <thead>
    <tr>
      <th scope="col">Identificación Turista</th>
      <th scope="col">Nombre Turista</th>
      <th scope="col">Fecha</th>
      <th scope="col">Presupuesto</th>
      <th scope="col">Hotel</th>
      <th scope="col">Acciones</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>Mark</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td>Mark</td>
    </tr>
    
  </tbody>
</table>
  </div>
</div>
</template>

<script>
export default {
  name: 'Cities',
  data () {
    return {
      msg: 'Bienvenido a Historic'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content-c{
margin: 2rem;
height: 90vh;
}

.search{ 
width: 20rem;
float: left;
margin-right: 1rem;
}

</style>
