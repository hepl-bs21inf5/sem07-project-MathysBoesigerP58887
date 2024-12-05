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
      id="cheval"
      v-model="questionStates[0]"
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
      v-model="questionStates[1]"
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
      v-model="questionStates[2]"
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
      id="nombre_planetes"
      v-model="questionStates[3]"
      text="Combien de planètes composent le système solaire ?"
      answer="8"
    />
    <QuestionCheckbox
      id="mammiferes"
      v-model="questionStates[4]"
      text="Le/lesquels sont des mammifères ?"
      :answer="['ours', 'chauve_souris']"
      :options="[
        { value: 'ours', text: 'Ours' },
        { value: 'requin', text: 'Requin' },
        { value: 'chauve_souris', text: 'Chauve-souris' },
      ]"
    />

    <QuestionSelect
      id="1"
      v-model="questionStates[5]"
      text="Quel est l'élément chimique représenté par le symbole 'O' dans le tableau périodique ?"
      answer="oxygene"
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
    <div>Debug états : {{ questionStates }}</div>
  </form>
</template>
