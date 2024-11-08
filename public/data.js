
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
            "correct_answer": "number"
          },
          {
            "question_id": 2,
            "text": "Quel est le résultat de l'expression suivante en JavaScript consloe.log(type of '123')",
            "type": "text-input", 
            "correct_answer": "string"
          },
          {
            "question_id": 3,
            "text": "Quel est le résultat de l'expression suivante en JavaScript '5' + 1 - 2",
            "type": "multiple_choice",
            "options": ["3", "'51'", "15", "'3'"],
            "correct_answer": "'51'"
          },
          {
            "question_id": 4,
            "text": "Quelle méthode JavaScript est utilisée pour convertir une chaîne de caractères en majuscules ?",
            "type": "multiple_choice",
            "options": ["toUpperCase()", "toLowerCase()", "charAt()", "slice()"],
            "correct_answer": "toUpperCase()"
          },
          {
            "question_id": 5,
            "text": "Vrai ou Faux: `null === undefined` retourne `true`.",
            "type": "true_false",
            "correct_answer": "faux"
          }
        ]
      },
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
      }
    ]

  