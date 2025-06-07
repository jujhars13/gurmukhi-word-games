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
  <b-card title="Animal Matching Game" class="mb-4">
    <b-card-text>
      <p class="lead">Match the Gurmukhi text with the correct animal name in English</p>

      <div v-if="selectedAnimal" class="text-center mb-4">
        <h2 class="display-4 gurmukhi-text">{{ selectedAnimal.gurmukhi }}</h2>

        <div class="mt-4">
          <b-img
            v-if="showAnswer"
            :src="selectedAnimal.image"
            alt="Animal image"
            fluid
            thumbnail
            class="mb-3"
            style="max-height: 200px"
          ></b-img>
        </div>

        <b-form @submit.prevent="checkAnswer" class="mt-4">
          <b-form-group label="Your answer:">
            <b-form-input
              v-model="userGuess"
              placeholder="Type the animal name in English"
              :disabled="showAnswer"
            ></b-form-input>
          </b-form-group>

          <div class="d-flex justify-content-between mt-3">
            <b-button type="submit" variant="primary" :disabled="!userGuess || showAnswer">
              Check Answer
            </b-button>

            <b-button variant="info" @click="revealAnswer" :disabled="showAnswer">
              Show Answer
            </b-button>

            <b-button variant="outline-secondary" @click="nextAnimal" :disabled="!showAnswer">
              Next Animal
            </b-button>
          </div>
        </b-form>

        <b-alert
          v-if="message"
          show
          :variant="
            message.includes('Correct')
              ? 'success'
              : message.includes('Incorrect')
                ? 'danger'
                : 'info'
          "
          class="mt-4"
        >
          {{ message }}
        </b-alert>
      </div>

      <div v-else class="text-center">
        <p>Game completed! Click the button below to play again.</p>
        <b-button variant="primary" @click="initializeGame">Start New Game</b-button>
      </div>
    </b-card-text>

    <template #footer>
      <div class="d-flex justify-content-between">
        <span>Score: {{ score }}/{{ totalAttempts }}</span>
        <span>Accuracy: {{ accuracy }}%</span>
      </div>
    </template>
  </b-card>
</template>

<style scoped>
.gurmukhi-text {
  font-size: 3rem;
  line-height: 1.5;
  font-weight: bold;
  color: #007bff;
}
</style>
