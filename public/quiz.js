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

 
    let a1=document.querySelector("#A1");
    let a2=document.querySelector("#A2");
    let a3=document.querySelector("#A3");
    let a4=document.querySelector("#A4");

const urlParams = new URLSearchParams(window.location.search);
const quizId = urlParams.get('id');
if (quizId)  
    GetQuizbyID(quizId);    


function GetQuizbyID(quizId) {
    const quiz = quizzes.find(q => q.title.toLowerCase() === quizId.toLowerCase());
    console.log(quiz)
    if (quiz) {
       // let currentQuestionIndex = 0;
      var i=1
               Question_input.textContent = quiz.questions[0].text;
                a1.textContent=quiz.questions[0].options[0];
                a2.textContent=quiz.questions[0].options[1];
                a3.textContent=quiz.questions[0].options[2];
                a4.textContent=quiz.questions[0].options[3];
                Question_count_Int++;
                
        next_btn.addEventListener("click",()=>{
         let  timeLeft = 30;
            if(i<quiz.questions.length){
                Question_input.textContent = quiz.questions[i].text;
                a1.textContent=quiz.questions[i].options[0];
                a2.textContent=quiz.questions[i].options[1];
                a3.textContent=quiz.questions[i].options[2];
                a4.textContent=quiz.questions[i].options[3];

                
                Question_count.textContent=Question_count_Int;
                Question_count_Int++;
                i++
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
        })
        
      
           
           
           // console.log(quiz.questions[0]);
            

            
        
      
}
}