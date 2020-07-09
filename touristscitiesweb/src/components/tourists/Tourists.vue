<template>
<div class="card content-c">
  <div class="card-body">

      <div class="row text-centers">
          <div class="col-6">
              <h1>Lista de Turistas</h1>
          </div>
          <div class="col-6">
            <input type="search" class="form-control form-control search"  placeholder="Buscar por nombre">
            <router-link :to="{ name: 'tourists-create'}" class="btn btn-outline-primary">Añadir Turista</router-link>
            <router-link :to="{ name: 'main'}" class="btn btn-outline-primary">Volver</router-link>
          </div>
      </div>
      
<table class="table table-striped ">
    
  <thead>
    <tr>
      <th scope="col">Tipo de identificación</th>
      <th scope="col">Identificación</th>
      <th scope="col">Nombre</th>
      <th scope="col">Fecha de nacimiento</th>
      <th scope="col">Frecuencia de Viaje</th>
      <th scope="col">Presupuesto de Viaje</th>
      <th scope="col">Destino</th>
      <th scope="col">¿Usa tarjeta de crédito?</th>
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
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
    </tr>
    
  </tbody>
</table>
  </div>
</div>
</template>

<script>
export default {
  name: 'Tourists',
  data () {
    return {
      msg: 'Bienvenido a Tourists'
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
