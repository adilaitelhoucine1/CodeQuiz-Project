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

    Question_count_Int=parseInt(document.querySelector("#Question-count").textContent); 

 
    let a1=document.querySelector("#A1");
    let a2=document.querySelector("#A2");
    let a3=document.querySelector("#A3");
    let a4=document.querySelector("#A4");
    let i=0;

        // if(i==0 ){
          
        //     Question_input.textContent=quizzes[i].questions[j].text;
        //     a1.textContent=quizzes[i].questions[j].options[j];
        //     a2.textContent=quizzes[i].questions[j].options[1];
        //     a3.textContent=quizzes[i].questions[j].options[2];
        //     a4.textContent=
        //     i++
        
 
        // }
      


const urlParams = new URLSearchParams(window.location.search);
const quizId = urlParams.get('id');
if (quizId)  
    GetQuizbyID(quizId);    


function GetQuizbyID(quizId) {
    const quiz = quizzes.find(q => q.title.toLowerCase() === quizId.toLowerCase());
    console.log(quiz)
    if (quiz) {
       // let currentQuestionIndex = 0;
      var i=0
      
        next_btn.addEventListener("click",()=>{
            if(i<quiz.questions.length){
                Question_input.textContent = quiz.questions[i].text;
                a1.textContent=quiz.questions[i].options[0];
                a2.textContent=quiz.questions[i].options[1];
                a3.textContent=quiz.questions[i].options[2];
                a4.textContent=quiz.questions[i].options[3];

                console.log(quiz.questions[i].options)
                i++
            }
        })
        
      
           
           
           // console.log(quiz.questions[0]);
            

            
        
      
}
}