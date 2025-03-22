<template>
  <div>
    <h1>Random Words</h1>
    <ul>
      <li v-for="(word, index) in randomWords" :key="index">
        {{ word.english }} - {{ word.gurmukhi }}
      </li>
    </ul>
  </div>
</template>

<script>
import data from '../data.json';

export default {
  data() {
    return {
      randomWords: []
    };
  },
  created() {
    this.getRandomWords();
  },
  methods: {
    getRandomWords() {
      const shuffled = data.sort(() => 0.5 - Math.random());
      this.randomWords = shuffled.slice(0, 5).map(item => {
        const english = Object.keys(item)[0];
        return { english, gurmukhi: item[english] };
      });
    }
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>