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

pour l'instant je n'ai pas vraiment d'idée mais j'aimerais bien ajouté une page qui me permet d'ajouté des questions et les réponses directement sur le site.

&nbsp;

## Semaine 2

| tâche         | temps estimé | temps passé | commentaires                                                                        |
| ------------- | ------------ | ----------- | ----------------------------------------------------------------------------------- |
| QuestionRadio | 30 min       | 30 min      | C'est du copier-coller, ensuite il fallait juste comprendre le code                 |
| QuestionText  | 30 min       | 1h          | il m'a fallut du temps pour comprendre ce que faisait le fichier                    |
| API           | 1h30         | 1h          | C'etait juste du copier-coller rien de compliqué                                    |
| Bonus         | 1h30         | 30 min      | Beaucoup plus rapide, j'ai juste repris le fichier QuestionRadio et je l'ai modifié |
| total         | 4h           | 3h          |                                                                                     |

### Explications et réflexions

A quoi sert l'API ?

- Elle Récupère des données d'un serveur, ici des questions, et les ajoute comme banque de donnée à notre site afin de construire le quiz avant les questions, les différents choix de réponse et la réponse correcte.

Quelle est la différence entre un prop et un modèle (v-model) ?

- Les props permettent au parent de transmettre des données à l'enfant. Le flux des données est unidirectionnel : Parent → Enfant et l'enfant ne peux pas modifié le parent. Tandis que les v-model est une liaison bidirectionnelle entre parent et enfant. Le parent transmet une valeur au composant enfant, et l'enfant peut informer le parent des changements via un événement (update:modelValue). Les deux peuvent modifier la valeur.

Comment rendre la propriété placeholder optionnelle ?

- je met la prop placeholder avec defineProps et lui assigne une valeur par défaut, 'Veuillez entrer un nombre'. Si placeholder est fourni par le parent, cette valeur sera utilisée ; sinon, la valeur par défaut sera appliquée. :placeholder="props.placeholder" : Dans le template, on lie placeholder dynamiquement avec :placeholder, ce qui permet d'utiliser la valeur par défaut ou une valeur fournie par le parent.

&nbsp;

### Difficultés

&nbsp;

### Pour aller plus loin

&nbsp;

## Semaine 3

| tâche | temps estimé | temps passé | commentaires |
| ----- | ------------ | ----------- | ------------ |
|       |              |             |              |
|       |              |             |              |
|       |              |             |              |
| total |              |             |              |

## Semaine 4

| tâche | temps estimé | temps passé | commentaires |
| ----- | ------------ | ----------- | ------------ |
|       |              |             |              |
|       |              |             |              |
|       |              |             |              |
| total |              |             |              |

## Semaine 5

| tâche | temps estimé | temps passé | commentaires |
| ----- | ------------ | ----------- | ------------ |
|       |              |             |              |
|       |              |             |              |
|       |              |             |              |
| total |              |             |              |

## Semaine 6

| tâche | temps estimé | temps passé | commentaires |
| ----- | ------------ | ----------- | ------------ |
|       |              |             |              |
|       |              |             |              |
|       |              |             |              |
| total |              |             |              |

## Semaine 7

| tâche | temps estimé | temps passé | commentaires |
| ----- | ------------ | ----------- | ------------ |
|       |              |             |              |
|       |              |             |              |
|       |              |             |              |
| total |              |             |              |
