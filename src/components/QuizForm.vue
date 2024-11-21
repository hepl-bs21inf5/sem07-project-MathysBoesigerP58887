<script setup lang="ts">
import QuestionRadio from '@/components/QuestionRadio.vue'
import QuestionText from '@/components/QuestionText.vue'
import QuestionCheckbox from './QuestionCheckbox.vue'
import { computed, ref } from 'vue'

// Déclaration des variables réactives qui vont contenir les réponses de l'utilisateur
const checkedNames = ref<string[]>([])
const correctAnswers = ref<boolean[]>([])
const score = computed<number>(() => correctAnswers.value.filter((value) => value).length)
const max_score = computed<number>(() => correctAnswers.value.length)

// Vérifie si toutes les réponses sont remplies
const filled = computed<boolean>(() => {
  return correctAnswers.value !== null && checkedNames.value !== null
})

//Réinitialise les réponses à null
function reset(event: Event): void {
  event.preventDefault()
  checkedNames.value = []
}

// Fonction de soumission du formulaire qui calcule le score de l'utilisateur et affiche le score
function submit(event: Event): void {
  event.preventDefault() // Empêche la soumission du formulaire et le rafraîchissement de la page
}
</script>

<!-- Formulaire des questions -->
<template>
  <form @submit="submit">
    <!-- Quand on appuie sur "Terminer", la fonction submit est émis -->
    <QuestionRadio
      id="cheval"
      v-model="correctAnswers[0]"
      text="De quelle couleur est le cheval blanc de Napoléon ?"
      answer="blanc"
      :options="[
        { value: 'blanc', text: 'Blanc' },
        { value: 'brun', text: 'Brun' },
        { value: 'noir', text: 'Noir' },
        { value: 'vert', text: 'Vert' },
      ]"
    />

    <QuestionRadio
      id="chat"
      v-model="correctAnswers[1]"
      text="Combien de pattes a un chat ?"
      answer="4"
      :options="[
        { value: '6', text: '6' },
        { value: '4', text: '4' },
        { value: '8', text: '8' },
        { value: '2', text: '2' },
      ]"
    />

    <QuestionRadio
      id="capitale"
      v-model="correctAnswers[2]"
      text="Quelle est la capitale de la Suisse ?"
      answer="berne"
      :options="[
        { value: 'lausanne', text: 'Lausanne' },
        { value: 'berne', text: 'Berne' },
        { value: 'zurich', text: 'Zürich' },
        { value: 'bale', text: 'Bâle' },
      ]"
    />
    <QuestionText
      id="pattes"
      v-model="correctAnswers[3]"
      text="Combien de pattes a un chat ?"
      answer="4"
    />

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
    <!-- Bouton pour réinitialiser les réponses -->
    <button class="btn btn-secondary" @click="reset">Réinitialiser</button>
    <div>Réponses correctes : {{ correctAnswers }}</div>
    <div>Score: {{ score }} / {{ max_score }}</div>
  </form>
</template>
