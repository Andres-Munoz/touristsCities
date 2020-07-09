<template>
  <div class="content hv-100">
    <div class="row  text-center h-100">
      <div class="col-6 img" :style="{ backgroundImage: 'url(' + require('@/assets/img/tourists.jpg') + ')' }">
        
        <router-link :to="{ name: 'tourists'}" class="text rounded-circle">Turistas</router-link>
      </div>
      <div class="col-6 img " :style="{ backgroundImage: 'url(' + require('@/assets/img/cities.jpg') + ')' }">
        <router-link :to="{ name: 'cities'}" class="text rounded-circle">Ciudades</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      msg: 'Bienvenido a TouristsCities'
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
.text{
  position: absolute;
  top: 45%;
  color: #30425a;
  font-size: 2rem;
  font-weight: 900;
  height: 10rem;
  background: #ffffff80;
  width: 10rem;
  padding-top: 3.5rem;
  right: 39%;
}
a:hover{
  color: #000000 !important;
  text-decoration: none;
}
</style>
