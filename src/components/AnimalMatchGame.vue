<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import animalsData from '@/data/animals.json'

// Game state
const animals = ref<any[]>([])
const selectedAnimal = ref<any>(null)
const userGuess = ref('')
const message = ref('')
const score = ref(0)
const totalAttempts = ref(0)
const showAnswer = ref(false)

// Initialize game with random animals
onMounted(() => {
  initializeGame()
})

function initializeGame() {
  // Take 10 random animals from the dataset
  animals.value = [...animalsData].sort(() => 0.5 - Math.random()).slice(0, 10)

  // Start with the first animal
  nextAnimal()
}

function nextAnimal() {
  if (animals.value.length === 0) {
    // Game completed
    selectedAnimal.value = null
    message.value = `Game completed! Your score: ${score.value}/${totalAttempts.value}`
    return
  }

  // Get a random animal from the list
  const randomIndex = Math.floor(Math.random() * animals.value.length)
  selectedAnimal.value = animals.value.splice(randomIndex, 1)[0]

  userGuess.value = ''
  showAnswer.value = false
}

function checkAnswer() {
  totalAttempts.value++

  if (!selectedAnimal.value) return

  const userGuessLower = userGuess.value.toLowerCase().trim()
  const correctAnswerLower = selectedAnimal.value.animal.toLowerCase()

  if (userGuessLower === correctAnswerLower) {
    message.value = 'Correct!'
    score.value++
    setTimeout(() => {
      nextAnimal()
      message.value = ''
    }, 1500)
  } else {
    message.value = 'Incorrect! Try again or view the answer.'
  }
}

function revealAnswer() {
  showAnswer.value = true
  message.value = `The answer is "${selectedAnimal.value.animal}"`
}

const accuracy = computed(() => {
  if (totalAttempts.value === 0) return 0
  return Math.round((score.value / totalAttempts.value) * 100)
})
</script>

<template>
  <div class="card mb-4">
    <div class="card-header">
      <h2>Animal Matching Game</h2>
    </div>
    <div class="card-body">
      <p class="lead">Match the Gurmukhi text with the correct animal name in English</p>

      <div v-if="selectedAnimal" class="text-center mb-4">
        <h2 class="display-4 gurmukhi-text">{{ selectedAnimal.gurmukhi }}</h2>

        <div class="mt-4">
          <img
            v-if="showAnswer"
            :src="selectedAnimal.image"
            :alt="selectedAnimal.animal"
            class="img-fluid img-thumbnail mb-3"
            style="max-height: 200px"
          />
        </div>

        <form @submit.prevent="checkAnswer" class="mt-4">
          <div class="mb-3">
            <label for="animalGuess" class="form-label">Your answer:</label>
            <input
              id="animalGuess"
              v-model="userGuess"
              type="text"
              class="form-control"
              placeholder="Type the animal name in English"
              :disabled="showAnswer"
            />
          </div>

          <div class="d-flex justify-content-between mt-3">
            <button type="submit" class="btn btn-primary" :disabled="!userGuess || showAnswer">
              Check Answer
            </button>

            <button type="button" class="btn btn-info" @click="revealAnswer" :disabled="showAnswer">
              Show Answer
            </button>

            <button
              type="button"
              class="btn btn-outline-secondary"
              @click="nextAnimal"
              :disabled="!showAnswer"
            >
              Next Animal
            </button>
          </div>
        </form>

        <div
          v-if="message"
          class="alert mt-4"
          :class="{
            'alert-success': message.includes('Correct'),
            'alert-danger': message.includes('Incorrect'),
            'alert-info': !message.includes('Correct') && !message.includes('Incorrect'),
          }"
        >
          {{ message }}
        </div>
      </div>

      <div v-else class="text-center">
        <p>Game completed! Click the button below to play again.</p>
        <button class="btn btn-primary" @click="initializeGame">Start New Game</button>
      </div>
    </div>

    <div class="card-footer">
      <div class="d-flex justify-content-between">
        <span>Score: {{ score }}/{{ totalAttempts }}</span>
        <span>Accuracy: {{ accuracy }}%</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gurmukhi-text {
  font-size: 3rem;
  line-height: 1.5;
  font-weight: bold;
  color: #007bff;
}
</style>
