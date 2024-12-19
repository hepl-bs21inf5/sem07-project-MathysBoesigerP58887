# <p style="color:Olive;">Projet</p>

Mathys Boesiger

## <p style="color:Olive;">Semaine 1</p>

### <p style="color:Olive;">Tâche et temps</p>

| tâche              | temps estimé | temps passé | commentaires                                                                                                                |
| ------------------ | ------------ | ----------- | --------------------------------------------------------------------------------------------------------------------------- |
| création du projet | 30 min       | 1h          | J'ai pris plus de temps car je voulais comprendre les copier-coller que je faisait                                          |
| modification       | 1h           | 2h          | Le bouton reset doit à chaque fois prendre la valeur de chaque question, pas très pratique pour le futur mais ça fonctionne |
| total              | 1h30         | 3h          |

&nbsp;

### <p style="color:Olive;">Explications et réflexions</p>

| **Expliquer le rôle des fichiers suivants:** |                                                                                                                                                                                                 |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| main.ts                                      | C'est le fichier qui met en place l' application Vue.js en intégrant Bootstrap pour le style et les icônes, configure le routage avec Vue Router, puis monte l'application sur l'élément racine |
| main.css                                     | C'est le fichier qui gère le style des objets du site                                                                                                                                           |
| App.vue                                      | C'est le squelette du site avec la bar de navigation et il fait appel aux fichiers de views (HomeView.vue et AboutView.vue)                                                                     |
| router/index.ts                              | C'est le fichier qui configure et exporte un routeur Vue pour naviguer entre la page d'accueil et la page "À propos"                                                                            |
| AboutView.vue                                | C'est la page d'information                                                                                                                                                                     |
| HomeView.vue                                 | C'est la page 1 du quiz, elle fait appel au fichier Quizformvue                                                                                                                                 |
| QuizForm.vue                                 | C'est la qu'il y a toute les questions du quiz ainsi que le code de comptage de point                                                                                                           |

&nbsp;

**Dans le fichier QuizForm.vue :**

- **Quelles sont les similarités et les différences entre ref et computed ?**
  - Les deux sont réactifs et utilise la "value" pour accéder à leur valeur. ref est utilisé pour gérer des valeurs modifiables, tandis que computed est idéal pour gérer des valeurs dérivées qui dépendent de d'autres valeurs réactives.
- **Que se passe-t-il lorsqu'on clique sur le bouton "Terminer" ?**
  - Le bouton "Terminer" déclenche l’événement submit du formulaire auquel il est associé et déclenche une vérification des réponses, calcule le score, et affiche le résultat sous forme d'alerte sans recharger la page.
- **Qu'est-ce qu'un v-model ?**
  - Ça lie la valeur d'un champ d'entrée, par exemple la case à cocher, à une variable du composant. Donc quand on modifie la valeur de l'élément, la variable est automatiquement mise à jour. Si la variable est modifiée dans le code, la valeur de l'élément est également mise à jour.
- **À quoi sert le :class="{ disabled: !filled }" ?**
  - Quand filled est false (c’est-à-dire si tous les champs ne sont pas encore remplis), la classe disabled est ajoutée au bouton. Quand filled est true (tous les champs sont remplis), la classe disabled est retirée et le bouton devient actif.

&nbsp;

### <p style="color:Olive;">Difficultés</p>

Ma principale difficulté a été de comprendre ce que tous les fichiers faisait. Ça m'a pris du temps mais après avoir tout lu et mis des commentaire par-ci par-là, c'est devenu plus claire.

&nbsp;

### <p style="color:Olive;">Pour aller plus loin</p>

Pour l'instant je n'ai pas vraiment d'idée mais j'aimerais bien ajouté une page qui me permet d'ajouté des questions et les réponses directement sur le site.

&nbsp;

## <p style="color:Olive;">Semaine 2</p>

### <p style="color:Olive;">Tâche et temps</p>

| tâche         | temps estimé | temps passé | commentaires                                                                        |
| ------------- | ------------ | ----------- | ----------------------------------------------------------------------------------- |
| QuestionRadio | 30 min       | 30 min      | C'est du copier-coller, ensuite il fallait juste comprendre le code                 |
| QuestionText  | 30 min       | 1h          | il m'a fallut du temps pour comprendre ce que faisait le fichier                    |
| API           | 1h30         | 1h          | C'etait juste du copier-coller rien de compliqué                                    |
| Bonus         | 1h30         | 30 min      | Beaucoup plus rapide, j'ai juste repris le fichier QuestionRadio et je l'ai modifié |
| total         | 4h           | 3h          |                                                                                     |

### <p style="color:Olive;">Explications et réflexions</p>

**A quoi sert l'API ?**

- Elle Récupère des données d'un serveur, ici des questions, et les ajoute comme banque de donnée à notre site afin de construire le quiz avec les questions, les différents choix de réponse et la réponse correcte.

**Quelle est la différence entre un prop et un modèle (v-model) ?**

- Les props permettent au parent de transmettre des données à l'enfant. Le flux des données est unidirectionnel : Parent → Enfant et l'enfant ne peux pas modifié le parent. Tandis que les v-model est une liaison bidirectionnelle entre parent et enfant. Le parent transmet une valeur au composant enfant, et l'enfant peut informer le parent des changements via un événement (update:modelValue). Les deux peuvent modifier la valeur.

**Comment rendre la propriété placeholder optionnelle ?**

- je met la prop placeholder avec defineProps et lui assigne une valeur par défaut, 'Veuillez entrer un nombre'. Si placeholder est fourni par le parent, cette valeur sera utilisée ; sinon, la valeur par défaut sera appliquée. :placeholder="props.placeholder" : Dans le template, on lie placeholder dynamiquement avec :placeholder, ce qui permet d'utiliser la valeur par défaut ou une valeur fournie par le parent. et si je met pas de valeur par défaut alors il n'y aura rien d'afficher dans le placeholder.

&nbsp;

### <p style="color:Olive;">Difficultés</p>

J'avais du mal à comprendre le nouveau fichier QuestionRadio.

&nbsp;

### <p style="color:Olive;">Pour aller plus loin</p>

J'aimerai bien modifier les boutons des radios avec d'autres styles

&nbsp;

## <p style="color:Olive;">Semaine 3</p>

### <p style="color:Olive;">Tâche et temps</p>

| tâche   | temps estimé | temps passé | commentaires |
| ------- | ------------ | ----------- | ------------ |
| réponse | 1h           | 30 min      |              |
| score   | 1h           | 30 min      |              |
| total   | 2h           | 1h          |              |

&nbsp;

### <p style="color:Olive;">Explications et réflexions</p>

**À quoi sert l'option immediate: true dans le watch ? Que se passe-t-il si on l'enlève ou si on met immediate: false ?**

- Si on met false ça nous affiche une liste vide et dès qu'on remplis une réponse, ça remplit la liste avec true ou false. true définit que le watch faire se faire avant le premier changement, tandis que false va attendre qu'il y ait un changement avant de l'afficher

**Proposer une autre manière de calculer le score et comparer les deux méthodes.**

- On pourrait parcourir la liste des réponses et à chaque fois fois qu'on a "true", on ajoute 1 au score. Cette méthode me parrait plus longue car à chaque fois qu'on change la valeur, on va de nouveau parcourir la liste et on devra vérifié qu'on a pas déjà ajouté la valeur.

&nbsp;

### <p style="color:Olive;">Difficultés</p>

Aucunes difficultés cette semaine. OUF

&nbsp;

### <p style="color:Olive;">Pour aller plus loin</p>

les boutons me gène mais on me dis qu'on verra ça la semaine prochaine

&nbsp;

## <p style="color:Olive;">Semaine 4</p>

### <p style="color:Olive;">Tâche et temps</p>

| tâche              | temps estimé | temps passé | commentaires                        |
| ------------------ | ------------ | ----------- | ----------------------------------- |
| états              | 30 min       | 30 min      |                                     |
| boutons            | 30 min       | 10 min      | rapide à faire et j'ai vite compris |
| réponses immuables | 10 min       | 5 min       | copier-coller                       |
| total              | 1h10         | 45 min      |                                     |

&nbsp;

### <p style="color:Olive;">Explications et réflexions</p>

**Comment pourrait-on réécrire la ligne suivante sans l'opérateur ternaire (avec des if et else) ?**

- 'if (value.value === props.answer) {
  model.value = QuestionState.Correct;
  } else {
  model.value = QuestionState.Wrong;
  }'

**Comment pourrait-on réécrire autrement la logique du watch sur value ?**

- on peut utilisé un computed: 'const model = computed(() => {
  return value.value === null ? QuestionState.Empty : QuestionState.Fill
  })'

&nbsp;

### <p style="color:Olive;">Difficultés</p>

Dans QuestionCheckbox, j'arrivais pas ce que l'état correct soit assigné uniquement si toute les réponses étaient toutes justes. j'ai demandé à ChatGPT et il m'a donné la réponse.

&nbsp;

### <p style="color:Olive;">Pour aller plus loin</p>

je pourait changer les watch par des computed
&nbsp;

## <p style="color:Olive;">Semaine 5</p>

### <p style="color:Olive;">Tâche et temps</p>

| tâche             | temps estimé | temps passé | commentaires |
| ----------------- | ------------ | ----------- | ------------ |
| Réponse détaillée | 15 min       | 15 min      |              |
| Style             | 15 min       | 10 min      |              |
| total             | 30 min       | 25 min      |              |

&nbsp;

### <p style="color:Olive;">Explications et réflexions</p>

**Ajouter un computed answerText dans QuestionRadio.vue et remplacer props.answer par answerText dans le template.Expliquer pourquoi on a fait ce changement ainsi que le code du computed.**

- On recherche dans props.options une option qui correspond à la valeur de props.answer. Si une option correspondante est trouvée, elle est retournée. Le computed crée une propriété réactive. la valeur sera recalculée automatiquement si props.answer ou props.options changent.

**Que se passe-t-il lorsqu'on ne met pas de valeur à answer-detail ? Est-ce satisfaisant ? Si ce n'est pas le cas, proposer une amélioration.**

- la prop answerDetail a une valeur par défaut vide (default: ''), ce qui signifie que si aucune valeur n'est fournie par le parent, answerDetail sera une chaîne vide. On peut améliorer en fournissant un texte par défaut.
  &nbsp;

## <p style="color:Olive;">Semaine 6</p>

### <p style="color:Olive;">Tâche et temps</p>

| tâche       | temps estimé | temps passé | commentaires |
| ----------- | ------------ | ----------- | ------------ |
| Déploiement | 10 min       | 10 min      |              |
| total       | 10 min       | 10 min      |              |

&nbsp;

### <p style="color:Olive;">Explications et réflexions</p>

**Expliquer votre démarche pour les améliorations que vous avez choisies :**
- **QuestionCheckbox.vue : Sélectionner plusieurs réponses**
J'ai choisi de faire différents types de questions pour varier et avoir plus de choix sur comment amener la question.

  - CheckBox a presque le même code que Radio, donc je me suis basé sur le code que j'avais déjà écrit pour le squelette principale. Et j'ai trouvé sur internet "https://getbootstrap.com/docs/5.0/forms/checks-radios/" comment écrire le code pour avoir plusieurs choix à cocher. Le plus compliqué était qu'il fallait que je trouve comment accèpter une réponse sous forme de liste, mais il fallait juste changer type de answer. Une fois fait, il fallait que les répoonses que donne l'utilisateur soit toutes dans la liste de réponse. Alors j'ai fait un watch qui vérifie si il y a le bon nombre de réponse et que les réponses de l'utilisateur soient dans la liste answer.

- **QuestionSelect.vue : Sélectionner une réponse dans une liste déroulante**
  - C'est la même chose que Radio, j'ai juste été sur internet pour voir comment faire le menu déroulant.https://getbootstrap.com/docs/5.0/forms/select/

- **Accepter plusieurs réponses possibles pour QuestionText.vue (par exemple, "2" ou "deux")**

- **Adapter le Trivia pour pouvoir y jouer**

&nbsp;

# <p style="color:Olive;">Lien du site</p>
https://hepl-bs21inf5.github.io/sem07-project-MathysBoesigerP58887/