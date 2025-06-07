<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greeting-container">
    <h1 class="text-primary">{{ msg }}</h1>
    <div class="mb-4">
      <h3 class="text-secondary">
        Built with
        <b-badge variant="success">Vite</b-badge> + <b-badge variant="success">Vue 3</b-badge> +
        <b-badge variant="success">Bootstrap</b-badge>
      </h3>
    </div>

    <b-button-group class="mb-4">
      <b-button variant="outline-primary" href="https://vite.dev/" target="_blank"
        >Vite Docs</b-button
      >
      <b-button variant="outline-success" href="https://vuejs.org/" target="_blank"
        >Vue 3 Docs</b-button
      >
      <b-button variant="outline-info" href="https://getbootstrap.com/" target="_blank"
        >Bootstrap Docs</b-button
      >
    </b-button-group>

    <b-alert show variant="info" class="mt-3">
      Ready to build awesome Gurmukhi Word Games!
    </b-alert>
  </div>
</template>

<style scoped>
.greeting-container {
  text-align: center;
  padding: 1rem;
}
</style>
