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
// end navbar script

 // pop code start sg da
const viewButtons = document.querySelectorAll('#view-btn');
const popup = document.getElementById('pop-up');
const popupTitle = document.querySelector('.popup-title'); 
const popupDescription = document.querySelector('.popup-description'); 
const closepop = document.getElementById('pop-up-cancel'); 

// viewButtons.forEach((button, index) => { 

//   button.addEventListener('click', () => { 
    
//     const card = button.closest('.card');

 
//     let title = card.querySelector('h3').textContent;

//     let description = card.querySelector('p').textContent;
    

//     popupTitle.textContent = title; 
//     popupDescription.textContent = description;


//     popup.classList.remove('hidden'); 
//   });
// });

// Fermer le popup
closepop.addEventListener("click",()=>{
  popup.classList.toggle("hidden");
})

//animation



const container = document.querySelector('.container');
window.onscroll = function() {scrollFunction()};
let animation= container.animate(
  [
    { transform: 'translateY(100%)' }, 
    { transform: 'translateY(0%)' }
  ],
  {
    duration: 3000
  }
);
function scrollFunction() {
  if (document.body.scrollTop > 1530|| document.documentElement.scrollTop > 1530) {
    animation.play();
  }else{
    animation.pause();
  }
}
   


const quizCards = Array.from(document.querySelectorAll(".card")); 
quizCards.forEach((card) => {
    const viewButton = card.querySelector("#view-btn");

    viewButton.addEventListener("click", () => {
        const quizId = card.getAttribute("data-id"); 
        loadQuizById(quizId);
    });
});
function loadQuizById(quizId){
// rediger to oother page with quiz id to know with card has beenn selected
    window.location.href = `quiz.html?id=${quizId}`;
}