import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Personal from '@/views/Personal';
import Symptoms from '@/views/Symptoms';
import BloodPressure from '@/views/BloodPressure';
import EndSuccess from '@/views/EndSuccess';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/personal',
      name: 'Personal',
      component: Personal
    },
    {
      path: '/symptoms',
      name: 'Symptoms',
      component: Symptoms
    },
    {
      path: '/blood-pressure',
      name: 'BloodPressure',
      component: BloodPressure
    },
    {
      path: '/end-success',
      name: 'EndSuccess',
      component: EndSuccess
    }
  ]
});
