document.addEventListener("DOMContentLoaded", () => {
  const quizListElement = document.getElementById("quiz-list");

  // Récupérer les quizzes depuis localStorage
  const quizzes = JSON.parse(localStorage.getItem("quizzes")) || [];

  // Si aucun quiz n'est trouvé, afficher un message
  if (quizzes.length === 0) {
      quizListElement.innerHTML = "<p>Aucun quiz disponible</p>";
      return;
  }

  // Afficher chaque quiz
  quizzes.forEach(quiz => {
      const quizElement = document.createElement("div");
      quizElement.classList.add("bg-white", "p-4", "rounded", "shadow");
      quizElement.innerHTML = `
          <h2 class="text-xl font-semibold">${quiz.title}</h2>
          <p>${quiz.description}</p>
          <a href="quiz.html?id=${quiz.title}" class="mt-4 inline-block text-blue-500">Commencer</a>
      `;
      quizListElement.appendChild(quizElement);
  });
});
