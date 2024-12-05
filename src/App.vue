<script setup lang="ts">
// - RouterLink : permet de créer des liens de navigation vers différentes routes
// - RouterView : permet de rendre le composant associé à la route active
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <!-- Barre de navigation principale -->
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/">
        <i class="bi bi-card-list"></i>
        Quiz
      </RouterLink>

      <!-- Bouton de menu pour les petits écrans -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbar"
        aria-controls="navbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Section de la barre de navigation qui se cache sur les petits écrans -->
      <div id="navbar" class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/trivia">
              <i class="bi bi-question"></i>
              Trivia
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/about">
              <i class="bi bi-info-square"></i>
              À propos
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <RouterView />
</template>
