<!-- A presque les même propriétés que QuestionRadio.vue -->
<script setup lang="ts">
import { ref, watch, defineModel, defineProps, type PropType } from 'vue'
import { QuestionState } from '@/utils/models'

const model = defineModel<QuestionState>()

const props = defineProps({
  id: { type: String, required: true },
  text: { type: String, required: true },
  answer: { type: Array as PropType<string[]>, required: true }, // on doit initier que la réponse est une liste
  answerDetail: { type: String, default: '' },
  options: {
    type: Array as PropType<Array<{ value: string; text: string }>>,
    required: true,
  },
})

const value = ref<string[]>([])

watch(
  value,
  (newValues) => {
    if (newValues.length === 0) {
      model.value = QuestionState.Empty
    } else if (model.value !== QuestionState.Submit) {
      model.value = QuestionState.Fill
    }
  },
  { immediate: true },
)

watch(model, (newModel) => {
  if (newModel === QuestionState.Submit) {
    const isCorrect = // Ces 3 lignes sont faites par ChatGPT. J'aurai pu aussi trier les deux listes et les comparer
      props.answer.length === value.value.length &&
      props.answer.every((val) => value.value.includes(val))
    model.value = isCorrect ? QuestionState.Correct : QuestionState.Wrong
  } else if (newModel === QuestionState.Empty) {
    value.value = []
  }
})
</script>

<template>
  <p class="bold-text">{{ props.text }}</p>
  <div class="options-container">
    <div v-for="option in props.options" :key="option.value" class="form-check">
      <input
        :id="`${props.id}-${option.value}`"
        v-model="value"
        class="form-check-input"
        type="checkbox"
        :value="option.value"
        :disabled="
          model === QuestionState.Submit ||
          model === QuestionState.Correct ||
          model === QuestionState.Wrong
        "
      />
      <label class="form-check-label" :for="`${props.id}-${option.value}`">
        {{ option.text }}
      </label>
    </div>
  </div>
  <div v-if="model === QuestionState.Correct || model === QuestionState.Wrong">
    <p v-if="model === QuestionState.Correct" class="text-success">Juste !</p>
    <p v-else class="text-danger">Faux ! La réponse était : {{ answer[0] }} et {{ answer[1] }}</p>
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
.options-container {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.form-check {
  width: 100%;
}

@media (min-width: 480px) {
  .form-check {
    width: 48%;
  }
}
.bold-text {
  font-weight: bold;
}
</style>
