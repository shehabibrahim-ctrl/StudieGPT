document.addEventListener("DOMContentLoaded", () => {

    // Frågebank (50 frågor totalt)
    const questionBank = [
        // MATEMATIK (15 frågor)
        { question: "Vad är 7 + 6?", answers: ["12","13","14","15"], correct: 1, subject:"matematik" },
        { question: "Vad är 15 - 9?", answers: ["5","6","7","8"], correct: 1, subject:"matematik" },
        { question: "Vad är 4 x 5?", answers: ["20","9","15","25"], correct: 0, subject:"matematik" },
        { question: "Vad är 36 / 6?", answers: ["5","6","7","8"], correct: 1, subject:"matematik" },
        { question: "Vad är 8²?", answers: ["16","56","64","72"], correct: 2, subject:"matematik" },
        { question: "Vad är 12 + 15?", answers: ["27","26","28","29"], correct: 0, subject:"matematik" },
        { question: "Vad är 20 - 7?", answers: ["14","13","12","15"], correct: 1, subject:"matematik" },
        { question: "Vad är 6 x 7?", answers: ["42","36","48","40"], correct: 0, subject:"matematik" },
        { question: "Vad är 81 / 9?", answers: ["8","9","10","7"], correct: 1, subject:"matematik" },
        { question: "Vad är 5²?", answers: ["10","25","20","15"], correct: 1, subject:"matematik" },
        { question: "Vad är 9 + 14?", answers: ["22","23","24","25"], correct: 1, subject:"matematik" },
        { question: "Vad är 18 - 5?", answers: ["12","13","14","15"], correct: 1, subject:"matematik" },
        { question: "Vad är 3 x 8?", answers: ["21","24","27","30"], correct: 1, subject:"matematik" },
        { question: "Vad är 45 / 5?", answers: ["8","9","10","11"], correct: 2, subject:"matematik" },
        { question: "Vad är 10²?", answers: ["50","100","20","25"], correct: 1, subject:"matematik" },

        // ENGELSKA (15 frågor)
        { question: "Vad betyder 'cat'?", answers:["Katt","Hund","Mus","Fågel"], correct:0, subject:"engelska" },
        { question: "Vad betyder 'blue'?", answers:["Röd","Grön","Blå","Gul"], correct:2, subject:"engelska" },
        { question: "Vad betyder 'teacher'?", answers:["Lärare","Elev","Skola","Bok"], correct:0, subject:"engelska" },
        { question: "Vad betyder 'window'?", answers:["Dörr","Fönster","Tak","Vägg"], correct:1, subject:"engelska" },
        { question: "Vad betyder 'table'?", answers:["Stol","Bord","Bänk","Soffa"], correct:1, subject:"engelska" },
        { question: "Vad betyder 'dog'?", answers:["Katt","Hund","Mus","Fågel"], correct:1, subject:"engelska" },
        { question: "Vad betyder 'red'?", answers:["Röd","Blå","Grön","Gul"], correct:0, subject:"engelska" },
        { question: "Vad betyder 'book'?", answers:["Bok","Pennan","Bord","Stol"], correct:0, subject:"engelska" },
        { question: "Vad betyder 'school'?", answers:["Skola","Hem","Lekplats","Affär"], correct:0, subject:"engelska" },
        { question: "Vad betyder 'chair'?", answers:["Soffa","Stol","Bord","Säng"], correct:1, subject:"engelska" },
        { question: "Vad betyder 'sun'?", answers:["Måne","Stjärna","Sol","Sky"], correct:2, subject:"engelska" },
        { question: "Vad betyder 'water'?", answers:["Vatten","Eld","Luft","Jord"], correct:0, subject:"engelska" },
        { question: "Vad betyder 'happy'?", answers:["Glad","Ledsen","Arg","Trött"], correct:0, subject:"engelska" },
        { question: "Vad betyder 'night'?", answers:["Dag","Natt","Kväll","Morgon"], correct:1, subject:"engelska" },
        { question: "Vad betyder 'friend'?", answers:["Vän","Fiende","Lärare","Elev"], correct:0, subject:"engelska" },

        // SVENSKA (20 frågor)
        { question:"Vilken ordklass är 'springer'?", answers:["Verb","Substantiv","Adjektiv","Pronomen"], correct:0, subject:"svenska" },
        { question:"Vilket är ett adjektiv?", answers:["Springa","Blå","Stol","Äta"], correct:1, subject:"svenska" },
        { question:"Vad är plural av 'bok'?", answers:["Boks","Böcker","Bokar","Bokor"], correct:1, subject:"svenska" },
        { question:"Vad är motsatsen till 'stor'?", answers:["Liten","Lång","Bred","Snabb"], correct:0, subject:"svenska" },
        { question:"Vilken mening är korrekt?", answers:["Han går till skolan.","Han gå till skolan.","Han gicka skolan.","Han gådde skolan."], correct:0, subject:"svenska" },
        { question:"Vilket är ett substantiv?", answers:["Springa","Bil","Röd","Hoppa"], correct:1, subject:"svenska" },
        { question:"Vilket är ett verb?", answers:["Springa","Blå","Stol","Snabb"], correct:0, subject:"svenska" },
        { question:"Vilket ord är ett pronomen?", answers:["Han","Bok","Röd","Springa"], correct:0, subject:"svenska" },
        { question:"Vad är plural av 'äpple'?", answers:["Äpplen","Äppel","Äpplet","Äpplor"], correct:0, subject:"svenska" },
        { question:"Vad är motsatsen till 'varm'?", answers:["Kall","Het","Ljus","Mörk"], correct:0, subject:"svenska" },
        { question:"Vilket ord är ett adjektiv?", answers:["Stor","Springa","Bok","Löp"], correct:0, subject:"svenska" },
        { question:"Vilken mening är fel?", answers:["Jag går hem.","Jag gå hem.","Vi spelar fotboll.","Hon är glad."], correct:1, subject:"svenska" },
        { question:"Vilket är ett adverb?", answers:["Snabbt","Stol","Röd","Springa"], correct:0, subject:"svenska" },
        { question:"Vilket är korrekt plural?", answers:["Katter","Katt","Kat","Katta"], correct:0, subject:"svenska" },
        { question:"Vad är synonym till 'stor'?", answers:["Liten","Gigant","Kort","Små"], correct:1, subject:"svenska" },
        { question:"Vad är antonym till 'snabb'?", answers:["Långsam","Rask","Hurtig","Kvick"], correct:0, subject:"svenska" },
        { question:"Vilket ord är ett substantiv?", answers:["Bil","Springa","Röd","Snabb"], correct:0, subject:"svenska" },
        { question:"Vilket ord är ett verb?", answers:["Hoppa","Blå","Bok","Stor"], correct:0, subject:"svenska" },
        { question:"Vilket är ett korrekt uttryck?", answers:["Jag har en bil.","Jag har bil en.","Bil jag har.","En bil har jag."], correct:0, subject:"svenska" },
        { question:"Vilket är korrekt uttryck?", answers:["Hon läser en bok.","Hon bok läser en.","Bok hon läser en.","Hon läser bok en."], correct:0, subject:"svenska" }
    ];

    const QUESTIONS_PER_GAME = 10; // Max antal frågor per quiz
    let questions = [];
    let currentQuestion = 0;
    let score = 0;

    // DOM element
    const questionEl = document.getElementById("question");
    const answersEl = document.getElementById("answers");
    const nextBtn = document.getElementById("nextBtn");
    const resultEl = document.getElementById("result");
    const scoreEl = document.getElementById("score");
    const quizContainer = document.getElementById("quiz-container");
    const restartBtn = document.getElementById("restartBtn");
    const subjectSelection = document.getElementById("subject-selection");
    const subjectButtons = document.querySelectorAll("#subject-selection .btn");

    const navHome = document.getElementById("nav-hem");
    const navQuiz = document.getElementById("nav-quiz");
    const navOm = document.getElementById("nav-om");

    // Blandar frågor
    function shuffle(array){ return array.sort(() => Math.random()-0.5); }

    // Startar quiz
    function startQuiz(subject){
        let filtered = questionBank;
        if(subject && subject.toLowerCase() !== "slump")
            filtered = questionBank.filter(q=>q.subject===subject.toLowerCase());

        // Tar max 10 frågor eller färre om färre finns
        questions = shuffle([...filtered]).slice(0, Math.min(QUESTIONS_PER_GAME, filtered.length));
        currentQuestion = 0;
        score = 0;
        subjectSelection.style.display="none";
        quizContainer.style.display="flex";
        resultEl.style.display="none";
        showQuestion();
    }

    // Visar fråga
    function showQuestion(){
        nextBtn.style.display="none";
        const q = questions[currentQuestion];
        questionEl.textContent = q.question;
        answersEl.innerHTML = "";

        const shuffledAnswers = shuffle(q.answers.map((a,i)=>({text:a, correct:i===q.correct})));
        shuffledAnswers.forEach(ans=>{
            const btn = document.createElement("button");
            btn.textContent = ans.text;
            btn.classList.add("answer-btn");
            btn.dataset.correct = ans.correct;
            answersEl.appendChild(btn);
        });
    }

    // Lyssnar på svarsklick
    answersEl.addEventListener("click", e => {
        if(e.target.classList.contains("answer-btn")){
            const btn = e.target;
            const correct = btn.dataset.correct === "true";
            selectAnswer(btn, correct);
        }
    });

    // Hanterar svar
    function selectAnswer(btn, correct){
        const allBtns = document.querySelectorAll(".answer-btn");
        allBtns.forEach(b=>b.disabled=true);

        if(correct){
            score++;
            btn.style.backgroundColor="#00ff00";
        } else {
            btn.style.backgroundColor="#ff3333";
            allBtns.forEach(b=>{
                if(b.textContent===questions[currentQuestion].answers[questions[currentQuestion].correct])
                    b.style.backgroundColor="#00ff00";
            });
        }

        nextBtn.style.display="inline-block";
    }

    // Nästa fråga
    nextBtn.addEventListener("click", ()=>{
        currentQuestion++;
        if(currentQuestion<questions.length){
            showQuestion();
        } else {
            showResult();
        }
    });

    // Visar resultat
    function showResult(){
        quizContainer.style.display="none";
        resultEl.style.display="flex";
        scoreEl.textContent = `Du fick ${score} av ${questions.length} rätt!`;
    }

    // Starta om quiz
    restartBtn.addEventListener("click", ()=>{
        subjectSelection.style.display="flex";
        quizContainer.style.display="none";
        resultEl.style.display="none";
    });

    // Ämnesknappar
    subjectButtons.forEach(btn=>{
        btn.addEventListener("click", ()=>startQuiz(btn.dataset.subject));
    });

    // Navigation
    navHome.addEventListener("click", ()=> {
        subjectSelection.style.display="flex";
        quizContainer.style.display="none";
        resultEl.style.display="none";
    });

    navQuiz.addEventListener("click", ()=> startQuiz("slump"));
    navOm.addEventListener("click", ()=> alert("Denna webbplats är för att öva matte, engelska och svenska."));

});