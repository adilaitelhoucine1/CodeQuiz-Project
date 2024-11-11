function openModal() {
    document.getElementById('quiz-modal').classList.remove('hidden');
  }


  function closeModal() {
    document.getElementById('quiz-modal').classList.add('hidden');
  }
  let mainSection = document.getElementById("main-section");
  let Enregistrer = document.querySelector("#Enregistrer");
  
  Enregistrer.addEventListener("click", () => {
    let quiz_title = document.querySelector("#quiz-title").value;
    let quiz_level = document.getElementById("select").value;
  
    // Met à jour uniquement le contenu de certaines parties du main-section
    document.getElementById("quiz-title-display").textContent = quiz_title;
    document.getElementById("question-count").textContent = "Questions : 10";
  
    // Réajouter les événements aux boutons après chaque mise à jour
    let editButton = document.getElementById("edit-quiz");
    let deleteButton = document.getElementById("delete-quiz");
  
    // Fonction pour le bouton "Modifier"
    editButton.addEventListener("click", () => {
      let newTitle = prompt("Modifier le titre du quiz:", quiz_title);
      if (newTitle) {
        document.getElementById("quiz-title-display").textContent = newTitle;
      }
    });
  
    // Fonction pour le bouton "Supprimer"
    deleteButton.addEventListener("click", () => {
      if (confirm("Êtes-vous sûr de vouloir supprimer ce quiz ?")) {
        mainSection.innerHTML = "<p class='text-red-500'>Quiz supprimé.</p>";
      }
    });
  });
  