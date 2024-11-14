<script setup lang="ts">
import { defineModel, defineProps } from 'vue'

const model = defineModel<string | null>()
const props = defineProps({
  placeholder: {
    type: String,
    default: 'Veuillez entrer un nombre',
  },
})
</script>

<template>
  <label for="exampleFormControlInput" class="form-label"> Combien de pattes a un chat ? </label>
  <input
    id="exampleFormControlInput"
    v-model="model"
    class="form-control"
    :placeholder="props.placeholder"
  />
</template>
