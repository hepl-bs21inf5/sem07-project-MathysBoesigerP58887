<script setup lang="ts">
import { computed, ref } from 'vue'

const cheval = ref<string | null>(null)
const chat = ref<string | null>(null)
const capitale = ref<string | null>(null)
const filled = computed<boolean>(() => cheval.value && chat.value && capitale.value !== null)

function reset() {
  cheval.value = null
  chat.value = null
  capitale.value = null
}

function submit(event: Event): void {
  let score = 0
  const max_score = 3
  event.preventDefault()
  if (cheval.value === 'blanc') {
    score += 1
  }
  if (chat.value === '4') {
    score += 1
  }
  if (capitale.value === 'berne') {
    score += 1
  }
  if (score === max_score) {
    alert('Vous avez tout juste !')
  } else {
    alert(`Vous avez ${score}/3`)
  }
}
</script>

<template>
  <form @submit="submit">
    De quelle couleur est le cheval blanc de Napoléon ?
    <div class="form-check">
      <input
        id="chevalVert"
        v-model="cheval"
        class="form-check-input"
        type="radio"
        name="cheval"
        value="vert"
      />
      <label class="form-check-label" for="chevalVert">Vert</label>
    </div>
    <div class="form-check">
      <input
        id="chevalBlanc"
        v-model="cheval"
        class="form-check-input"
        type="radio"
        name="cheval"
        value="blanc"
      />
      <label class="form-check-label" for="chevalBlanc">Blanc</label>
    </div>
    <div class="form-check">
      <input
        id="chevalBrun"
        v-model="cheval"
        class="form-check-input"
        type="radio"
        name="cheval"
        value="brun"
      />
      <label class="form-check-label" for="chevalBrun">Brun</label>
    </div>
    <div class="form-check">
      <input
        id="chevalNoir"
        v-model="cheval"
        class="form-check-input"
        type="radio"
        name="cheval"
        value="noir"
      />
      <label class="form-check-label" for="chevalNoir">Noir</label>
    </div>
  </form>
  <form @submit="submit">
    Combien de pattes a un chat ?
    <div class="form-check">
      <input
        id="4pattes"
        v-model="chat"
        class="form-check-input"
        type="radio"
        name="patte"
        value="4"
      />
      <label class="form-check-label" for="4pattes">4</label>
    </div>
    <div class="form-check">
      <input
        id="10pattes"
        v-model="chat"
        class="form-check-input"
        type="radio"
        name="chat"
        value="10"
      />
      <label class="form-check-label" for="10pattes">10</label>
    </div>
    <div class="form-check">
      <input
        id="2pattes"
        v-model="chat"
        class="form-check-input"
        type="radio"
        name="chat"
        value="2"
      />
      <label class="form-check-label" for="2pattes">2</label>
    </div>
    <div class="form-check">
      <input
        id="6pattes"
        v-model="chat"
        class="form-check-input"
        type="radio"
        name="chat"
        value="6"
      />
      <label class="form-check-label" for="6pattes">6</label>
    </div>
  </form>
  <form @submit="submit">
    Quelle est la capitale de la Suisse ?
    <div class="form-check">
      <input
        id="lausanne"
        v-model="capitale"
        class="form-check-input"
        type="radio"
        name="capitale"
        value="lausanne"
      />
      <label class="form-check-label" for="lausanne">Lausanne</label>
    </div>
    <div class="form-check">
      <input
        id="berne"
        v-model="capitale"
        class="form-check-input"
        type="radio"
        name="capitale"
        value="berne"
      />
      <label class="form-check-label" for="berne">Berne</label>
    </div>
    <div class="form-check">
      <input
        id="zurich"
        v-model="capitale"
        class="form-check-input"
        type="radio"
        name="capitale"
        value="zurich"
      />
      <label class="form-check-label" for="zurich">Zürich</label>
    </div>
    <div class="form-check">
      <input
        id="bale"
        v-model="capitale"
        class="form-check-input"
        type="radio"
        name="capitale"
        value="bale"
      />
      <label class="form-check-label" for="bale">Bâle</label>
    </div>
    <button class="btn btn-primary" :class="{ disabled: !filled }" type="submit">Terminer</button>
  </form>
  <button class="btn btn-secondary" @click="reset">Réinitialiser</button>
</template>
