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

var  pop_up_cancel=document.querySelector("#pop-up-cancel");
var pop_up=document.querySelector("#pop-up");
var view=document.querySelector("#view-btn");
console.log(pop_up_cancel);
pop_up_cancel.addEventListener("click",()=>{
    pop_up.style.display='none';
});
view.addEventListener("click",()=>{
    pop_up.style.display='flex';
})
