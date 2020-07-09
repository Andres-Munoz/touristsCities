import Vue from 'vue';
import Router from 'vue-router';
import Main from "@/components/main/Main.vue";
import Tourists from '@/components/tourists/Tourists.vue';
import TouristsForm from '@/components/tourists/Form.vue';
import TouristsHistoric from '@/components/tourists/Historic.vue';
import Cities from '@/components/cities/Cities.vue';
import CitiesForm from '@/components/cities/Form.vue';
import CitiesHistoric from '@/components/cities/Historic.vue';
import Assign from '@/components/assign/Assign.vue';


Vue.use(Router);

const routes = [
    {
      path: "/",
      name: "main",
      component: Main
    },
    {
      path: "/tourists",
      name: "tourists",
      component: Tourists
    },
    {
      path: "/tourists/create",
      name: "tourists-create",
      component: TouristsForm
    },
    {
        path: "/tourists/historic",
        name: "tourists-historic",
        component: TouristsHistoric
    },
    {
      path: "/cities",
      name: "cities",
      component: Cities
    },
    {
      path: "/cities/create",
      name: "cities-create",
      component: CitiesForm
    },
    {
        path: "/cities/historic",
        name: "cities-historic",
        component: CitiesHistoric
    },
    {
      path: "/assign",
      name: "assign",
      component: Assign
    }
  ];

const router = new Router({
    mode: "history",
    routes
  });

export default router;