<script setup lang="ts">
// Tout le script est le même que QuestionRadio
import { ref, watch, defineModel, defineProps, type PropType } from 'vue'
import { QuestionState } from '@/utils/models'

const model = defineModel<QuestionState>()
const props = defineProps({
  id: { type: String, required: true },
  text: { type: String, required: true },
  answer: { type: String, required: true },
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
  {{ props.text }}
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
</template>
<!--<select v-for="option in props.options" :key="option.value" class="custom-select">
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

      {{ option.text }}
    </label>
  </div>-->
