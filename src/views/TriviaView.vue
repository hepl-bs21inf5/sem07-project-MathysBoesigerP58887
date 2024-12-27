<script setup lang="ts">
import QuizTrivia from '@/components/QuizTrivia.vue'
</script>

<template>
  <div class="container mt-3">
    <h1>Trivia</h1>
    <QuizTrivia />
    <!-- Source d'où proviennent les questions -->
    Source :
    <!-- Lien vers la base de données utilisée, s'ouvre dans un nouvel onglet grâce à target="_blank" -->
    <a href="https://opentdb.com/" target="_blank">Open Trivia Database</a>
  </div>
</template>
