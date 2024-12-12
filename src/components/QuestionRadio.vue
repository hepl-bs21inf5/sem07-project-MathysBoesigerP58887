<script setup lang="ts">
import { ref, watch, defineModel, computed, defineProps, type PropType } from 'vue'
import { QuestionState } from '@/utils/models'

const model = defineModel<QuestionState>()
// Définition des propriétés (props) attendues par le composant
const props = defineProps({
  id: { type: String, required: true },
  text: { type: String, required: true },
  answer: { type: String, required: true }, //réponse à la question
  answerDetail: { type: String, default: 'Aucune explication supplémentaire disponible.' },
  // Options disponibles pour le groupe de boutons radio
  // Chaque option est un objet contenant une valeur unique (value) et un texte descriptif (text)
  options: {
    type: Array as PropType<Array<{ value: string; text: string }>>,
    required: true,
  },
})
const value = ref<string | null>(null)
const answerText = computed<string>(
  () => props.options.find((option) => option.value === props.answer)?.text ?? props.answer,
)

watch(
  value,
  (newValue) => {
    if (newValue === null) {
      model.value = QuestionState.Empty
    } else {
      model.value = QuestionState.Fill
    }
  },
  { immediate: true }, //si on met false, on attends de modifier la valeur avant de l'afficher
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
  <!-- ID basé sur l'ID du composant et la valeur de l'option -->
  <div v-for="option in props.options" :key="option.value" class="form-check">
    <input
      :id="`${props.id}-${option.value}`"
      v-model="value"
      class="form-check-input"
      type="radio"
      :name="props.id"
      :value="option.value"
      :disabled="
        model === QuestionState.Submit ||
        model === QuestionState.Correct ||
        model === QuestionState.Wrong
      "
    />
    <label class="form-check-label" :for="`${props.id}-${option.value}`">
      <!-- Texte à afficher à côté du bouton radio -->
      {{ option.text }}
    </label>
  </div>
  <div v-if="model === QuestionState.Correct || model === QuestionState.Wrong">
    <p v-if="model === QuestionState.Correct" class="text-success">Juste !</p>
    <p v-else class="text-danger">Faux ! La réponse était : {{ answerText }}</p>
    <p class="blockquote-footer">{{ props.answerDetail }}</p>
  </div>
</template>

<style scoped>
.text-success {
  color: green !important;
}
.text-danger {
  color: red !important;
}
</style>
