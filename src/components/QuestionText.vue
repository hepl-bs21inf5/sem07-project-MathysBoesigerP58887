<script setup lang="ts">
import { ref, watch, defineModel, defineProps } from 'vue'
import { QuestionState } from '@/utils/models'

const model = defineModel<QuestionState>()
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
    if (newValue === null) {
      model.value = QuestionState.Empty
    } else {
      model.value = QuestionState.Fill
    }
  },
  { immediate: true },
)

watch(model, (newModel) => {
  if (newModel === QuestionState.Submit) {
    model.value = value.value === props.answer ? QuestionState.Correct : QuestionState.Wrong
  } else if (newModel === QuestionState.Empty) {
    value.value = null
  }
})
</script>

<template>
  {{ props.text }}
  <label for="exampleFormControlInput" class="form-label"></label>
  <input
    id="props.id"
    v-model="value"
    class="form-control"
    :placeholder="props.placeholder"
    :disabled="
      model === QuestionState.Submit ||
      model === QuestionState.Correct ||
      model === QuestionState.Wrong
    "
  />
  <!-- Texte indicatif dans le champ, configurable via la prop placeholder -->
</template>
