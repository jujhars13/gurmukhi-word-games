import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import RandomWords from '../components/RandomWords.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/random-words',
      name: 'RandomWords',
      component: RandomWords
    }
  ]
});