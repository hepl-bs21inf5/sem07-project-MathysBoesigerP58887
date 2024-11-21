<script setup lang="ts">
import { ref, watch, defineModel, defineProps } from 'vue'

const model = defineModel<boolean>()
const props = defineProps({
  id: { type: String, required: true },
  text: { type: String, required: true },
  answer: { type: String, required: true }, //réponse à la question
  // Propriété optionnelle `placeholder` pour définir un texte par défaut dans le champ de saisie
  placeholder: {
    type: String,
    default: 'Veuillez entrer un nombre', // Valeur par défaut si aucune valeur n'est fournie
  },
})
const value = ref<string | null>(null)

watch(
  value,
  (newValue) => {
    model.value = newValue === props.answer
  },
  { immediate: true },
)
</script>

<template>
  {{ props.text }}
  <label for="exampleFormControlInput" class="form-label"></label>
  <input id="props.id" v-model="value" class="form-control" :placeholder="props.placeholder" />
  <!-- Texte indicatif dans le champ, configurable via la prop placeholder -->
</template>
