<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="container">
    <b-navbar toggleable="lg" type="dark" variant="primary" class="mb-4">
      <b-navbar-brand href="#">Gurmukhi Word Games</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <RouterLink class="text-white text-decoration-none" to="/">Home</RouterLink>
          </b-nav-item>
          <b-nav-item>
            <RouterLink class="text-white text-decoration-none" to="/games">Games</RouterLink>
          </b-nav-item>
          <b-nav-item>
            <RouterLink class="text-white text-decoration-none" to="/about">About</RouterLink>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <div class="text-center mb-4">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
      <HelloWorld msg="Gurmukhi Word Games with Bootstrap" />
    </div>

    <div class="row">
      <div class="col-md-12">
        <b-card class="shadow-sm">
          <RouterView />
        </b-card>
      </div>
    </div>
  </div>
</template>

<style>
.logo {
  display: block;
  margin: 0 auto 1rem;
}

.router-link-active {
  font-weight: bold;
}
</style>
