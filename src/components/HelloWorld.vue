<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greeting-container">
    <h1 class="text-primary">{{ msg }}</h1>
  </div>
</template>

<style scoped>
.greeting-container {
  text-align: center;
  padding: 1rem;
}
</style>
