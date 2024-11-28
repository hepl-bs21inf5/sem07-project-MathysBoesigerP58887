<script setup lang="ts">
import { ref, watch, defineModel, defineProps, type PropType } from 'vue'

const model = defineModel<boolean>()
// Définition des propriétés (props) attendues par le composant
const props = defineProps({
  id: { type: String, required: true },
  text: { type: String, required: true },
  answer: { type: String, required: true }, //réponse à la question
  // Options disponibles pour le groupe de boutons radio
  // Chaque option est un objet contenant une valeur unique (value) et un texte descriptif (text)
  options: {
    type: Array as PropType<Array<{ value: string; text: string }>>,
    required: true,
  },
})

const value = ref<string | null>(null)

watch(
  value,
  (newValue) => {
    model.value = newValue === props.answer
  },
  { immediate: true }, //si on met false, ça crée une liste vide par défault
)
</script>

<template>
  {{ props.text }}
  <!-- ID basé sur l'ID du composant et la valeur de l'option -->
  <div v-for="option in props.options" :key="option.value" class="form-check">
    <input
      :id="`${props.id}-${option.value}`"
      v-model="value"
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
