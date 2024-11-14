<script setup lang="ts">
import { defineModel, defineProps, type PropType } from 'vue'

const model = defineModel<string | null>()
const props = defineProps({
  name: { type: String, required: true },
  text: { type: String, required: true },
  options: {
    type: Array as PropType<Array<{ name: string; text: string }>>,
    required: true,
  },
})
</script>

<template>
  {{ props.text }}
  <div v-for="option in props.options" :key="option.name" class="form-check">
    <input
      :id="`${props.name}-${option.name}`"
      v-model="model"
      class="form-check-input"
      type="radio"
      :name="props.name"
      :value="option.name"
    />
    <label class="form-check-label" :for="`${props.name}-${option.name}`">
      {{ option.text }}
    </label>
  </div>
</template>
