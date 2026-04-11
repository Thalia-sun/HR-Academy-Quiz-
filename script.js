// =============================
// FULL QUIZ WEBSITE CONTROLLER
// =============================

// =============================
// QUIZ DATEN (Kategorien)
// =============================

const quizzes = {
    html: [
        {
            question: "Was ist HTML?",
            a: "Programmiersprache",
            b: "Auszeichnungssprache",
            c: "Datenbank",
            d: "Betriebssystem",
            correct: "b"
        },
        {
            question: "Was bedeutet HTML?",
            a: "HyperText Markup Language",
            b: "HighText Machine Language",
            c: "Home Tool Markup Language",
            d: "Hyper Transfer Machine Language",
            correct: "a"
        }
    ],
    css: [
        {
            question: "Was macht CSS?",
            a: "Struktur",
            b: "Design",
            c: "Server",
            d: "Datenbank",
            correct: "b"
        }
    ],
    js: [
        {
            question: "Was ist JavaScript?",
            a: "Styling",
            b: "Markup",
            c: "Programmiersprache",
            d: "Datenbank",
            correct: "c"
        }
    ]
};

// =============================
// ELEMENTE
// =============================

const home = document.getElementById("home");
const category = document.getElementById("category");
const quiz = document.getElementById("quiz");
const result = document.getElementById("result");

const startBtn = document.getElementById("start-btn");

const questionEl = document.getElementById("question");

const answerEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");

const scoreText = document.getElementById("score");

// =============================
// STATE
// =============================

let currentCategory = "";
let currentQuizIndex = 0;
let score = 0;
let currentData = [];

// =============================
// NAVIGATION
// =============================

function showScreen(screen) {
    home.style.display = "none";
    category.style.display = "none";
    quiz.style.display = "none";
    result.style.display = "none";

    screen.style.display = "block";
}

// Startseite
startBtn.addEventListener("click", () => {
    showScreen(category);
});

// Kategorie Auswahl
function selectCategory(cat) {
    currentCategory = cat;
    currentData = quizzes[cat];
    currentQuizIndex = 0;
    score = 0;

    showScreen(quiz);
    loadQuiz();
}

// =============================
// QUIZ LOGIK
// =============================

function loadQuiz() {
    deselectAnswers();

    const q = currentData[currentQuizIndex];

    questionEl.innerText = q.question;
    a_text.innerText = q.a;
    b_text.innerText = q.b;
    c_text.innerText = q.c;
    d_text.innerText = q.d;
}

function deselectAnswers() {
    answerEls.forEach(a => a.checked = false);
}

function getSelected() {
    let answer;

    answerEls.forEach(a => {
        if (a.checked) {
            answer = a.id;
        }
    });

    return answer;
}

// =============================
// NEXT BUTTON
// =============================

nextBtn.addEventListener("click", () => {
    const answer = getSelected();

    if (!answer) return;

    if (answer === currentData[currentQuizIndex].correct) {
        score++;
    }

    currentQuizIndex++;

    if (currentQuizIndex < currentData.length) {
        loadQuiz();
    } else {
        showResult();
    }
});

// =============================
// RESULT
// =============================

function showResult() {
    showScreen(result);
    scoreText.innerText = `${score} / ${currentData.length}`;
}

// =============================
// RESTART
// =============================

restartBtn.addEventListener("click", () => {
    showScreen(home);
});