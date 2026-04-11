// =============================
// QUIZ FIX FÜR BESTEHENDES HTML
// =============================

// Fragen (kannst du später erweitern)
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
        b: "Design",
        c: "Logik",
        d: "Server",
        correct: "b"
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

// =============================
// ELEMENTE (MUSS ZU DEINEM HTML PASSEN)
// =============================

const questionEl = document.getElementById("question");

const answerEls = document.querySelectorAll(".answer");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const submitBtn = document.getElementById("submit");

// Ergebnis Bereich (falls vorhanden)
const quizContainer = document.getElementById("quiz");
const resultContainer = document.getElementById("result");

// =============================
// STATE
// =============================

let currentQuiz = 0;
let score = 0;

// =============================
// INIT
// =============================

loadQuiz();

// =============================
// QUIZ LADEN
// =============================

function loadQuiz() {
    deselectAnswers();

    const currentData = quizData[currentQuiz];

    questionEl.innerText = currentData.question;
    a_text.innerText = currentData.a;
    b_text.innerText = currentData.b;
    c_text.innerText = currentData.c;
    d_text.innerText = currentData.d;
}

// =============================
// DESELECT
// =============================

function deselectAnswers() {
    answerEls.forEach(el => el.checked = false);
}

// =============================
// AUSGEWÄHLTE ANTWORT
// =============================

function getSelected() {
    let answer = undefined;

    answerEls.forEach(el => {
        if (el.checked) {
            answer = el.id;
        }
    });

    return answer;
}

// =============================
// SUBMIT LOGIK
// =============================

submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    if (!answer) return;

    if (answer === quizData[currentQuiz].correct) {
        score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        showResult();
    }
});

// =============================
// RESULT
// =============================

function showResult() {
    if (quizContainer) quizContainer.style.display = "none";

    if (resultContainer) {
        resultContainer.style.display = "block";
        resultContainer.innerHTML = `
            <h2>Ergebnis</h2>
            <p>Du hast ${score} von ${quizData.length} richtig</p>
            <button onclick="location.reload()">Neustart</button>
        `;
    } else {
        alert(`Du hast ${score} von ${quizData.length} richtig`);
        location.reload();
    }
}