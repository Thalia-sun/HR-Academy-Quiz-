// =============================
// QUIZ APP SCRIPT
// =============================

// Fragen (falls du keine quizdata.json nutzt)
const quizData = [
    {
        question: "Was ist HTML?",
        a: "Programmiersprache",
        b: "Auszeichnungssprache",
        c: "Datenbank",
        d: "Betriebssystem",
        correct: "b"
    },
    {
        question: "Was macht CSS?",
        a: "Struktur",
        b: "Logik",
        c: "Design",
        d: "Server",
        correct: "c"
    },
    {
        question: "Was ist JavaScript?",
        a: "Markup",
        b: "Styling",
        c: "Programmiersprache",
        d: "Datenbank",
        correct: "c"
    }
];

// DOM Elemente
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");

const answerEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const submitBtn = document.getElementById("submit");

// State
let currentQuiz = 0;
let score = 0;

// Quiz laden
loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentData = quizData[currentQuiz];

    questionEl.innerText = currentData.question;
    a_text.innerText = currentData.a;
    b_text.innerText = currentData.b;
    c_text.innerText = currentData.c;
    d_text.innerText = currentData.d;
}

// Antwort abwählen
function deselectAnswers() {
    answerEls.forEach(answer => (answer.checked = false));
}

// Antwort auswählen
function getSelected() {
    let answer = undefined;

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

// Klick auf Submit
submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>Du hast ${score}/${quizData.length} richtig beantwortet</h2>
                <button onclick="location.reload()">Neustart</button>
            `;
        }
    }
});