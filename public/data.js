
   const quizzes= [
    {
      "id": 1,
      "title": "javascript",
      "description": "Testez vos connaissances en JavaScript.",
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
              "text": "Quel est le résultat de l'expression suivante en JavaScript consloe.log(type of '123')",
              "type": "text-input",
              "correct_answer": "string",
              "explication": "La fonction `typeof` appliquée à une chaîne, comme `'123'`, retourne 'string' car le contenu est une chaîne de caractères."
          },
          {
              "question_id": 3,
              "text": "Vrai ou Faux: `null === undefined` retourne `true`.",
              "type": "true_false",
              "correct_answer": "faux",
              "explication": "`null === undefined` retourne `false` car `null` et `undefined` sont deux types différents et `===` vérifie à la fois le type et la valeur."
          }
      ]
  }
  ,
      {
        "id": 2,
        "title": "html-css",
        "description": "Découvrez vos connaissances en HTML.",
        "questions": [
          {
            "question_id": 1,
            "text": "Quel est le but de l'élément <header> en HTML?",
            "type": "multiple_choice",
            "options": ["Contient le contenu principal de la page", "Définit une barre de navigation", "Représente l'en-tête d'une section", "Ajoute des métadonnées à la page"],
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
            "text": "Quel attribut HTML est utilisé pour lier un fichier CSS externe?",
            "type": "multiple_choice",
            "options": ["<link>", "<style>", "<css>", "<stylesheet>"],
            "correct_answer": "<link>"
        },
        {
            "question_id": 4,
            "text": "Quel est l'effet de la propriété CSS 'display: none;'?",
            "type": "multiple_choice",
            "options": ["Cache l'élément mais réserve son espace", "Supprime l'élément sans affecter le flux de la page", "Cache l'élément et ne réserve pas d'espace", "Réduit l'opacité de l'élément à zéro"],
            "correct_answer": "Cache l'élément et ne réserve pas d'espace"
        },
        {
            "question_id": 5,
            "text": "Vrai ou Faux: En CSS, 'position: absolute' positionne l'élément par rapport à son conteneur parent le plus proche qui a une position définie.",
            "type": "true_false",
            "correct_answer": "vrai"
        }
        ]
      },
      {
        "id": 3,
        "title": "database-sql",
        "description": "Testez vos connaissances en  DataBase & SQL QUIZ.",
        "questions": [
          {
              "question_id": 1,
              "text": "Quelle commande SQL est utilisée pour extraire des données d'une base de données?",
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
              "text": "Quel mot-clé SQL est utilisé pour trier les résultats?",
              "type": "multiple_choice",
              "options": ["ORDER BY", "GROUP BY", "SORT BY", "RANK BY"],
              "correct_answer": "ORDER BY"
          },
          {
              "question_id": 4,
              "text": "Laquelle de ces commandes est utilisée pour ajouter une nouvelle colonne dans une table SQL?",
              "type": "multiple_choice",
              "options": ["INSERT", "ADD COLUMN", "UPDATE COLUMN", "ALTER TABLE"],
              "correct_answer": "ALTER TABLE"
          },
          {
              "question_id": 5,
              "text": "Vrai ou Faux: La commande SQL 'DROP TABLE' supprime toutes les lignes d'une table sans supprimer la table elle-même.",
              "type": "true_false",
              "correct_answer": "faux"
          }
      ]
      }
    ]

  