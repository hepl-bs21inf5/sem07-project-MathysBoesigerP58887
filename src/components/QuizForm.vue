<script setup lang="ts">
import QuestionRadio from '@/components/QuestionRadio.vue'
import QuestionText from '@/components/QuestionText.vue'
import QuestionCheckbox from './QuestionCheckbox.vue'
import { computed, ref } from 'vue'

// Déclaration des variables réactives qui vont contenir les réponses de l'utilisateur
const cheval = ref<string | null>(null) // null signifie qu'il n'y a pas de réponse au départ
const chat = ref<string | null>(null)
const capitale = ref<string | null>(null)
const reponse_chat = ref<string | null>(null)
const checkedNames = ref<string[]>([])

// Vérifie si toutes les réponses sont remplies
const filled = computed<boolean>(
  () =>
    cheval.value !== null &&
    chat.value !== null &&
    capitale.value !== null &&
    reponse_chat.value !== null &&
    checkedNames.value !== null,
)

//Réinitialise les réponses à null
function reset(event: Event): void {
  event.preventDefault()

  cheval.value = null
  chat.value = null
  capitale.value = null
  reponse_chat.value = null
  checkedNames.value = []
}

// Fonction de soumission du formulaire qui calcule le score de l'utilisateur et affiche le score
function submit(event: Event): void {
  event.preventDefault() // Empêche la soumission du formulaire et le rafraîchissement de la page

  let score = 0
  const max_score = 4

  if (cheval.value === 'blanc') {
    score += 1
  }
  if (chat.value === '4') {
    score += 1
  }
  if (capitale.value === 'berne') {
    score += 1
  }
  if (
    reponse_chat.value === '4' ||
    reponse_chat.value === 'quatre' ||
    reponse_chat.value === 'Quatre'
  ) {
    score += 1
  }
  if (score === max_score) {
    alert('Vous avez tout juste !')
  } else {
    alert(`Vous avez ${score}/4`)
  }
}
</script>

<!-- Formulaire des questions -->
<template>
  <form @submit="submit">
    <!-- Quand on appuie sur "Terminer", la fonction submit est émis -->
    <QuestionRadio
      id="cheval"
      v-model="cheval"
      text="De quelle couleur est le cheval blanc de Napoléon ?"
      :options="[
        { value: 'blanc', text: 'Blanc' },
        { value: 'brun', text: 'Brun' },
        { value: 'noir', text: 'Noir' },
        { value: 'vert', text: 'Vert' },
      ]"
    />
  </form>
  <form @submit="submit">
    <QuestionRadio
      id="chat"
      v-model="chat"
      text="Combien de pattes a un chat ?"
      :options="[
        { value: '6', text: '6' },
        { value: '4', text: '4' },
        { value: '8', text: '8' },
        { value: '2', text: '2' },
      ]"
    />
  </form>
  <form @submit="submit">
    <QuestionRadio
      id="capitale"
      v-model="capitale"
      text="Quelle est la capitale de la Suisse ?"
      :options="[
        { value: 'lausanne', text: 'Lausanne' },
        { value: 'berne', text: 'Berne' },
        { value: 'zurich', text: 'Zürich' },
        { value: 'bale', text: 'Bâle' },
      ]"
    />
  </form>
  <form @submit="submit">
    <QuestionText v-model="reponse_chat" text="Combien de pattes a un chat ?" />
  </form>
  <form @submit="submit">
    <QuestionCheckbox
      id="question-names"
      v-model="checkedNames"
      text="Qui souhaitez-vous inviter ?"
      :options="[
        { value: 'Jane', text: 'Jane' },
        { value: 'John', text: 'John' },
        { value: 'Doe', text: 'Doe' },
      ]"
    />
    <!-- Bouton de soumission qui est désactivé tant que toutes les réponses ne sont pas remplies -->
    <button class="btn btn-primary" :class="{ disabled: !filled }" type="submit">Terminer</button>
  </form>
  <!-- Bouton pour réinitialiser les réponses -->
  <button class="btn btn-secondary" @click="reset">Réinitialiser</button>
</template>
