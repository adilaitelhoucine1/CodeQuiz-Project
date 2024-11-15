document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const quizId = urlParams.get('id');
  const scoreElement = document.getElementById("score");
  const progressBar = document.getElementById("progressBar");

  let currentQuestionIndex = 0;
  let score = 0;

  const quizzes = JSON.parse(localStorage.getItem("quizzes")) || [];
  const quiz = quizzes.find(q => q.title === quizId);

  if (!quiz) {
      alert("Quiz non trouvé !");
      return;
  }

  document.getElementById("quiz-title").textContent = quiz.title;

  const questionContainer = document.getElementById("question-container");
  const nextBtn = document.getElementById("next-btn");

  // Afficher la question
  function displayQuestion() {
      const question = quiz.questions[currentQuestionIndex];
      questionContainer.innerHTML = `
          <h2 class="text-xl font-semibold">${question.text}</h2>
          ${question.type === 'multiple_choice' ? question.options.map(option => `
              <button class="answer-btn bg-white py-2 px-4 my-2 w-full border" data-answer="${option}">${option}</button>
          `).join('') : ''}
          ${question.type === 'true_false' ? `
              <button class="answer-btn" data-answer="true">Vrai</button>
              <button class="answer-btn" data-answer="false">Faux</button>
          ` : ''}
          ${question.type === 'text_input' ? `
              <input type="text" id="answer-text" class="border py-2 px-4 w-full" placeholder="Entrez votre réponse">
          ` : ''}
      `;
      attachAnswerEventListeners();
  }

  // Gérer les clics sur les réponses
  function attachAnswerEventListeners() {
      const answerBtns = document.querySelectorAll('.answer-btn');
      answerBtns.forEach(btn => {
          btn.addEventListener('click', () => {
              const userAnswer = btn.getAttribute('data-answer');
              const correctAnswer = quiz.questions[currentQuestionIndex].correct_answer;

              if (userAnswer === correctAnswer) {
                  score += 100; // Ajouter 100 points pour une réponse correcte
              }

              scoreElement.textContent = `Score: ${score}`;
              updateProgressBar();
              if (currentQuestionIndex < quiz.questions.length - 1) {
                  nextBtn.disabled = false;
              } else {
                  nextBtn.textContent = "Terminer";
              }
          });
      });

      // Si la question est textuelle, surveiller la saisie
      if (quiz.questions[currentQuestionIndex].type === 'text_input') {
          const textInput = document.getElementById("answer-text");
          textInput.addEventListener("blur", () => {
              const userAnswer = textInput.value.trim().toLowerCase();
              const correctAnswer = quiz.questions[currentQuestionIndex].correct_answer.toLowerCase();

              if (userAnswer === correctAnswer) {
                  score += 100;
              }

              scoreElement.textContent = `Score: ${score}`;
              updateProgressBar();
              if (currentQuestionIndex < quiz.questions.length - 1) {
                  nextBtn.disabled = false;
              } else {
                  nextBtn.textContent = "Terminer";
              }
          });
      }
  }

  // Mettre à jour la barre de progression
  function updateProgressBar() {
      const progress = ((currentQuestionIndex + 1) / quiz.questions.length) * 100;
      progressBar.style.width = `${progress}%`;
  }

  // Passer à la question suivante
  nextBtn.addEventListener("click", () => {
      if (currentQuestionIndex < quiz.questions.length - 1) {
          currentQuestionIndex++;
          displayQuestion();
          nextBtn.disabled = true;
      } else {
          localStorage.setItem('finalScore', score);
          window.location.href = "score.html";
      }
  });

  displayQuestion();
});
