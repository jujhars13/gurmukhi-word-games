<script setup lang="ts">
import AnimalMatchGame from '@/components/AnimalMatchGame.vue'
</script>

<template>
  <div class="games">
    <h1 class="mb-4">Games</h1>

    <AnimalMatchGame />

    <b-card title="More Games Coming Soon" class="mb-4">
      <b-card-text>
        <p>We're working on adding more interactive games to help you learn Gurmukhi.</p>
        <ul>
          <li>Word puzzles</li>
          <li>Spelling challenges</li>
          <li>Memory games</li>
          <li>Typing practice</li>
        </ul>
      </b-card-text>
    </b-card>
  </div>
</template>
