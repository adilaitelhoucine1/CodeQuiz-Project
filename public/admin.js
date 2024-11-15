document.addEventListener('DOMContentLoaded', () => {
    loadQuizList();
    setupForm();
});

function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(`${sectionId}-section`).classList.remove('hidden');
}

function loadQuizList() {
    const quizzes = JSON.parse(localStorage.getItem('quizzes')) || [];
    const container = document.getElementById('quiz-list');
    container.innerHTML = ''; // Clear existing content

    if (quizzes.length === 0) {
        container.innerHTML = `<div class="text-gray-500 text-center py-8">Aucun quiz à afficher, créez des quiz.</div>`;
        return;
    }

    quizzes.forEach((quiz, index) => {
        const quizElement = document.createElement('div');
        quizElement.className = 'bg-white rounded-lg shadow-md p-6 mb-4';
        quizElement.innerHTML = `
            <div class="flex justify-between items-start max-sm:flex flex-col">
                <div>
                    <h3 class="text-xl font-bold text-blue-600">${quiz.title}</h3>
                    <p class="text-gray-600 mt-2">${quiz.description}</p>
                    <div class="flex gap-3 mt-3">
                        <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm max-sm:text-center max-sm:m-auto">${quiz.difficulty}</span>
                        <span class="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm max-sm:text-center">${quiz.questions.length} questions</span>
                        <span class="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm max-sm:text-center">${quiz.time} minutes</span>
                    </div>
                </div>
                <div class="flex items-center mt-4">
                    <label class="mr-2">Actif</label>
                    <input type="checkbox" ${quiz.active ? 'checked' : ''} onchange="toggleQuizActive(${index}, this.checked)">
                </div>
                <button onclick="deleteQuiz(${index})" class="bg-red-600 text-white px-4 py-2 mt-5 rounded hover:bg-red-700 max-sm:mt-5">Supprimer</button>
            </div>
        `;
        container.appendChild(quizElement);
    });
}

function toggleQuizActive(index, isActive) {
    let quizzes = JSON.parse(localStorage.getItem('quizzes')) || [];
    quizzes[index].active = isActive;
    localStorage.setItem('quizzes', JSON.stringify(quizzes));
    loadQuizList();
}

function addQuestion() {
    const container = document.getElementById('questions-container');
    const questionDiv = document.createElement('div');
    questionDiv.className = 'border p-4 rounded bg-gray-50 mb-4';

    questionDiv.innerHTML = `
        <div class="flex justify-between items-center mb-4">
            <h3 class="text-lg font-bold">Question</h3>
            <button type="button" onclick="removeQuestion(this)" class="text-red-600 hover:text-red-800">Supprimer</button>
        </div>
        <div class="mb-4">
            <label class="block mb-2">Type de Question</label>
            <select class="question-type w-full p-2 border rounded" onchange="updateQuestionOptions(this)" required>
                <option value="mcq">QCM</option>
                <option value="true-false">Vrai/Faux</option>
                <option value="text">Réponse Textuelle</option>
            </select>
        </div>
        <div class="mb-4">
            <label class="block mb-2">Texte de la Question</label>
            <textarea class="question-text w-full p-2 border rounded" rows="2" required></textarea>
        </div>
        <div class="mb-4">
            <label class="block mb-2">Points</label>
            <input type="number" class="question-points w-full p-2 border rounded" min="1" required>
        </div>
        <div class="options-container mb-4"></div>
        <div class="mb-4">
            <label class="block mb-2">Explication</label>
            <textarea class="explanation w-full p-2 border rounded" rows="2" required></textarea>
        </div>
    `;

    container.appendChild(questionDiv);
    updateQuestionOptions(questionDiv.querySelector('.question-type'));
}

function updateQuestionOptions(selectElement) {
    const optionsContainer = selectElement.closest('div').parentElement.querySelector('.options-container');
    const type = selectElement.value;

    if (type === 'mcq') {
        optionsContainer.innerHTML = `
            <div class="mb-4">
                <label class="block mb-2">Options (une par ligne)</label>
                <textarea class="options w-full p-2 border rounded" rows="4" required></textarea>
            </div>
            <div class="mb-4">
                <label class="block mb-2">Réponse correcte</label>
                <input type="text" class="correct-answer w-full p-2 border rounded" required>
                <small class="text-gray-500">Indiquez l'option correcte telle qu'elle apparaît ci-dessus.</small>
            </div>
        `;
    } else if (type === 'true-false') {
        optionsContainer.innerHTML = `
            <div class="mb-4">
                <label class="block mb-2">Réponse correcte</label>
                <select class="correct-answer w-full p-2 border rounded" required>
                    <option value="vrai">Vrai</option>
                    <option value="faux">Faux</option>
                </select>
            </div>
        `;
    } else if (type === 'text') {
        optionsContainer.innerHTML = `
            <div class="mb-4">
                <label class="block mb-2">Réponse</label>
                <textarea class="correct-answer w-full p-2 border rounded" rows="4" required></textarea>
                <small class="text-gray-500">Indiquez toutes les réponses acceptées, une par ligne.</small>
            </div>
        `;
    }
}

function updateQuestionOptions(selectElement) {
    const optionsContainer = selectElement.closest('div').parentElement.querySelector('.options-container');
    const type = selectElement.value;

    if (type === 'mcq') {
        optionsContainer.innerHTML = `
            <label class="block mb-2">Options (une par ligne)</label>
            <textarea class="options w-full p-2 border rounded" rows="4" required></textarea>
            <label class="block mb-2">Réponse correcte</label>
            <input type="text" class="correct-answer w-full p-2 border rounded" required>
        `;
    } else if (type === 'true-false') {
        optionsContainer.innerHTML = `
            <label class="block mb-2">Réponse correcte</label>
            <select class="correct-answer w-full p-2 border rounded" required>
                <option value="vrai">Vrai</option>
                <option value="faux">Faux</option>
            </select>
        `;
    } else if (type === 'text') {
        optionsContainer.innerHTML = `
            <label class="block mb-2">Réponse</label>
            <textarea class="correct-answer w-full p-2 border rounded" rows="4" required></textarea>
        `;
    }
}

function updateQuestionOptions(selectElement) {
    const optionsContainer = selectElement.closest('div').parentElement.querySelector('.options-container');
    const type = selectElement.value;

    if (type === 'mcq') {
        optionsContainer.innerHTML = `
            <label>Options (une par ligne)</label>
            <textarea class="options" rows="4" required></textarea>
            <label>Réponse correcte</label>
            <input type="text" class="correct-answer" required>
        `;
    } else if (type === 'true-false') {
        optionsContainer.innerHTML = `
            <label>Réponse correcte</label>
            <select class="correct-answer" required>
                <option value="vrai">Vrai</option>
                <option value="faux">Faux</option>
            </select>
        `;
    } else if (type === 'text') {
        optionsContainer.innerHTML = `
            <label>Réponse</label>
            <textarea class="correct-answer" rows="4" required></textarea>
        `;
    }
}

function removeQuestion(button) {
    button.closest('.border').remove();
}

function setupForm() {
    document.getElementById('quiz-form').addEventListener('submit', function(e) {
        e.preventDefault();

        const quiz = {
            title: document.getElementById('quiz-title').value,
            description: document.getElementById('quiz-description').value,
            difficulty: document.getElementById('quiz-difficulty').value,
            time: parseInt(document.getElementById('quiz-time').value),
            active: document.getElementById('quiz-active').checked, // Store active status
            questions: []
        };

        document.querySelectorAll('#questions-container > div').forEach(questionDiv => {
            const questionType = questionDiv.querySelector('.question-type').value;
            const question = {
                type: questionType,
                text: questionDiv.querySelector('.question-text').value,
                points: parseInt(questionDiv.querySelector('.question-points').value),
                explanation: questionDiv.querySelector('.explanation').value
            };

            if (questionType === 'mcq') {
                question.options = questionDiv.querySelector('.options').value.split('\n').map(option => option.trim()).filter(option => option);
                question.correctAnswer = questionDiv.querySelector('.correct-answer').value;
            } else if (questionType === 'true-false') {
                question.correctAnswer = questionDiv.querySelector('.correct-answer').value;
            } else if (questionType === 'text') {
                question.acceptedAnswers = questionDiv.querySelector('.correct-answer').value.split('\n').map(answer => answer.trim()).filter(answer => answer);
            }

            quiz.questions.push(question);
        });

        let quizzes = JSON.parse(localStorage.getItem('quizzes')) || [];
        quizzes.push(quiz);
        localStorage.setItem('quizzes', JSON.stringify(quizzes));

        this.reset();
        document.getElementById('questions-container').innerHTML = '';
        alert('Quiz créé avec succès!');

        loadQuizList();
        showSection('quiz-list');
    });
}

function deleteQuiz(index) {
    if (!confirm('Êtes-vous sûr de vouloir supprimer ce quiz ?')) return;

    let quizzes = JSON.parse(localStorage.getItem('quizzes')) || [];
    quizzes.splice(index, 1);
    localStorage.setItem('quizzes', JSON.stringify(quizzes));

    loadQuizList();
}
