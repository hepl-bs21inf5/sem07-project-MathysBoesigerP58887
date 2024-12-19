<script setup lang="ts">
import { ref, watch, defineModel, defineProps } from 'vue'
import { QuestionState } from '@/utils/models'

const props = defineProps<{
  id: string
  text: string
  answer: string | string[] // Acceptation d'une chaîne ou d'un tableau de chaînes
  answerDetail?: string // Optionnel avec valeur par défaut
  placeholder?: string // Optionnel avec valeur par défaut
}>()

const model = defineModel<QuestionState>()
const value = ref<string | null>(null)

// Observer les changements de la valeur d'entrée
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

// Observer les changements d'état du modèle
watch(model, (newModel) => {
  if (newModel === QuestionState.Submit) {
    const possibleAnswers = Array.isArray(props.answer) ? props.answer : [props.answer]
    const isCorrect = possibleAnswers.some(
      (answer) => answer.toLowerCase() === (value.value || '').toLowerCase(),
    )
    model.value = isCorrect ? QuestionState.Correct : QuestionState.Wrong
  } else if (newModel === QuestionState.Empty) {
    value.value = null
  }
})
</script>

<template>
  <p class="bold-text">{{ props.text }}</p>
  <label for="exampleFormControlInput" class="form-label"></label>
  <input
    :id="props.id"
    v-model="value"
    class="form-control"
    :placeholder="props.placeholder || 'Veuillez entrer du texte'"
    :disabled="
      model === QuestionState.Submit ||
      model === QuestionState.Correct ||
      model === QuestionState.Wrong
    "
  />
  <div v-if="model === QuestionState.Correct || model === QuestionState.Wrong">
    <p v-if="model === QuestionState.Correct" class="text-success">Juste !</p>
    <p v-else class="text-danger">
      Faux ! La réponse était :
      {{ answer[0] }}
    </p>
    <p class="blockquote-footer">{{ props.answerDetail }}</p>
  </div>
  <p></p>
</template>

<style scoped>
.text-success {
  color: green !important;
}
.text-danger {
  color: red !important;
}
.bold-text {
  font-weight: bold;
}
</style>
