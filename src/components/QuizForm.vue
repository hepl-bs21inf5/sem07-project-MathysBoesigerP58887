<script setup lang="ts">
import QuestionRadio from '@/components/QuestionRadio.vue'
import QuestionText from '@/components/QuestionText.vue'
import QuestionCheckbox from './QuestionCheckbox.vue'
import QuestionSelect from './QuestionSelect.vue'
import { computed, ref } from 'vue'
import { QuestionState } from '@/utils/models'

// Déclaration des variables réactives qui vont contenir les réponses de l'utilisateur
const questionStates = ref<QuestionState[]>([])
const score = computed<number>(
  () => questionStates.value.filter((state) => state === QuestionState.Correct).length,
)
const max_score = computed<number>(() => questionStates.value.length)
// Vérifie si toutes les réponses sont remplies
const filled = computed<boolean>(() =>
  questionStates.value.every((state) => state === QuestionState.Fill),
)
// Vérifie si les réponse sont juste ou fausse
const submitted = computed<boolean>(() =>
  questionStates.value.every(
    (state) => state === QuestionState.Correct || state === QuestionState.Wrong,
  ),
)

//Réinitialise les réponses à Empty
function reset(event: Event): void {
  event.preventDefault()
  questionStates.value = questionStates.value.map(() => QuestionState.Empty)
}

// Fonction de soumission du formulaire qui calcule le score de l'utilisateur et affiche le score
function submit(event: Event): void {
  event.preventDefault() // Empêche la soumission du formulaire et le rafraîchissement de la page
  questionStates.value = questionStates.value.map(() => QuestionState.Submit)
}
</script>

<!-- Formulaire des questions -->
<template>
  <form @submit="submit">
    <!-- Quand on appuie sur "Terminer", la fonction submit est émis -->
    <QuestionRadio
      id="chaude"
      v-model="questionStates[0]"
      text="Quelle est la planète la plus chaude du système solaire ?"
      answer="venus"
      answer-detail="Vénus est hostile et extrême ! Elle brille tellement, que nous l'appelons, à tort, l'Étoile du berger."
      :options="[
        { value: 'mars', text: 'Mars' },
        { value: 'venus', text: 'Vénus' },
        { value: 'terre', text: 'Terre' },
        { value: 'jupiter', text: 'Jupiter' },
      ]"
    />

    <QuestionRadio
      id="anneaux"
      v-model="questionStates[1]"
      text="Quelle planète est connue pour avoir des anneaux spectaculaires ?"
      answer="saturne"
      answer-detail="Les anneaux de Saturne sont les plus grands et les plus visibles du système solaire."
      :options="[
        { value: 'uranus', text: 'Uranus' },
        { value: 'neptune', text: 'Neptune' },
        { value: 'saturne', text: 'Saturne' },
        { value: 'mars', text: 'Mars' },
      ]"
    />

    <QuestionRadio
      id="rouge"
      v-model="questionStates[2]"
      text="Quelle planète est surnommée :la planète rouge ?"
      answer="mars"
      answer-detail="La Suisse est un État fédéral d'Europe centrale avec Berne pour capitale."
      :options="[
        { value: 'mercure', text: 'Mercure' },
        { value: 'jupiter', text: 'Jupiter' },
        { value: 'venus', text: 'Vénus' },
        { value: 'mars', text: 'Mars' },
      ]"
    />
    <QuestionText
      id="nombre_planetes"
      v-model="questionStates[3]"
      text="Combien de planètes composent le système solaire ?"
      :answer="['8', 'huit']"
      placeholder="Veuillez entrez un nombre"
      answer-detail="Mercure, Vénus, la Terre, Mars, Jupiter, Saturne, Uranus et Neptune"
    />
    <QuestionCheckbox
      id="gaz"
      v-model="questionStates[4]"
      text="Le/lesquels de ces éléments sont des gaz à l'état naturel?"
      :answer="['azote', 'chlore']"
      answer-detail="La chauve-souris est le seul mammifère volant"
      :options="[
        { value: 'azote', text: 'Azote' },
        { value: 'lithium', text: 'Lithium' },
        { value: 'magnesium', text: 'Magnésium' },
        { value: 'chlore', text: 'Chlore' },
      ]"
    />

    <QuestionSelect
      id="chimie"
      v-model="questionStates[5]"
      text="Quel est l'élément chimique représenté par le symbole 'O' dans le tableau périodique ?"
      answer="oxygene"
      answer-detail="Or: Au, Osium: Os, Ozone: O3 "
      :options="[
        { value: 'or', text: 'Or' },
        { value: 'osium', text: 'Osium' },
        { value: 'oxygene', text: 'Oxygène' },
        { value: 'ozone', text: 'Ozone' },
      ]"
    />
    <!-- Bouton de soumission qui est désactivé tant que toutes les réponses ne sont pas remplies -->
    <button class="btn btn-primary" :class="{ disabled: !filled }" type="submit">Terminer</button>
    <!-- Bouton pour réinitialiser les réponses -->
    <button class="btn btn-secondary" @click="reset">Réinitialiser</button>
    <div v-if="submitted">Score: {{ score }} / {{ max_score }}</div>
    <div v-if="!filled" class="warning">
      <p style="color: orange">Veuillez remplir toutes les réponses avant de soumettre.</p>
    </div>
  </form>
</template>
