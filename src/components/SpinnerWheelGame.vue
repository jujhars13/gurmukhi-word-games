<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import akharData from '@/data/akhar.json'

const letters = ref(akharData.letters)
const spinning = ref(false)
const selectedLetter = ref<{ letter: string; name: string } | null>(null)
const rotationDegree = ref(0)
const previousRotation = ref(0)

// Colors for the wheel segments
const segmentColors = [
  '#FF6B6B', // Red
  '#4ECDC4', // Teal
  '#FFD166', // Yellow
  '#6A0572', // Purple
  '#FF8811', // Orange
  '#1A936F', // Green
  '#3A86FF', // Blue
  '#F15BB5', // Pink
  '#8AC926', // Lime
  '#9A031E', // Dark red
]

// Computed property for the total number of letters
const totalLetters = computed(() => letters.value.length)

// Get color for a segment based on index
const getSegmentColor = (index: number) => {
  return segmentColors[index % segmentColors.length]
}

// Function to spin the wheel
const spinWheel = () => {
  if (spinning.value) return

  spinning.value = true
  selectedLetter.value = null

  // Calculate a random rotation (at least 3 full rotations + random position)
  const minRotation = 1080 // 3 full rotations
  const randomExtra = Math.floor(Math.random() * 360)
  const newRotation = minRotation + randomExtra

  // Add to previous rotation for continuous spinning
  rotationDegree.value = previousRotation.value + newRotation

  // After animation completes
  setTimeout(() => {
    previousRotation.value = rotationDegree.value % 360
    spinning.value = false

    // Calculate which letter was selected based on final position
    const letterIndex = Math.floor(
      (360 - (rotationDegree.value % 360)) / (360 / totalLetters.value),
    )
    selectedLetter.value = letters.value[letterIndex % totalLetters.value]
  }, 4000) // Animation duration
}
</script>

<template>
  <div class="spinner-wheel-container">
    <h1 class="text-2xl font-bold mb-4">Gurmukhi Letter Spinner</h1>

    <div class="flex flex-col items-center">
      <div class="relative w-72 h-72 md:w-[450px] md:h-[450px]">
        <!-- Wheel background -->
        <div class="absolute inset-0 rounded-full bg-gray-100 shadow-lg"></div>

        <!-- Wheel -->
        <div
          class="wheel-container absolute inset-0 rounded-full overflow-hidden"
          :class="{ spinning: spinning }"
          :style="{ transform: `rotate(${rotationDegree}deg)` }"
        >
          <!-- Segments -->
          <div
            v-for="(letter, index) in letters"
            :key="index"
            class="wheel-segment absolute origin-center"
            :style="{
              transform: `rotate(${index * (360 / totalLetters)}deg)`,
              'clip-path': `polygon(50% 50%, 50% 0%, ${50 + 50 * Math.cos((index + 1) * (360 / totalLetters) * (Math.PI / 180))}% ${50 + 50 * Math.sin((index + 1) * (360 / totalLetters) * (Math.PI / 180))}%, 50% 50%)`,
              background: getSegmentColor(index),
              width: '100%',
              height: '100%',
            }"
          >
            <!-- Letter positioning -->
            <div
              class="letter-container absolute font-bold text-white drop-shadow-md"
              :style="{
                transform: `rotate(${90 + 360 / totalLetters / 2}deg)`,
                top: '20%',
                left: '50%',
                fontSize: '2rem',
              }"
            >
              {{ letter.letter }}
            </div>
          </div>
        </div>

        <!-- Outer ring -->
        <div
          class="absolute inset-0 rounded-full border-8 border-gray-700 pointer-events-none"
        ></div>

        <!-- Center hub -->
        <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            class="w-12 h-12 bg-gray-800 rounded-full shadow-inner border-4 border-gray-600"
          ></div>
        </div>

        <!-- Pointer -->
        <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-2 z-10">
          <div class="w-8 h-12">
            <div
              class="w-0 h-0 mx-auto border-l-[15px] border-r-[15px] border-b-[30px] border-l-transparent border-r-transparent border-b-red-600"
            ></div>
            <div
              class="w-4 h-4 mx-auto -mt-1 bg-yellow-400 rounded-full border-2 border-red-600"
            ></div>
          </div>
        </div>
      </div>

      <button
        @click="spinWheel"
        class="mt-8 px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold rounded-full hover:from-purple-700 hover:to-blue-600 disabled:opacity-50 transform hover:scale-105 transition duration-200 shadow-lg"
        :disabled="spinning"
      >
        {{ spinning ? 'Spinning...' : 'Spin the Wheel' }}
      </button>

      <div v-if="selectedLetter" class="mt-8 text-center p-6 bg-white rounded-lg shadow-lg">
        <h2 class="text-xl font-bold mb-2">Selected Letter</h2>
        <div class="text-7xl font-bold my-4">{{ selectedLetter.letter }}</div>
        <div class="text-xl text-gray-700">{{ selectedLetter.name }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wheel-container {
  transition: transform 4s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.wheel-container.spinning {
  animation: spin-wobble 4s cubic-bezier(0.2, 0.8, 0.2, 1);
}

@keyframes spin-wobble {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(calc(var(--rotation-degree) * 0.2deg)) translateX(2px);
  }
  20% {
    transform: rotate(calc(var(--rotation-degree) * 0.4deg)) translateX(-2px);
  }
  30% {
    transform: rotate(calc(var(--rotation-degree) * 0.6deg)) translateX(2px);
  }
  40% {
    transform: rotate(calc(var(--rotation-degree) * 0.8deg)) translateX(-2px);
  }
  100% {
    transform: rotate(calc(var(--rotation-degree) * 1deg));
  }
}

.letter-container {
  transform-origin: center;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
}

/* Add some depth to the wheel */
.wheel-container {
  box-shadow:
    0 4px 20px rgba(0, 0, 0, 0.2),
    inset 0 2px 0 rgba(255, 255, 255, 0.2);
}
</style>
