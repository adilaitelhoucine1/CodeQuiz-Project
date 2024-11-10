// navbar script
var toggleOpen = document.getElementById('toggleOpen');
var toggleClose = document.getElementById('toggleClose');
var collapseMenu = document.getElementById('collapseMenu');

function handleClick() {
  if (collapseMenu.style.display === 'block') {
    collapseMenu.style.display = 'none';
  } else {
    collapseMenu.style.display = 'block';
  }
}

toggleOpen.addEventListener('click', handleClick);
toggleClose.addEventListener('click', handleClick);

// JavaScript to handle answer selection
const answers = document.querySelectorAll(".answer");
answers.forEach((element) => {
  element.addEventListener("click", () => {
    answers.forEach((e) => e.classList.remove("bg-sky-700", "text-white"));
    element.classList.add("bg-sky-700", "text-white");
  });
});

// Question script start from here
let Question_input = document.querySelector("#Question-input");
let next_btn = document.querySelector("#next-btn");
let Question_count = document.querySelector("#Question-count");
let timerElement = document.getElementById("timer");

let Question_count_Int = parseInt(Question_count.textContent);
console.log(Question_count.textContent);

const reponse_text = document.querySelector("#reponse-text");
const TrurFalse_content = document.querySelector("#TrurFalse-content");
const Qcm_content = document.querySelector("#Qcm-content");
const question_type = document.querySelector("#question-type");
let progress = 0;

let a1 = document.querySelector("#A1");
let a2 = document.querySelector("#A2");
let a3 = document.querySelector("#A3");
let a4 = document.querySelector("#A4");
let qcm_btn = document.querySelectorAll(".qcm-btn");
let multiple_btn = document.querySelectorAll(".multiple-btn");
let vrai_btn = document.querySelector("#vrai-btn");
let faux_btn = document.querySelector("#faux-btn");
let explication = document.querySelector("#explication");
let question_length = document.querySelector(".question-length");

let correctAnswers = [];
let incorrectAnswers = [];

let text_input_user = document.getElementById("text-input-user");
let score = document.getElementById("score");
let score_int = parseInt(score.textContent);

const urlParams = new URLSearchParams(window.location.search);
const quizId = urlParams.get('id');



if (quizId) {
    localStorage.removeItem("correctAnswers");  // Réinitialiser les bonnes réponses
    localStorage.removeItem("incorrectAnswers");  // Réinitialiser les mauvaises réponses
    localStorage.removeItem("finalScore");
  GetQuizbyID(quizId);
  localStorage.setItem("qui-id", quizId);

}

function GetQuizbyID(quizId) {
  const quiz = quizzes.find(q => q.title.toLowerCase() === quizId.toLowerCase());
  localStorage.setItem("quizcount", quiz.questions.length);
  if (quiz) {
    question_length.textContent=quiz.questions.length;
    let i = 0;
    

  next_btn.textContent = "Démarrer Maintenant";


    if (isNaN(Question_count_Int)) {
        Question_count_Int = 1;
      }
    next_btn.addEventListener("click", () => {
      next_btn.textContent = "Suivant";

      if (i < quiz.questions.length) {

        const question = quiz.questions[i];
        Question_input.textContent = question.text;

        
        TrurFalse_content.style.display = 'none';
        Qcm_content.style.display = 'none';
        reponse_text.style.display = 'none';

        // Handling question types
        if (question.type === 'true_false') {
          TrurFalse_content.style.display = 'block';
          question_type.textContent = 'Vrai/Faux';
          const correct = question.correct_answer.trim().toLowerCase();
          //qcm_btn.style.display='block'
          qcm_btn.forEach((btn) => {
          
              btn.addEventListener("click", () => {
                const otherButton = btn.nextElementSibling || btn.previousElementSibling;
                if (btn.textContent.trim().toLowerCase() === correct) {
                  btn.style.backgroundColor = 'green';
                  otherButton.style.visibility = 'hidden';
                  score_int += 100;
                  score.textContent = score_int;
                  correctAnswers.push(question);
                } else {
                  btn.style.backgroundColor = 'red';
                  incorrectAnswers.push(question);
                }

                localStorage.setItem("correctAnswers", JSON.stringify(correctAnswers));
                localStorage.setItem("incorrectAnswers", JSON.stringify(incorrectAnswers));
              });
              btn.style.visibility='visible';
              btn.style.color='black';
              btn.style.backgroundColor='white';

              // Mark the button as clicked to avoid attaching multiple event listeners
             // btn.setAttribute('data-clicked', 'true');
       
          });
        } else if (question.type === 'multiple_choice') {
          Qcm_content.style.display = 'block';
          question_type.textContent = 'QCM (Questions à Choix Multiples)';
          a1.style.backgroundColor='white';
          a1.style.color='black';
          a2.style.backgroundColor='white';
          a2.style.color='black';
          a3.style.backgroundColor='white';
          a3.style.color='black';
          a4.style.backgroundColor='white';
          a4.style.color='black';

                a1.textContent=question.options[0];
                a2.textContent=question.options[1];
                a3.textContent=question.options[2];
                a4.textContent=question.options[3];

          const correct = question.correct_answer.trim().toLowerCase();

          multiple_btn.forEach((btn) => {
            //if (!btn.hasAttribute('data-clicked')) {
              btn.addEventListener("click", () => {
                if (btn.textContent.trim().toLowerCase() === correct) {
                  btn.style.backgroundColor = 'green';
                  score_int += 100;
                  score.textContent = score_int;
                  correctAnswers.push(question);
                } else {
                  btn.style.backgroundColor = 'red';
                  incorrectAnswers.push(question);
                }

                localStorage.setItem("correctAnswers", JSON.stringify(correctAnswers));
                localStorage.setItem("incorrectAnswers", JSON.stringify(incorrectAnswers));
              });

             // btn.setAttribute('data-clicked', 'true');
            // }else{
            //     btn.style.backgroundColor='white';
            //     btn.style.color='black';
            // }
          });
        } else if (question.type === 'text-input') {
          reponse_text.style.display = 'block';
          question_type.textContent = 'Réponse Textuelle';

          const userInput = document.getElementById("text-input-user");
          userInput.value = '';

          userInput.addEventListener("blur", () => {
            const userAnswer = userInput.value.trim();
            const correctAnswer = question.correct_answer.trim();

            if (userAnswer === correctAnswer) {
              score_int += 100;
              score.textContent = score_int;
              correctAnswers.push(question);
            } else {
              incorrectAnswers.push(question);
            }

            localStorage.setItem("correctAnswers", JSON.stringify(correctAnswers));
            localStorage.setItem("incorrectAnswers", JSON.stringify(incorrectAnswers));
          });
        }

        // Mise à jour du compteur de questions
        Question_count.textContent = Question_count_Int;
        Question_count_Int++;

        // Incrémenter i uniquement si le nombre de questions n'est pas atteint
        if (i < quiz.questions.length) {
          i++;
        }

        // Mise à jour de la barre de progression
        if (progress < 100) {
          progress += 100 / quiz.questions.length;
          const progressBar = document.getElementById("progressBar");
          progressBar.style.width = progress + '%';
        }

        localStorage.setItem("finalScore", score_int);
      } else {
        window.location.href = "/public/score.html";
      }
    });

    // Timer logic
    let timeLeft = 15* quiz.questions.length;
    const timerInterval = setInterval(() => {
      if (timeLeft <= 0 || i >= quiz.questions.length) { 
        localStorage.setItem("temps-total",timeLeft);
        clearInterval(timerInterval);
        timerElement.textContent = "Temps écoulé!";
        
         window.location.href = "/public/score.html";
      } else {
        timerElement.textContent = `${timeLeft} s`;
        timeLeft--;
      }
    }, 1000);
  }
}
