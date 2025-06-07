<script setup lang="ts">
import { ref } from 'vue'

// Sample data for cards
const wordGames = ref([
  {
    id: 1,
    title: 'Word Match',
    description: 'Match English words with their Gurmukhi equivalents',
    difficulty: 'Easy',
    image: 'https://via.placeholder.com/300x200?text=Word+Match',
  },
  {
    id: 2,
    title: 'Word Puzzle',
    description: 'Solve word puzzles using Gurmukhi characters',
    difficulty: 'Medium',
    image: 'https://via.placeholder.com/300x200?text=Word+Puzzle',
  },
  {
    id: 3,
    title: 'Spelling Challenge',
    description: 'Test your Gurmukhi spelling skills',
    difficulty: 'Hard',
    image: 'https://via.placeholder.com/300x200?text=Spelling+Challenge',
  },
])
</script>

<template>
  <div class="home">
    <div class="p-5 mb-4 bg-light rounded-3">
      <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold">Gurmukhi Word Games</h1>
        <p class="col-md-8 fs-4">Learn and practice Gurmukhi through interactive word games</p>
        <p>Get started by selecting a game below</p>
        <RouterLink to="/games" class="btn btn-primary btn-lg">Play Games Now</RouterLink>
      </div>
    </div>

    <h2 class="mb-4">Available Games</h2>

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
            <RouterLink :to="`/games`" class="btn btn-outline-primary w-100">Play Game</RouterLink>
          </div>
        </div>
      </div>
    </div>

    <div class="alert alert-info mt-4">More games coming soon!</div>
  </div>
</template>
