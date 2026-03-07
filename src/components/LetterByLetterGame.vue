<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import akharData from '@/data/akhar.json'

const lines = akharData.lines
const allLetters = computed(() =>
  lines.flatMap((line) => Object.entries(line).map(([gurmukhi, roman]) => ({ gurmukhi, roman }))),
)

const currentIndex = ref(0)

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'ArrowRight') {
    e.preventDefault()
    if (currentIndex.value < allLetters.value.length - 1) {
      currentIndex.value++
    }
  } else if (e.key === 'ArrowLeft') {
    e.preventDefault()
    if (currentIndex.value > 0) {
      currentIndex.value--
    }
  }
}

onMounted(() => window.addEventListener('keydown', handleKeydown))
onUnmounted(() => window.removeEventListener('keydown', handleKeydown))

// Compute flat index for each cell
const getFlatIndex = (rowIdx: number, colIdx: number) => rowIdx * 5 + colIdx
</script>

<template>
  <div class="letter-by-letter">
    <h1 class="text-center mb-3">Letter by Letter</h1>
    <p class="text-center text-muted mb-4">
      Use <kbd>&larr;</kbd> <kbd>&rarr;</kbd> arrow keys to navigate
    </p>

    <div class="grid-container">
      <template v-for="(line, rowIdx) in lines" :key="rowIdx">
        <div
          v-for="(roman, gurmukhi, colIdx) in line"
          :key="gurmukhi"
          class="letter-cell"
          :class="{ active: getFlatIndex(rowIdx, colIdx as number) === currentIndex }"
          @click="currentIndex = getFlatIndex(rowIdx, colIdx as number)"
        >
          <span class="gurmukhi">{{ gurmukhi }}</span>
          <span class="roman">{{ roman }}</span>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.75rem;
  max-width: 600px;
  margin: 0 auto;
}

.letter-cell {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 0.5rem;
  border-radius: 0.5rem;
  border: 2px solid #dee2e6;
  cursor: pointer;
  transition:
    box-shadow 0.2s,
    border-color 0.2s;
}

.letter-cell.active {
  border-color: #ffc107;
  box-shadow:
    0 0 20px rgba(255, 193, 7, 0.7),
    0 0 40px rgba(255, 193, 7, 0.4);
  background-color: #fff9e6;
}

.gurmukhi {
  font-size: 2.5rem;
  line-height: 1.2;
}

.roman {
  font-size: 0.85rem;
  color: #6c757d;
  margin-top: 0.25rem;
}

kbd {
  padding: 0.15rem 0.4rem;
  font-size: 0.85rem;
  border-radius: 0.25rem;
  border: 1px solid #adb5bd;
  background-color: #f8f9fa;
}
</style>
