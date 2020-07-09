<template>
  <div class="content hv-100">
    <div class="row h-100">
      <div class="col-6">        
        <div class="card content-c">
            <div class="card-body">
            <h3 class="card-title text-center">Añadir Ciudad</h3>
            <form>
                <div class="form-group">
                    <label for="id">Id</label>
                    <input type="number" class="form-control" id="id">
                </div>
                <div class="form-group">
                    <label for="name">Nombre</label>
                    <input type="text" class="form-control" id="name">
                </div>
                <div class="form-group">
                    <label for="numberH">Cantidad de habitantes</label>
                    <input type="number" class="form-control" id="numberH">
                </div>          
                <div class="buttons">
                    <router-link :to="{ name: 'cities'}" class="btn btn-outline-primary">Volver</router-link>
                    <router-link :to="{ name: ''}" class="btn btn-outline-primary">Guadar</router-link>
                </div>
            </form>
        </div>
    </div>
    </div>
      <div class="col-6 img " :style="{ backgroundImage: 'url(' + require('@/assets/img/cities.jpg') + ')' }">    
      </div>
    </div>
</div>

</template>

<script>
export default {
  name: 'Create',
  data () {
    return {
      msg: 'Bienvenido a cities-create'
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
  margin: 8rem 5rem 0rem 5rem;  
  padding: 1rem 5rem;
}
.buttons{
  margin: 0rem 4rem;
}
</style>
