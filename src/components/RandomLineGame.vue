<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import lineData from '@/data/akhar.json'

const randomLine = <any[]>[]
const lineNumber = ref(0)
const shuffledLetters = ref<any>(null)
const showAnswer = ref(false)
const message = ref('')

// Initialize game with random animals
onMounted(() => {
  initializeGame()
})

function initializeGame() {
  // take a random line from the dataset and then randomise the letters
  showAnswer.value = false
  lineNumber.value = Math.floor(Math.random() * lineData.lines.length)
  randomLine.value = lineData.lines[lineNumber.value]
  shuffledLetters.value = Object.keys(randomLine.value)
    .sort(() => 0.5 - Math.random())
    .join(' ')
}

function revealAnswer() {
  showAnswer.value = true
  message.value = `${Object.keys(randomLine.value).join(' ')}`
}
</script>

<template>
  <div class="randomiser-game">
    <h1 class="mb-4">Line Randomiser Game</h1>

    <div class="card mb-4">
      <div class="card-body">
        <h5 class="card-title">Randomised Random Line: {{ lineNumber + 1 }}</h5>
        <p class="card-text gurmukhi-text">{{ shuffledLetters }}</p>
        <button class="btn btn-primary" @click="revealAnswer">Correct Order</button>
        <p v-if="showAnswer" class="mt-3 gurmukhi-text green">{{ message }}</p>
      </div>
    </div>
    <div class="text-center">
      <button class="btn btn-secondary" @click="initializeGame">New Line</button>
    </div>
  </div>
</template>
