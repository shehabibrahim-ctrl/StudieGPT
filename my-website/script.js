// ===== QUESTION BANK =====
const questionBank = [
    // MATTE
    { question: "Vad är 5 + 3?", answers: ["6", "8", "10", "7"], correct: 1 },
    { question: "Vad är 12 - 4?", answers: ["6", "8", "7", "9"], correct: 1 },
    { question: "Vad är 6 x 3?", answers: ["18", "12", "21", "15"], correct: 0 },
    { question: "Vad är 20 / 4?", answers: ["4", "6", "5", "3"], correct: 2 },
    { question: "Vad är 9²?", answers: ["18", "81", "72", "99"], correct: 1 },

    // ENGELSKA
    { question: "Vad betyder 'dog'?", answers: ["Katt", "Hund", "Fågel", "Häst"], correct: 1 },
    { question: "Vad betyder 'school'?", answers: ["Sjukhus", "Skola", "Affär", "Park"], correct: 1 },
    { question: "Vad betyder 'car'?", answers: ["Bil", "Cykel", "Båt", "Tåg"], correct: 0 },
    { question: "Vad betyder 'house'?", answers: ["Dörr", "Fönster", "Hus", "Tak"], correct: 2 },
    { question: "Vad betyder 'book'?", answers: ["Penna", "Bok", "Papper", "Väska"], correct: 1 },

    // SVENSKA
    { question: "Vilken ordklass är 'springer'?", answers: ["Verb", "Substantiv", "Adjektiv", "Pronomen"], correct: 0 },
    { question: "Vad är plural av 'bok'?", answers: ["Boks", "Böcker", "Bokar", "Bokor"], correct: 1 },
    { question: "Vilket är ett adjektiv?", answers: ["Springa", "Blå", "Stol", "Äta"], correct: 1 },
    { question: "Vad är motsatsen till 'stor'?", answers: ["Liten", "Lång", "Bred", "Snabb"], correct: 0 },
    { question: "Vilken mening är korrekt?", answers: ["Han går till skolan.", "Han gå till skolan.", "Han gicka skolan.", "Han gådde skolan."], correct: 0 }
];

// ===== SETTINGS =====
const QUESTIONS_PER_GAME = 10;

let questions = [];
let currentQuestion = 0;
let score = 0;
let answered = false;

// ===== ELEMENTS =====
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");
const quizContainer = document.getElementById("quiz-container");

// ===== SHUFFLE FUNCTION =====
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

// ===== START QUIZ =====
function startQuiz() {
    questions = shuffle([...questionBank]).slice(0, QUESTIONS_PER_GAME);
    currentQuestion = 0;
    score = 0;
    showQuestion();
}

// ===== SHOW QUESTION =====
function showQuestion() {
    answered = false;
    nextBtn.style.display = "none";

    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    answersEl.innerHTML = "";

    const shuffledAnswers = shuffle(
        q.answers.map((answer, index) => ({
            text: answer,
            correct: index === q.correct
        }))
    );

    shuffledAnswers.forEach(answerObj => {
        const button = document.createElement("button");
        button.textContent = answerObj.text;
        button.classList.add("answer-btn");

        button.onclick = () => selectAnswer(button, answerObj.correct);
        answersEl.appendChild(button);
    });
}

// ===== SELECT ANSWER =====
function selectAnswer(button, isCorrect) {
    if (answered) return;

    answered = true;

    const allButtons = document.querySelectorAll(".answer-btn");

    allButtons.forEach(btn => {
        btn.disabled = true;
    });

    if (isCorrect) {
        score++;
        button.style.backgroundColor = "green";
    } else {
        button.style.backgroundColor = "red";

        // Highlight correct answer
        allButtons.forEach(btn => {
            if (btn.textContent === questions[currentQuestion].answers[questions[currentQuestion].correct]) {
                btn.style.backgroundColor = "green";
            }
        });
    }

    nextBtn.style.display = "inline-block";
}

// ===== NEXT BUTTON =====
nextBtn.addEventListener("click", () => {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

// ===== SHOW RESULT =====
function showResult() {
    quizContainer.style.display = "none";
    resultEl.style.display = "block";
    scoreEl.textContent = "Du fick " + score + " av " + questions.length + " rätt!";
}

// ===== START =====
startQuiz();