<script setup lang="ts">
import QuestionRadio from '@/components/QuestionRadio.vue'
import { reactive, ref } from 'vue'

// Déclaration d'une liste réactive pour stocker les questions
const questions = ref<
  {
    question: string
    correct_answer: string
    incorrect_answers: string[]
  }[]
>([])
const answers = reactive<{ [key: number]: string | null }>({})

// Appel API pour récupérer une liste de questions à choix multiples
fetch('https://opentdb.com/api.php?amount=10&type=multiple')
  .then((response) => response.json())
  .then((data) => (questions.value = data.results)) // Stocke les questions récupérées dans la liste réactive
</script>

<template>
  <form>
    <!-- Fait une boucle sur chaque question afin de séparer la question, la réponses et les choix possibles -->
    <QuestionRadio
      v-for="(question, index) in questions"
      :id="index.toString()"
      :key="index"
      v-model="answers[index]"
      :text="question.question"
      :options="[
        // Formatage des options pour QuestionRadio
        { value: question.correct_answer, text: question.correct_answer },
        ...question.incorrect_answers.map((answer) => ({
          value: answer,
          text: answer,
        })),
      ]"
    />
  </form>
</template>
