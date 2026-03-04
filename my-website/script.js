// ===== QUESTION BANK =====
const questionBank = [
    // MATEMATIK (17 frågor)
    { question: "Vad är 7 + 6?", answers: ["12", "13", "14", "15"], correct: 1 },
    { question: "Vad är 15 - 9?", answers: ["5", "6", "7", "8"], correct: 1 },
    { question: "Vad är 4 x 5?", answers: ["20", "9", "15", "25"], correct: 0 },
    { question: "Vad är 36 / 6?", answers: ["5", "6", "7", "8"], correct: 1 },
    { question: "Vad är 8²?", answers: ["16", "56", "64", "72"], correct: 2 },
    { question: "Vad är 3 x 7?", answers: ["21", "24", "20", "18"], correct: 0 },
    { question: "Vad är 100 / 4?", answers: ["20", "25", "30", "40"], correct: 1 },
    { question: "Vad är 9 + 12?", answers: ["20", "21", "22", "23"], correct: 3 },
    { question: "Vad är 18 - 7?", answers: ["10", "11", "12", "13"], correct: 1 },
    { question: "Vad är 5 x 6?", answers: ["25", "30", "35", "20"], correct: 1 },
    { question: "Vad är 49 / 7?", answers: ["6", "7", "8", "9"], correct: 1 },
    { question: "Vad är 11 + 14?", answers: ["23", "24", "25", "26"], correct: 0 },
    { question: "Vad är 20 - 13?", answers: ["6", "7", "8", "9"], correct: 1 },
    { question: "Vad är 6 x 8?", answers: ["42", "46", "48", "52"], correct: 2 },
    { question: "Vad är 64 / 8?", answers: ["6", "7", "8", "9"], correct: 2 },
    { question: "Vad är 13 + 19?", answers: ["30", "31", "32", "33"], correct: 3 },
    { question: "Vad är 15 - 7?", answers: ["7", "8", "9", "10"], correct: 1 },
  
    // ENGELSKA (16 frågor)
    { question: "Vad betyder 'cat'?", answers: ["Katt", "Hund", "Mus", "Fågel"], correct: 0 },
    { question: "Vad betyder 'blue'?", answers: ["Röd", "Grön", "Blå", "Gul"], correct: 2 },
    { question: "Vad betyder 'teacher'?", answers: ["Lärare", "Elev", "Skola", "Bok"], correct: 0 },
    { question: "Vad betyder 'window'?", answers: ["Dörr", "Fönster", "Tak", "Vägg"], correct: 1 },
    { question: "Vad betyder 'table'?", answers: ["Stol", "Bord", "Bänk", "Soffa"], correct: 1 },
    { question: "Vad betyder 'dog'?", answers: ["Hund", "Katt", "Får", "Kaniner"], correct: 0 },
    { question: "Vad betyder 'book'?", answers: ["Bok", "Penna", "Papper", "Väska"], correct: 0 },
    { question: "Vad betyder 'school'?", answers: ["Skola", "Bibliotek", "Hem", "Affär"], correct: 0 },
    { question: "Vad betyder 'door'?", answers: ["Fönster", "Tak", "Dörr", "Vägg"], correct: 2 },
    { question: "Vad betyder 'chair'?", answers: ["Bord", "Stol", "Soffa", "Bänk"], correct: 1 },
    { question: "Vad betyder 'apple'?", answers: ["Apelsin", "Banan", "Äpple", "Päron"], correct: 2 },
    { question: "Vad betyder 'milk'?", answers: ["Vatten", "Mjölk", "Juice", "Te"], correct: 1 },
    { question: "Vad betyder 'rain'?", answers: ["Sol", "Regn", "Snö", "Moln"], correct: 1 },
    { question: "Vad betyder 'house'?", answers: ["Hus", "Tak", "Fönster", "Dörr"], correct: 0 },
    { question: "Vad betyder 'car'?", answers: ["Bil", "Cykel", "Båt", "Tåg"], correct: 0 },
    { question: "Vad betyder 'friend'?", answers: ["Vän", "Fiende", "Bror", "Syster"], correct: 0 },
  
    // SVENSKA (17 frågor)
    { question: "Vilken ordklass är 'springer'?", answers: ["Verb", "Substantiv", "Adjektiv", "Pronomen"], correct: 0 },
    { question: "Vilket är ett adjektiv?", answers: ["Springa", "Blå", "Stol", "Äta"], correct: 1 },
    { question: "Vad är plural av 'bok'?", answers: ["Boks", "Böcker", "Bokar", "Bokor"], correct: 1 },
    { question: "Vad är motsatsen till 'stor'?", answers: ["Liten", "Lång", "Bred", "Snabb"], correct: 0 },
    { question: "Vilken mening är korrekt?", answers: ["Han går till skolan.", "Han gå till skolan.", "Han gicka skolan.", "Han gådde skolan."], correct: 0 },
    { question: "Vilken ordklass är 'snabbt'?", answers: ["Verb", "Adverb", "Substantiv", "Adjektiv"], correct: 1 },
    { question: "Vilket är plural av 'hus'?", answers: ["Hus", "Husen", "Husor", "Husar"], correct: 1 },
    { question: "Vilken ordklass är 'glad'?", answers: ["Substantiv", "Verb", "Adjektiv", "Adverb"], correct: 2 },
    { question: "Vad betyder 'springa'?", answers: ["Att gå", "Att springa", "Att sitta", "Att stå"], correct: 1 },
    { question: "Vilken ordklass är 'dem'?", answers: ["Pronomen", "Verb", "Adjektiv", "Substantiv"], correct: 0 },
    { question: "Vad är motsatsen till 'kort'?", answers: ["Lång", "Små", "Bred", "Tjock"], correct: 0 },
    { question: "Vilket ord är substantiv?", answers: ["Katt", "Springa", "Snabb", "Grönt"], correct: 0 },
    { question: "Vilket ord är verb?", answers: ["Skriva", "Blå", "Bord", "Glad"], correct: 0 },
    { question: "Vilket ord är adjektiv?", answers: ["Hus", "Snabb", "Springa", "Bok"], correct: 1 },
    { question: "Vilken mening är korrekt?", answers: ["Hon läser en bok.", "Hon läsar en bok.", "Hon läsa bok.", "Hon läsade bok."], correct: 0 },
    { question: "Vad är plural av 'hund'?", answers: ["Hunder", "Hundar", "Hundor", "Hunds"], correct: 1 },
    { question: "Vilken ordklass är 'roligt'?", answers: ["Adjektiv", "Substantiv", "Adverb", "Verb"], correct: 2 }
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