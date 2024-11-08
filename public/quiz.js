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


let text_input_user=document.getElementById("text-input-user");
let score=document.getElementById("score");
let score_int=parseInt(document.getElementById("score").textContent);





const urlParams = new URLSearchParams(window.location.search);
const quizId = urlParams.get('id');

if (quizId)  
    GetQuizbyID(quizId);    


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
                
                
        next_btn.addEventListener("click",()=>{
         
         
            if(i<quiz.questions.length){
                Question_input.textContent = quiz.questions[i].text;
                if(quiz.questions[i].type === 'true_false'){
                 TrurFalse_content.style.display='block';
                 Qcm_content.style.display='none';
                 reponse_text.style.display='none';
                 question_type.textContent='Vrai/Faux';
                 const correct =quiz.questions[i].correct_answer;
                 qcm_btn.forEach((e) => 
                  e.addEventListener("click",()=>{
                    const otherButton = e.nextElementSibling || e.previousElementSibling;
                    if(e.textContent.trim().toLowerCase() == correct.trim().toLowerCase()){
                     e.style.backgroundColor='green';
                     otherButton.style.visibility='hidden';
                     score_int=score_int+100;
                     score.textContent=score_int;
                    }else{
                      e.style.backgroundColor = 'red';                     
                      otherButton.style.visibility = 'hidden'; 
                     
                    }
                  })
                );
                
                }
                if(quiz.questions[i].type === 'multiple_choice'){
                  multiple_btn.forEach((e) => {
                    e.style.backgroundColor = 'white'; 
                    e.style.color = 'black'; 
                });

                  Qcm_content.style.display='block';
                  TrurFalse_content.style.display='none';
                  reponse_text.style.display='none';
                  question_type.textContent='QCM (Questions à Choix Multiples)';
                  a1.textContent=quiz.questions[i].options[0];
                  a2.textContent=quiz.questions[i].options[1];
                  a3.textContent=quiz.questions[i].options[2];
                  a4.textContent=quiz.questions[i].options[3];
                  const correct =quiz.questions[i].correct_answer;
                  multiple_btn.forEach((e) => 
                    e.addEventListener("click",()=>{
                      

                      //const otherButton = e.nextElementSibling || e.previousElementSibling;
                      if(e.textContent.trim().toLowerCase() == correct.trim().toLowerCase()){

                        e.style.backgroundColor='green';
                       score_int=score_int+100;
                       score.textContent=score_int;
                 
                      }else{
                        e.style.backgroundColor = 'red';                     
                       // otherButton.style.visibility = 'hidden'; 
                     
                      }
                    })
                  );
                  
                 
                 }
                if(quiz.questions[i].type === 'text-input'){
                  Qcm_content.style.display='none';
                  TrurFalse_content.style.display='none';
                  reponse_text.style.display='block';
                  question_type.textContent='Réponse Textuelle';
                  
                  // traitement de correct answer
                  document.getElementById("text-input-user").addEventListener("blur", () => {
                    const userAnswer = document.getElementById("text-input-user");
                    
                    
                    const correctAnswer = quiz.questions[i-1].correct_answer;
                    
                    if (userAnswer.value.trim() === correctAnswer) {
                      score_int=score_int+100;
                     score.textContent=score_int;
                
                      
                    }
                });
                 
                 
                 }

               
                
                Question_count.textContent=Question_count_Int;
                Question_count_Int++;
                i++
            }else{
              window.alert("You finished");
            }
            if (progress < 100) {
              progress += 100/(quiz.questions.length  ); 
          // bar animation  
              const progressBar = document.getElementById("progressBar");
              progressBar.animate(
                  [
                      { width: progress+ '%' },
                      { width: progress+ '%' }
                  ],
                  {
                      duration: 300, 
                      fill: "forwards" 
                  }
              );
          }
        })
        // timer
        let  timeLeft = 10*quiz.questions.length;
        const timerInterval = setInterval(() => {
          if (timeLeft <= 0) {
              clearInterval(timerInterval);
              timerElement.textContent = "Temps écoulé!";
          } else {
              timerElement.textContent = `${timeLeft} s`;
              timeLeft--;
          }
      }, 1000);
    
}
}