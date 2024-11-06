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
    console.log(Question_count)
    Question_count_Int=parseInt(document.querySelector("#Question-count").textContent); 

 
    let a1=document.querySelector("#A1");
    let a2=document.querySelector("#A2");
    let a3=document.querySelector("#A3");
    let a4=document.querySelector("#A4");
    let allQuestions=[
        {
            body:"C'est le meilleur Joueur au Nador",
            first:"Adil",
            second:"Salah",
            Third:"Abdlatif",
            fourth:"Aymane",
        },
        {
            body:"C'est la meilleure ville dans le maroc",
            first:"Tinghir",
            second:"Ouarzazate",
            Third:"Nador",
            fourth:"Awdyat",
        },
        {
            body:"C'est le meilleur pays au monde",
            first:"Algerie",
            second:"senegal",
            Third:"Côte d'Ivoire",
            fourth:"Cammeron",
        },
        {
            body:"C'est Quoi  le meilleur bootcamp dans le maroc",
            first:"Youcode",
            second:"1337",
            Third:"Zone01",
            fourth:"SoliCode",
        }
    ];
    let i=0;
    
    next_btn.addEventListener("click",()=>{
        if(i<allQuestions.length){
          
            Question_input.textContent=allQuestions[i].body;
            a1.textContent=allQuestions[i].first;
            a2.textContent=allQuestions[i].second;
            a3.textContent=allQuestions[i].Third;
            a4.textContent=allQuestions[i].fourth;
            i++;
        
        
            Question_count_Int++;
            Question_count.textContent=String(Question_count_Int);
            if(i>4){
                window.location.href="www.fb.com"
            }
        }
      
    });
