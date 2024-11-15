const quizzes = [
    {
      "id": 1,
      "title": "javascript",
      "description": "Testez vos connaissances en JavaScript.",
      "niveau":"Deficile",
      "question-count":10,
      "questions": [
        {
          "question_id": 1,
          "text": "Que retourne `typeof NaN` en JavaScript?",
          "type": "multiple_choice",
          "options": ["string", "undefined", "number", "boolean"],
          "correct_answer": "number",
          "explication": "La fonction `typeof NaN` retourne 'number' parce que NaN est considéré comme un type numérique en JavaScript, même s'il représente une valeur non-numérique."
        },
        {
          "question_id": 2,
          "text": "Quel est le résultat de `console.log(typeof '123')`?",
          "type": "text-input",
          "correct_answer": "string",
          "explication": "`typeof` sur une chaîne retourne 'string'."
        },
        {
          "question_id": 3,
          "text": "Vrai ou Faux: `null === undefined` retourne `true`.",
          "type": "true_false",
          "correct_answer": "faux",
          "explication": "`null === undefined` retourne `false` car ils sont de types différents."
        },
        {
          "question_id": 4,
          "text": "Quel mot-clé est utilisé pour déclarer une variable de portée bloc en JavaScript?",
          "type": "multiple_choice",
          "options": ["var", "let", "const", "function"],
          "correct_answer": "let",
          "explication": "`let` déclare une variable de portée bloc."
        },
        {
          "question_id": 5,
          "text": "Que retourne `typeof []` en JavaScript?",
          "type": "text-input",
          "correct_answer": "object",
          "explication": "`typeof []` retourne 'object' car les tableaux sont des objets en JavaScript."
        },
        {
          "question_id": 6,
          "text": "Vrai ou Faux: `==` compare les valeurs sans tenir compte du type.",
          "type": "true_false",
          "correct_answer": "vrai",
          "explication": "`==` effectue une conversion de type avant la comparaison."
        },
        {
          "question_id": 7,
          "text": "Quelle méthode ajoute un élément à la fin d'un tableau?",
          "type": "multiple_choice",
          "options": ["push", "pop", "shift", "unshift"],
          "correct_answer": "push",
          "explication": "`push` ajoute un élément à la fin d'un tableau."
        },
        {
          "question_id": 8,
          "text": "Comment déclare-t-on une fonction fléchée?",
          "type": "text-input",
          "correct_answer": "() => {}",
          "explication": "Les fonctions fléchées sont déclarées avec `() =>`."
        },
        {
          "question_id": 9,
          "text": "Vrai ou Faux: `const` permet de redéfinir une variable.",
          "type": "true_false",
          "correct_answer": "faux",
          "explication": "`const` crée une constante non redéfinissable."
        },
        {
          "question_id": 10,
          "text": "Quel est le résultat de `2 + '2'` en JavaScript?",
          "type": "multiple_choice",
          "options": ["22", "4", "undefined", "NaN"],
          "correct_answer": "22",
          "explication": "En JavaScript, `2 + '2'` effectue une concaténation et retourne '22'."
        }
      ]
    },
    {
      "id": 2,
      "title": "html-css",
      "description": "Découvrez vos connaissances en HTML et CSS.",
      "question-count":10,
      "niveau":"Facile",
      "questions": [
        {
          "question_id": 1,
          "text": "Quel est le but de l'élément `<header>` en HTML?",
          "type": "multiple_choice",
          "options": ["Contient le contenu principal", "Définit une barre de navigation", "Représente l'en-tête d'une section", "Ajoute des métadonnées"],
          "correct_answer": "Représente l'en-tête d'une section"
        },
        {
          "question_id": 2,
          "text": "Que signifie CSS?",
          "type": "text-input",
          "correct_answer": "Cascading Style Sheets"
        },
        {
          "question_id": 3,
          "text": "Quel attribut HTML lie un fichier CSS externe?",
          "type": "multiple_choice",
          "options": ["<link>", "<style>", "<css>", "<stylesheet>"],
          "correct_answer": "<link>"
        },
        {
          "question_id": 4,
          "text": "Que fait 'display: none;' en CSS?",
          "type": "multiple_choice",
          "options": ["Cache avec espace", "Supprime sans espace", "Cache sans espace", "Opacité zéro"],
          "correct_answer": "Cache sans espace"
        },
        {
          "question_id": 5,
          "text": "Vrai ou Faux: 'position: absolute' se positionne par rapport au parent positionné.",
          "type": "true_false",
          "correct_answer": "vrai"
        },
        {
          "question_id": 6,
          "text": "Quelle balise est utilisée pour un lien hypertexte?",
          "type": "text-input",
          "correct_answer": "<a>"
        },
        {
          "question_id": 7,
          "text": "Comment appliquer un style à un id en CSS?",
          "type": "multiple_choice",
          "options": [".id", "#id", "*id", "@id"],
          "correct_answer": "#id"
        },
        {
          "question_id": 8,
          "text": "Que signifie l'attribut `alt` sur une image?",
          "type": "text-input",
          "correct_answer": "texte alternatif"
        },
        {
          "question_id": 9,
          "text": "Vrai ou Faux: 'margin' est l'espace entre le contenu et la bordure.",
          "type": "true_false",
          "correct_answer": "faux"
        },
        {
          "question_id": 10,
          "text": "Comment centrer un élément en CSS?",
          "type": "multiple_choice",
          "options": ["text-align", "align-items", "margin: auto", "justify-content"],
          "correct_answer": "margin: auto"
        }
      ]
    },
    {
      "id": 3,
      "title": "database-sql",
      "description": "Testez vos connaissances en DataBase & SQL.",
      "question-count":10,
      "niveau":"Moyenne",
      "questions": [
        {
          "question_id": 1,
          "text": "Quelle commande SQL extrait des données?",
          "type": "multiple_choice",
          "options": ["INSERT", "UPDATE", "SELECT", "DELETE"],
          "correct_answer": "SELECT"
        },
        {
          "question_id": 2,
          "text": "Que signifie SQL?",
          "type": "text-input",
          "correct_answer": "Structured Query Language"
        },
        {
          "question_id": 3,
          "text": "Quel mot-clé trie les résultats en SQL?",
          "type": "multiple_choice",
          "options": ["ORDER BY", "GROUP BY", "SORT BY", "RANK BY"],
          "correct_answer": "ORDER BY"
        },
        {
          "question_id": 4,
          "text": "Comment ajoute-t-on une colonne en SQL?",
          "type": "multiple_choice",
          "options": ["INSERT", "ADD COLUMN", "UPDATE COLUMN", "ALTER TABLE"],
          "correct_answer": "ALTER TABLE"
        },
        {
          "question_id": 5,
          "text": "Vrai ou Faux: 'DROP TABLE' supprime les lignes sans supprimer la table.",
          "type": "true_false",
          "correct_answer": "faux"
        },
        {
          "question_id": 6,
          "text": "Que fait la clause `WHERE` en SQL?",
          "type": "text-input",
          "correct_answer": "Filtrer les résultats"
        },
        {
          "question_id": 7,
          "text": "Comment combiner deux tables?",
          "type": "multiple_choice",
          "options": ["JOIN", "UNION", "COMBINE", "CONNECT"],
          "correct_answer": "JOIN"
        },
        {
          "question_id": 8,
          "text": "Que fait la commande `DELETE` en SQL?",
          "type": "text-input",
          "correct_answer": "Supprime des lignes"
        },
        {
          "question_id": 9,
          "text": "Vrai ou Faux: 'INDEX' est utilisé pour accélérer les requêtes.",
          "type": "true_false",
          "correct_answer": "vrai"
        },
        {
          "question_id": 10,
          "text": "Quel mot-clé compte les lignes?",
          "type": "multiple_choice",
          "options": ["SUM", "COUNT", "GROUP", "TOTAL"],
          "correct_answer": "COUNT"
        }
      ]
    }
  ];
  localStorage.setItem("quizzes", JSON.stringify(quizzes));
