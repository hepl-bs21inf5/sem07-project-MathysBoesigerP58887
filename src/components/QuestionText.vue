<script setup lang="ts">
import { defineModel, defineProps } from 'vue'

const model = defineModel<string | null>()
const props = defineProps({
  // Propriété optionnelle `placeholder` pour définir un texte par défaut dans le champ de saisie
  placeholder: {
    type: String,
    default: 'Veuillez entrer un nombre', // Valeur par défaut si aucune valeur n'est fournie
  },
})
</script>

<template>
  <label for="exampleFormControlInput" class="form-label"> Combien de pattes a un chat ? </label>
  <input
    id="exampleFormControlInput"
    v-model="model"
    class="form-control"
    :placeholder="props.placeholder"
  />
  <!-- Texte indicatif dans le champ, configurable via la prop placeholder -->
</template>
