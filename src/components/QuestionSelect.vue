<script setup lang="ts">
// Tout le script est le même que QuestionRadio
import { ref, watch, defineModel, defineProps, type PropType } from 'vue'
import { QuestionState } from '@/utils/models'

const model = defineModel<QuestionState>()
const props = defineProps({
  id: { type: String, required: true },
  text: { type: String, required: true },
  answer: { type: String, required: true },
  answerDetail: { type: String, default: '' },
  options: {
    type: Array as PropType<Array<{ value: string; text: string }>>,
    required: true,
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
  <p class="bold-text">{{ props.text }}</p>
  <!-- Menu déroulant avec select au lieu de input-->
  <select
    :id="props.id"
    v-model="value"
    class="form-select"
    type="select"
    :disabled="
      model === QuestionState.Submit ||
      model === QuestionState.Correct ||
      model === QuestionState.Wrong
    "
  >
    <option :value="null" disabled>Choisir votre réponse</option>
    <option v-for="option in props.options" :key="option.value" :value="option.value">
      <!--boucle for qui crée pour chaque -->
      {{ option.text }}
    </option>
  </select>
  <div v-if="model === QuestionState.Correct || model === QuestionState.Wrong">
    <p v-if="model === QuestionState.Correct" class="text-success">Juste !</p>
    <p v-else class="text-danger">Faux ! La réponse était : {{ answer }}</p>
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
