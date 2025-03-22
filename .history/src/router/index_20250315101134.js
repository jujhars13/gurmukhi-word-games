import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import RandomWords from '../components/RandomWords.vue';

Vue.use(VueRouter);

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