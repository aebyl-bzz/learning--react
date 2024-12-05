
const quizData = [
    {
        question: "Was ist die Hauptstadt von Frankreich?",
        answers: ["A) Berlin", "B) Madrid", "C) Paris", "D) Rom"],
        correctAnswer: "C) Paris"
    },
    {
        question: "Was ist die Hauptstadt von Deutschland?",
        answers: ["A) Berlin", "B) Madrid", "C) Paris", "D) Rom"],
        correctAnswer: "A) Berlin"
    }
];
//Hier könnte man noch weitere Fragen dem quiz hinzufügen, wenn man das so wollen würde.

let currentQuestion = 0;
let score = 0;

const questionElement = document.querySelector('.question');
const answerButtons = document.querySelectorAll('.answer');
const scoreElement = document.querySelector('.score');

function startQuiz() {
    showQuestion();
}


function showQuestion() {
    const questionData = quizData[currentQuestion];
    questionElement.textContent = questionData.question;

    answerButtons.forEach((button, index) => {
        button.textContent = questionData.answers[index];
        button.onclick = () => checkAnswer(button);
    });
}


function checkAnswer(button) {
    const selectedAnswer = button.textContent;
    const correctAnswer = quizData[currentQuestion].correctAnswer;

    if (selectedAnswer === correctAnswer) {
        score += 10; // 10 Punkte hinzufügen
        scoreElement.textContent = `Richtige Fragen: ${score}`;
    }

    currentQuestion++;
    if (currentQuestion < quizData.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}


function endQuiz() {
    questionElement.textContent = "Quiz beendet!";
    answerButtons.forEach(button => button.style.display = "none");
    scoreElement.textContent = `Endpunktzahl: ${score}`;
}

window.onload = startQuiz;
