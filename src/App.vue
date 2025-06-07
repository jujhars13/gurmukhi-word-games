<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Gurmukhi Games</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink class="nav-link" to="/">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/about">About</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="row">
      <div class="col-md-12">
        <div class="card shadow-sm">
          <div class="card-body">
            <RouterView />
          </div>
        </div>
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
