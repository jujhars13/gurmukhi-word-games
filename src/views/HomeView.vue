<script setup lang="ts">
import { ref } from 'vue'

// Sample data for cards
const wordGames = ref([
  {
    id: 1,
    title: 'Animal Match',
    path: '/games/animal-match',
    description: 'Match English animal names with their Gurmukhi transliterated equivalents',
    difficulty: 'Medium',
    image: '/images/gurmukhi-animal-match.png',
  },
  {
    id: 2,
    title: 'Random Line Game',
    path: '/games/random-line',
    description: 'Recognise Gurmukhi words from a randomised line',
    difficulty: 'Easy',
    image: '/images/gurmukhi-random-lines.png',
  },
])
</script>

<template>
  <div class="home">
    <div class="p-5 mb-4 bg-light rounded-3">
      <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold">Gurmukhi Games</h1>
        <p class="col-md-8 fs-4">Learn and practice Gurmukhi through interactive games</p>
      </div>
    </div>

    <div class="row">
      <div class="col-md-4 mb-4" v-for="game in wordGames" :key="game.id">
        <div class="card h-100">
          <img :src="game.image" class="card-img-top" :alt="game.title" />
          <div class="card-body">
            <h5 class="card-title">{{ game.title }}</h5>
            <p class="card-text">{{ game.description }}</p>
            <span
              :class="`badge ${
                game.difficulty === 'Easy'
                  ? 'bg-success'
                  : game.difficulty === 'Medium'
                    ? 'bg-warning'
                    : 'bg-danger'
              }`"
            >
              {{ game.difficulty }}
            </span>
          </div>
          <div class="card-footer">
            <RouterLink :to="game.path" class="btn btn-outline-primary w-100">Play Game</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
