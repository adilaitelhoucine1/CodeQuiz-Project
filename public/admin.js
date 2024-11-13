

const Enregistrer = document.querySelector("#Enregistrer");
const quizCardsContainer = document.getElementById("quiz-cards-container");
let quizIdCounter = 0;




Enregistrer.addEventListener("click", () => {
  let quizTitle = document.querySelector("#quiz-title").value;
  let quizDescription = document.querySelector("#quiz-description").value;
  let quizLevel = document.getElementById("select").value;

  
  let quizCount=document.getElementById("quiz-qu-count").value;

  if (!quizTitle || !quizDescription || !quizCount) {
    alert("3mer layhdik kolxi");
    return;
  }

  const newQuiz = {
    id: ++quizIdCounter,
    title: quizTitle,
    description: quizDescription,
    niveau: quizLevel,
    question_count:quizCount,
    questions: []
  };

  const quizData = JSON.parse(localStorage.getItem("quizData")) || [];
  quizData.push(newQuiz); 
  localStorage.setItem("quizData", JSON.stringify(quizData));

  createQuizCard(newQuiz);

quizTitle= '';
quizDescription= '';
quizIdCounter= '';

});



Enregistrer.addEventListener("click", () => {
  let quizTitle = document.querySelector("#quiz-title").value;
  let quizDescription = document.querySelector("#quiz-description").value;
  let quizLevel = document.getElementById("select").value;
  let quizCount = document.getElementById("quiz-qu-count").value;

  if (!quizTitle || !quizDescription || !quizCount) {
    alert("3mer kolxi a khali");
    return;
  }

  const newQuiz = {
    id: ++quizIdCounter,
    title: quizTitle,
    description: quizDescription,
    niveau: quizLevel,
    question_count: quizCount,
    questions: [] 
  };

  const quizData = JSON.parse(localStorage.getItem("quizData")) ;
  quizData.push(newQuiz);
  localStorage.setItem("quizData", JSON.stringify(quizData)); 

  localStorage.setItem("quizIdCounter", quizIdCounter);

  createQuizCard(newQuiz);

  document.querySelector("#quiz-title").value = '';
  document.querySelector("#quiz-description").value = '';
  document.getElementById("quiz-qu-count").value = '';
});

function createQuizCard(quiz) {
  const quizCard = document.createElement("div");
  quizCard.classList.add("bg-white", "p-6", "rounded-lg", "shadow-lg");
  quizCard.setAttribute("data-id", quiz.id);

  quizCard.innerHTML = `
    <h2 class="text-xl font-semibold text-gray-800 mb-4 quiz-title">${quiz.title}</h2>
    <p class="text-gray-600 mb-2">Description : ${quiz.description}</p>
    <p class="text-gray-600 mb-2">Niveau : ${quiz.niveau}</p>
    <p class="text-gray-600 mb-4">Questions : ${quiz.question_count}</p>
    <div class="flex justify-between">
      <button class="text-indigo-600 hover:underline edit-quiz">Modifier</button>
      <button class="text-red-500 hover:underline delete-quiz">Supprimer</button>
    </div>
  `;


  quizCardsContainer.appendChild(quizCard);


  quizCard.querySelector(".delete-quiz").addEventListener("click", () => {
    console.log(quizCard);
    if (confirm("Êtes-vous sûr de vouloir supprimer ce quiz ?")) {
      
      quizCard.remove();
      const dataquizes = JSON.parse(localStorage.getItem("quizData"));
      const UpdatedQiuzesData = dataquizes.filter(q => q.id !== quiz.id);
      localStorage.setItem("quizData", JSON.stringify(UpdatedQiuzesData));
    }
  });
}

window.addEventListener("DOMContentLoaded", () => {
  const quizData = JSON.parse(localStorage.getItem("quizData"));
  quizData.forEach(quiz => {
    createQuizCard(quiz);
  });
});



