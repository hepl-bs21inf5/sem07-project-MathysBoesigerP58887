# Projet

Mathys Boesiger

## Semaine 1

### Tâche et temps

| tâche              | temps estimé | temps passé | commentaires                                                                                                                |
| ------------------ | ------------ | ----------- | --------------------------------------------------------------------------------------------------------------------------- |
| création du projet | 30 min       | 1h          | J'ai pris plus de temps car je voulais comprendre les copier-coller que je faisait                                          |
| modification       | 1h           | 2h          | Le bouton reset doit à chaque fois prendre la valeur de chaque question, pas très pratique pour le futur mais ça fonctionne |
| total              | 1h30         | 3h          |

&nbsp;

### Explications et réflexions

| Expliquer le rôle des fichiers suivants: |                                                                                                                                                                                                 |
| ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| main.ts                                  | C'est le fichier qui met en place l' application Vue.js en intégrant Bootstrap pour le style et les icônes, configure le routage avec Vue Router, puis monte l'application sur l'élément racine |
| main.css                                 | C'est le fichier qui gère le style des objets du site                                                                                                                                           |
| App.vue                                  | C'est le squelette du site avec la bar de navigation et il fait appel aux fichiers de views (HomeView.vue et AboutView.vue)                                                                     |
| router/index.ts                          | C'est le fichier qui configure et exporte un routeur Vue pour naviguer entre la page d'accueil et la page "À propos"                                                                            |
| AboutView.vue                            | C'est la page d'information                                                                                                                                                                     |
| HomeView.vue                             | C'est la page 1 du quiz, elle fait appel au fichier Quizformvue                                                                                                                                 |
| QuizForm.vue                             | C'est la qu'il y a toute les questions du quiz ainsi que le code de comptage de point                                                                                                           |

&nbsp;

Dans le fichier QuizForm.vue :

- Quelles sont les similarités et les différences entre ref et computed ?
  - Les deux sont réactifs et utilise la "value" pour accéder à leur valeur. ref est utilisé pour gérer des valeurs modifiables, tandis que computed est idéal pour gérer des valeurs dérivées qui dépendent de d'autres valeurs réactives.
- Que se passe-t-il lorsqu'on clique sur le bouton "Terminer" ?
  - Le bouton "Terminer" déclenche l’événement submit du formulaire auquel il est associé et déclenche une vérification des réponses, calcule le score, et affiche le résultat sous forme d'alerte sans recharger la page.
- Qu'est-ce qu'un v-model ?
  - Ça lie la valeur d'un champ d'entrée, par exemple la case à cocher, à une variable du composant. Donc quand on modifie la valeur de l'élément, la variable est automatiquement mise à jour. Si la variable est modifiée dans le code, la valeur de l'élément est également mise à jour.
- À quoi sert le :class="{ disabled: !filled }" ?
  - Quand filled est false (c’est-à-dire si tous les champs ne sont pas encore remplis), la classe disabled est ajoutée au bouton. Quand filled est true (tous les champs sont remplis), la classe disabled est retirée et le bouton devient actif.

&nbsp;

### Difficultés

Ma principale difficulté a été de comprendre ce que tous les fichiers faisait. Ça m'a pris du temps mais après avoir tout lu et mis des commentaire par-ci par-là, c'est devenu plus claire.

&nbsp;

### Pour aller plus loin

Pour l'instant je n'ai pas vraiment d'idée mais j'aimerais bien ajouté une page qui me permet d'ajouté des questions et les réponses directement sur le site.

&nbsp;

## Semaine 2

### Tâche et temps

| tâche         | temps estimé | temps passé | commentaires                                                                        |
| ------------- | ------------ | ----------- | ----------------------------------------------------------------------------------- |
| QuestionRadio | 30 min       | 30 min      | C'est du copier-coller, ensuite il fallait juste comprendre le code                 |
| QuestionText  | 30 min       | 1h          | il m'a fallut du temps pour comprendre ce que faisait le fichier                    |
| API           | 1h30         | 1h          | C'etait juste du copier-coller rien de compliqué                                    |
| Bonus         | 1h30         | 30 min      | Beaucoup plus rapide, j'ai juste repris le fichier QuestionRadio et je l'ai modifié |
| total         | 4h           | 3h          |                                                                                     |

### Explications et réflexions

A quoi sert l'API ?

- Elle Récupère des données d'un serveur, ici des questions, et les ajoute comme banque de donnée à notre site afin de construire le quiz avec les questions, les différents choix de réponse et la réponse correcte.

Quelle est la différence entre un prop et un modèle (v-model) ?

- Les props permettent au parent de transmettre des données à l'enfant. Le flux des données est unidirectionnel : Parent → Enfant et l'enfant ne peux pas modifié le parent. Tandis que les v-model est une liaison bidirectionnelle entre parent et enfant. Le parent transmet une valeur au composant enfant, et l'enfant peut informer le parent des changements via un événement (update:modelValue). Les deux peuvent modifier la valeur.

Comment rendre la propriété placeholder optionnelle ?

- je met la prop placeholder avec defineProps et lui assigne une valeur par défaut, 'Veuillez entrer un nombre'. Si placeholder est fourni par le parent, cette valeur sera utilisée ; sinon, la valeur par défaut sera appliquée. :placeholder="props.placeholder" : Dans le template, on lie placeholder dynamiquement avec :placeholder, ce qui permet d'utiliser la valeur par défaut ou une valeur fournie par le parent. et si je met pas de valeur par défaut alors il n'y aura rien d'afficher dans le placeholder.

&nbsp;

### Difficultés

J'avais du mal à comprendre le nouveau fichier QuestionRadio.

&nbsp;

### Pour aller plus loin

J'aimerai bien modifier les boutons des radios avec d'autres styles

&nbsp;

## Semaine 3

### Tâche et temps

| tâche   | temps estimé | temps passé | commentaires |
| ------- | ------------ | ----------- | ------------ |
| réponse | 1h           | 30 min      |              |
| score   | 1h           | 30 min      |              |
| total   | 2h           | 1h          |              |

&nbsp;

### Explications et réflexions

À quoi sert l'option immediate: true dans le watch ? Que se passe-t-il si on l'enlève ou si on met immediate: false ?

- Si on met false ça nous affiche une liste vide et dès qu'on remplis une réponse, ça remplit la liste avec true ou false. true définit que le watch faire se faire avant le premier changement, tandis que false va attendre qu'il y ait un changement avant de l'afficher

Proposer une autre manière de calculer le score et comparer les deux méthodes.

- On pourrait parcourir la liste des réponses et à chaque fois fois qu'on a "true", on ajoute 1 au score. Cette méthode me parrait plus longue car à chaque fois qu'on change la valeur, on va de nouveau parcourir la liste et on devra vérifié qu'on a pas déjà ajouté la valeur.

&nbsp;

### Difficultés

Aucunes difficultés cette semaine. OUF

&nbsp;

### Pour aller plus loin

les boutons me gène mais on me dis qu'on verra ça la semaine prochaine

&nbsp;

## Semaine 4

### Tâche et temps

| tâche              | temps estimé | temps passé | commentaires                        |
| ------------------ | ------------ | ----------- | ----------------------------------- |
| états              | 30 min       | 30 min      |                                     |
| boutons            | 30 min       | 10 min      | rapide à faire et j'ai vite compris |
| réponses immuables | 10 min       | 5 min       | copier-coller                       |
| total              | 1h10         | 45 min      |                                     |

&nbsp;

### Explications et réflexions

Comment pourrait-on réécrire la ligne suivante sans l'opérateur ternaire (avec des if et else) ?

- 'if (value.value === props.answer) {
  model.value = QuestionState.Correct;
  } else {
  model.value = QuestionState.Wrong;
  }'

Comment pourrait-on réécrire autrement la logique du watch sur value ?

- on peut utilisé un computed: 'const model = computed(() => {
  return value.value === null ? QuestionState.Empty : QuestionState.Fill
  })'

&nbsp;

### Difficultés

Dans QuestionCheckbox, j'arrivais pas ce que l'état correct soit assigné uniquement si toute les réponses étaient toutes justes. j'ai demandé à ChatGPT et il m'a donné la réponse.

&nbsp;

### Pour aller plus loin

je pourait changer les watch par des computed
&nbsp;

## Semaine 5

### Tâche et temps

| tâche   | temps estimé | temps passé | commentaires |
| ------- | ------------ | ----------- | ------------ |
| réponse |              |             |              |
| score   |              |             |              |
|         |              |             |              |
| total   |              |             |              |

&nbsp;

### Explications et réflexions

&nbsp;

### Difficultés

&nbsp;

### Pour aller plus loin

&nbsp;

## Semaine 6

### Tâche et temps

| tâche   | temps estimé | temps passé | commentaires |
| ------- | ------------ | ----------- | ------------ |
| réponse |              |             |              |
| score   |              |             |              |
|         |              |             |              |
| total   |              |             |              |

&nbsp;

### Explications et réflexions

&nbsp;

### Difficultés

&nbsp;

### Pour aller plus loin

&nbsp;

## Semaine 7

### Tâche et temps

| tâche   | temps estimé | temps passé | commentaires |
| ------- | ------------ | ----------- | ------------ |
| réponse |              |             |              |
| score   |              |             |              |
|         |              |             |              |
| total   |              |             |              |

&nbsp;

### Explications et réflexions

&nbsp;

### Difficultés

&nbsp;

### Pour aller plus loin

&nbsp;
