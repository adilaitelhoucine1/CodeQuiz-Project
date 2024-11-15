document.addEventListener("DOMContentLoaded", () => {
  const quizForm = document.getElementById("quiz-form");
  const questionForm = document.getElementById("question-form");
  const questionFormContainer = document.getElementById("question-form-container");

  // Récupérer les quizzes existants dans localStorage
  let quizzes = JSON.parse(localStorage.getItem("quizzes")) || [];

  quizForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const title = document.getElementById("quiz-title").value;
      const description = document.getElementById("quiz-description").value;
      const category = document.getElementById("quiz-category").value;

      // Ajouter un quiz au tableau
      const newQuiz = {
          title,
          description,
          category,
          questions: []
      };

      quizzes.push(newQuiz);
      localStorage.setItem("quizzes", JSON.stringify(quizzes));
      alert("Quiz créé avec succès !");

      // Afficher le formulaire des questions
      questionFormContainer.classList.remove("hidden");
  });

  questionForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const questionText = document.getElementById("question-text").value;
      const questionType = document.getElementById("question-type").value;
      const correctAnswer = document.getElementById("correct-answer").value;

      const newQuestion = {
          text: questionText,
          type: questionType,
          correct_answer: correctAnswer,
          options: []
      };

      if (questionType === 'multiple_choice') {
          newQuestion.options = [
              document.getElementById("option-1").value,
              document.getElementById("option-2").value,
              document.getElementById("option-3").value,
              document.getElementById("option-4").value
          ];
      }

      // Ajouter la question au dernier quiz
      quizzes[quizzes.length - 1].questions.push(newQuestion);
      localStorage.setItem("quizzes", JSON.stringify(quizzes));

      alert("Question ajoutée avec succès !");
  });
});
