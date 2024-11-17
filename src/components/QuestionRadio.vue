<script setup lang="ts">
import { defineModel, defineProps, type PropType } from 'vue'

const model = defineModel<string | null>()
// Définition des propriétés (props) attendues par le composant
const props = defineProps({
  id: { type: String, required: true },
  text: { type: String, required: true },
  // Options disponibles pour le groupe de boutons radio
  // Chaque option est un objet contenant une valeur unique (value) et un texte descriptif (text)
  options: {
    type: Array as PropType<Array<{ value: string; text: string }>>,
    required: true,
  },
})
</script>

<template>
  {{ props.text }}
  <!-- Génère un ID unique basé sur l'ID du composant et la valeur de l'option -->
  <div v-for="option in props.options" :key="option.value" class="form-check">
    <input
      :id="`${props.id}-${option.value}`"
      v-model="model"
      class="form-check-input"
      type="radio"
      :name="props.id"
      :value="option.value"
    />
    <label class="form-check-label" :for="`${props.id}-${option.value}`">
      <!-- Texte à afficher à côté du bouton radio -->
      {{ option.text }}
    </label>
  </div>
</template>
