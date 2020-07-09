<template>
  <div class="content hv-100">
    <div class="row h-100">
      <div class="col-6">        
        <div class="card content-c">
          <div class="card-body">
            <h3 class="card-title text-center">Añadir Turista</h3>
            <form>
              <div class="form-group">
                <label for="typeId">Tipo de identificación</label>
                <select class="form-control" id="typeId">
                  <option>Cédula de ciudadanía</option>
                  <option>Cédula de extranjería</option>
                  <option>Tarjeta de identidad</option>
                  <option>Pasaporte</option>
                </select>
              </div>
              <div class="form-group">
                <label for="id">Identificación</label>
                <input type="number" class="form-control" id="id">
              </div>
              <div class="form-group">
                <label for="name">Nombre</label>
                <input type="text" class="form-control" id="name">
              </div>
              <div class="form-group">
                <label for="date">Fecha de nacimiento</label>
                <input type="date" class="form-control" id="date">
              </div>
              <div class="form-group">
                <label for="creditcard">¿Usa tarjeta de crédito?</label>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="creditcard" id="option1" value="option1">
                  <label class="form-check-label" for="option1">Si</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="creditcard" id="option2" value="option2">
                  <label class="form-check-label" for="option2">No</label>
                </div>
              </div>
            <div class="buttons">
              <router-link :to="{ name: 'tourists'}" class="btn btn-outline-primary">Volver</router-link>
              <router-link :to="{ name: ''}" class="btn btn-outline-primary">Guadar</router-link>
            </div>
          </form>
        </div>
    </div>
    </div>
      <div class="col-6 img " :style="{ backgroundImage: 'url(' + require('@/assets/img/tourists.jpg') + ')' }">    
      </div>
    </div>
</div>

</template>

<script>
export default {
  name: 'Create',
  data () {
    return {
      msg: 'Bienvenido a tourists-create'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row{
  margin-right: 0px !important;
  margin-left: 0px !important;
}
.hv-100{
  height: 100vh !important;
}
.img{
  height: 100%;
  background-size: cover;
}

.content-c{
  margin: 3rem 5rem 0rem 5rem;  
  padding: 1rem 5rem;
}
.buttons{
  margin: 0rem 4rem;
}
</style>

