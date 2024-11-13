
// Navbar toggle script
// var toggleOpen = document.getElementById('toggleOpen');
// var toggleClose = document.getElementById('toggleClose');
// var collapseMenu = document.getElementById('collapseMenu');

// function handleClick() {
//   if (collapseMenu.style.display === 'block') {
//     collapseMenu.style.display = 'none';
//   } else {
//     collapseMenu.style.display = 'block';
//   }
// }

// toggleOpen.addEventListener('click', handleClick);
// toggleClose.addEventListener('click', handleClick);


function loadQuizzes() {
  const quizzes = JSON.parse(localStorage.getItem('quizData'));
  const container = document.querySelector(".quizContainer"); 


  container.innerHTML = '';

  quizzes.forEach((quiz) => {
    const card = document.createElement('div');
    card.classList.add('bg-white', 'shadow-lg', 'w-full', 'h-fit', 'max-w-sm', 'rounded-lg', 'overflow-hidden', 'mx-auto', 'mt-4', 'card');
    card.setAttribute('data-id', quiz.id);

   
    card.innerHTML = `
      <div class="min-h-[256px]">
        <img src="/images/general-quiz.png" class="w-full" alt="${quiz.title}" />
      </div>
      <div class="p-6">
        <h3 class="text-gray-800 text-xl font-bold">${quiz.title}</h3>
        <p class="mt-4 text-sm text-gray-500">${quiz.description}</p>
        <button type="button" class="mt-6 px-5 py-2.5 rounded-lg text-white text-sm bg-blue-600 hover:bg-blue-700 active:bg-blue-600" id="view-btn" data-id="${quiz.id}">View Quiz</button>
      </div>
    `;

    container.appendChild(card);

 
    const viewButton = card.querySelector('#view-btn');
    viewButton.addEventListener('click', () => {
      loadQuizById(quiz.title);
    });
  });
}


function loadQuizById(quiztitle) {
  // Redirect to the quiz page with the quiz ID in the URL
  window.location.href = `quiz.html?id=${quiztitle}`;
}

// Load quizzes when the page loads
window.onload = loadQuizzes;


