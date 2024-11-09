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
        //
        answers.forEach((e) => e.classList.remove("bg-sky-700", "text-white"));
        
        element.classList.add("bg-sky-700", "text-white");
      });
 });
// Question script start from here
    Question_input=document.querySelector("#Question-input");
    next_btn=document.querySelector("#next-btn");   
    Question_count=document.querySelector("#Question-count");    
    let timerElement = document.getElementById("timer"); // élément où afficher le temps

    Question_count_Int=parseInt(document.querySelector("#Question-count").textContent); 

const reponse_text=document.querySelector("#reponse-text");    
const TrurFalse_content=document.querySelector("#TrurFalse-content");    
const Qcm_content=document.querySelector("#Qcm-content");    
const question_type=document.querySelector("#question-type");      
let progress = 0;

//let quiz_container=document.getElementById("quiz-container"); corect answer effects
let a1=document.querySelector("#A1");
let a2=document.querySelector("#A2");
let a3=document.querySelector("#A3");
let a4=document.querySelector("#A4");
let qcm_btn=document.querySelectorAll(".qcm-btn");
let multiple_btn=document.querySelectorAll(".multiple-btn");
let vrai_btn=document.querySelector("#vrai-btn");
let faux_btn=document.querySelector("#faux-btn");
let explication=document.querySelector("#explication");
let correctAnswers = [];  
let incorrectAnswers = [];


let text_input_user=document.getElementById("text-input-user");
let score=document.getElementById("score");
let score_int=parseInt(document.getElementById("score").textContent);




const urlParams = new URLSearchParams(window.location.search);
const quizId = urlParams.get('id');

if (quizId)  {
  GetQuizbyID(quizId);    
  localStorage.setItem("qui-id",quizId);
}


function GetQuizbyID(quizId) {
    const quiz = quizzes.find(q => q.title.toLowerCase() === quizId.toLowerCase());
  
    if (quiz) {
      var i=0;
              //  Question_input.textContent = quiz.questions[0].text;
              //   a1.textContent=quiz.questions[0].options[0];
              //   a2.textContent=quiz.questions[0].options[1];
              //   a3.textContent=quiz.questions[0].options[2];
              //   a4.textContent=quiz.questions[0].options[3];
              //   Question_count_Int++;
              //   Qcm_content.style.display='block';
              //   TrurFalse_content.style.display='none';
              //   reponse_text.style.display='none';
              //   question_type.textContent='QCM (Questions à Choix Multiples)';
                
              //pour initializer la 1ere interface
              next_btn.textContent="Démarrer Maintenant";
              
           
              next_btn.addEventListener("click", () => {
                next_btn.textContent = "Suivant";
            
       
                if (i < quiz.questions.length) {
                    Question_input.textContent = quiz.questions[i].text;
                    const question = quiz.questions[i];
            
           
                    TrurFalse_content.style.display = 'none';
                    Qcm_content.style.display = 'none';
                    reponse_text.style.display = 'none';
            
                  
                    if (question.type === 'true_false') {
                        TrurFalse_content.style.display = 'block';
                        question_type.textContent = 'Vrai/Faux';
                        const correct = question.correct_answer.trim().toLowerCase();
            
                   
                        qcm_btn.forEach((btn) => {
                            const newBtn = btn.cloneNode(true);
                            btn.replaceWith(newBtn);
            
                            newBtn.addEventListener("click", () => {
                                const otherButton = newBtn.nextElementSibling || newBtn.previousElementSibling;
                                if (newBtn.textContent.trim().toLowerCase() === correct) {
                                    newBtn.style.backgroundColor = 'green';
                                    otherButton.style.visibility = 'hidden';
                                    score_int += 100;
                                    score.textContent = score_int;
                                    correctAnswers.push(question);
                                } else {
                                    newBtn.style.backgroundColor = 'red';
                                    incorrectAnswers.push(question);
                                }
            
                    
                                localStorage.setItem("correctAnswers", JSON.stringify(correctAnswers));
                                localStorage.setItem("incorrectAnswers", JSON.stringify(incorrectAnswers));
                            });
                        });
                    } else if (question.type === 'multiple_choice') {
                        Qcm_content.style.display = 'block';
                        question_type.textContent = 'QCM (Questions à Choix Multiples)';
                        [a1, a2, a3, a4].forEach((option, index) => {
                            option.textContent = question.options[index];
                        });
                        const correct = question.correct_answer.trim().toLowerCase();
            
                        
                        multiple_btn.forEach((btn) => {
                            const newBtn = btn.cloneNode(true);
                            btn.replaceWith(newBtn);
            
                            newBtn.addEventListener("click", () => {
                                if (newBtn.textContent.trim().toLowerCase() === correct) {
                                    newBtn.style.backgroundColor = 'green';
                                    score_int += 100;
                                    score.textContent = score_int;
                                    correctAnswers.push(question);
                                } else {
                                    newBtn.style.backgroundColor = 'red';
                                    incorrectAnswers.push(question);
                                }
            
                                localStorage.setItem("correctAnswers", JSON.stringify(correctAnswers));
                                localStorage.setItem("incorrectAnswers", JSON.stringify(incorrectAnswers));
                            });
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
            
                 
                    Question_count.textContent = Question_count_Int;
                    Question_count_Int++;
                    i++;
            
                  
                    localStorage.setItem("finalScore", score_int);
            
                    // Met à jour la barre de progression
                    if (progress < 100) {
                        progress += 100 / quiz.questions.length;
                        const progressBar = document.getElementById("progressBar");
                        progressBar.style.width = progress + '%';
                    }
                } else {
                  
                    window.location.href = "/public/score.html";
                }
            });
            
            
        // timer
        let  timeLeft = 15*quiz.questions.length;
        const timerInterval = setInterval(() => {
          if (timeLeft <= 0) {
              clearInterval(timerInterval);
              timerElement.textContent = "Temps écoulé!";
              //window.location.href="/public/score.html";
          } else {
              timerElement.textContent = `${timeLeft} s`;
              timeLeft--;
          }
      }, 1000);
    
}
}