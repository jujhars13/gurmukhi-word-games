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
    <b-jumbotron
      header="Gurmukhi Word Games"
      lead="Learn and practice Gurmukhi through interactive word games"
      bg-variant="light"
      class="mb-4"
    >
      <p>Get started by selecting a game below</p>
      <b-button variant="primary" to="/games">Play Games Now</b-button>
    </b-jumbotron>

    <h2 class="mb-4">Available Games</h2>

    <b-row>
      <b-col v-for="game in wordGames" :key="game.id" md="4" class="mb-4">
        <b-card :title="game.title" class="h-100">
          <template #image>
            <b-img :src="game.image" alt="Game image" fluid></b-img>
          </template>
          <b-card-text>
            {{ game.description }}
          </b-card-text>

          <b-badge
            :variant="
              game.difficulty === 'Easy'
                ? 'success'
                : game.difficulty === 'Medium'
                  ? 'warning'
                  : 'danger'
            "
          >
            {{ game.difficulty }}
          </b-badge>

          <template #footer>
            <b-button :href="`#game-${game.id}`" variant="outline-primary" block
              >Play Game</b-button
            >
          </template>
        </b-card>
      </b-col>
    </b-row>

    <b-alert show variant="info" class="mt-4"> More games coming soon! </b-alert>
  </div>
</template>
