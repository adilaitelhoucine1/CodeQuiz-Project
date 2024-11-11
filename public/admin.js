function openModal() {
    document.getElementById('quiz-modal').classList.remove('hidden');
  }


  function closeModal() {
    document.getElementById('quiz-modal').classList.add('hidden');
  }
let Enregistrer=document.querySelector("#Enregistrer");
Enregistrer.addEventListener("click",()=>{
    let quiz_title=document.querySelector("#quiz-title").value;
    let quiz_level=document.getElementById("select").value;
    console.log(quiz_title,quiz_level);
    
})