<script setup lang="ts">
// Importation du composant QuizForm
// Il sera utilisé dans la page pour afficher le formulaire de quiz
import QuizForm from '@/components/QuizForm.vue'
</script>

<template>
  <div class="container-fluid mt-3">
    <!-- container-fluid permet de s'étendre sur toute la largeur -->
    <div class="row justify-content-center">
      <!-- Centrer le contenu sur toutes les tailles d'écran -->
      <div class="col-12 col-md-8 col-lg-6">
        <!-- Ajuste la largeur selon la taille de l'écran -->
        <h1 class="text-center mb-4">Quiz</h1>
        <!-- Titre centré -->
        <QuizForm />
      </div>
    </div>
  </div>
</template>
