/* =========================================================
MENTESPORT — PSICOLOGÍA EN EL DEPORTE
SCRIPT.JS
========================================================= */

/* =========================================================
MENÚ MOBILE
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

}

/* =========================================================
MODO OSCURO
========================================================= */

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {

const savedTheme = localStorage.getItem("menteSportTheme");

if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

    themeToggle.textContent = "☀️";

}

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        themeToggle.textContent = "☀️";

        localStorage.setItem(
            "menteSportTheme",
            "dark"
        );

    } else {

        themeToggle.textContent = "🌙";

        localStorage.setItem(
            "menteSportTheme",
            "light"
        );

    }

});

}

/* =========================================================
BOTÓN VOLVER ARRIBA
========================================================= */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

if (!backToTop) return;

if (window.scrollY > 500) {

    backToTop.classList.add("show");

} else {

    backToTop.classList.remove("show");

}

});

if (backToTop) {

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

}

/* =========================================================
ANIMACIONES AL HACER SCROLL
========================================================= */

const animatedElements = document.querySelectorAll(
".info-card, .athlete-card, .technique-display, .definition-card, .stat, .quiz-container"
);

animatedElements.forEach(element => {

element.classList.add("reveal");

});

const revealObserver = new IntersectionObserver(

entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            revealObserver.unobserve(entry.target);

        }

    });

},

{

    threshold: 0.12

}

);

animatedElements.forEach(element => {

revealObserver.observe(element);

});

/* =========================================================
CONTADORES DE ESTADÍSTICAS
========================================================= */

const statNumbers = document.querySelectorAll(
".stat-number"
);

let statsStarted = false;

function animateCounters() {

if (statsStarted) return;

statsStarted = true;

statNumbers.forEach(counter => {

    const target = Number(
        counter.getAttribute("data-target")
    );

    let current = 0;

    const duration = 1500;

    const increment = target / (duration / 20);

    const updateCounter = () => {

        current += increment;

        if (current < target) {

            counter.textContent =
                Math.floor(current);

            setTimeout(
                updateCounter,
                20
            );

        } else {

            counter.textContent = target;

        }

    };

    updateCounter();

});

}

const statsSection =
document.querySelector(".stats-section");

if (statsSection) {

const statsObserver =
    new IntersectionObserver(

        entries => {

            if (entries[0].isIntersecting) {

                animateCounters();

                statsObserver.disconnect();

            }

        },

        {
            threshold: 0.3
        }

    );

statsObserver.observe(statsSection);

}

/* =========================================================
SISTEMA DE TÉCNICAS PSICOLÓGICAS
========================================================= */

const techniqueButtons =
document.querySelectorAll(".technique-button");

const techniqueContents =
document.querySelectorAll(".technique-content");

techniqueButtons.forEach(button => {

button.addEventListener("click", () => {

    const technique =
        button.getAttribute("data-technique");

    techniqueButtons.forEach(item => {

        item.classList.remove("active");

    });

    techniqueContents.forEach(content => {

        content.classList.remove("active");

    });

    button.classList.add("active");

    const selectedContent =
        document.getElementById(technique);

    if (selectedContent) {

        selectedContent.classList.add("active");

    }

});

});

/* =========================================================
EJERCICIO DE RESPIRACIÓN
========================================================= */

const breathingButton =
document.getElementById("breathingButton");

const breathingCircle =
document.getElementById("breathingCircle");

const breathingStatus =
document.getElementById("breathingStatus");

let breathingRunning = false;

let breathingTimer;

if (
breathingButton &&
breathingCircle &&
breathingStatus
) {

breathingButton.addEventListener(
    "click",
    () => {

        if (breathingRunning) {

            stopBreathing();

        } else {

            startBreathing();

        }

    }
);

function startBreathing() {

    breathingRunning = true;

    breathingButton.textContent =
        "Detener";

    runBreathingCycle();

}

function stopBreathing() {

    breathingRunning = false;

    clearTimeout(breathingTimer);

    breathingCircle.style.transform =
        "scale(1)";

    breathingStatus.textContent =
        "Preparado";

    breathingButton.textContent =
        "Comenzar";

}

function runBreathingCycle() {

    if (!breathingRunning) return;

    breathingStatus.textContent =
        "Inspirá lentamente";

    breathingCircle.style.transform =
        "scale(1.25)";

    breathingTimer = setTimeout(() => {

        if (!breathingRunning) return;

        breathingStatus.textContent =
            "Mantené el aire";

        breathingTimer = setTimeout(() => {

            if (!breathingRunning) return;

            breathingStatus.textContent =
                "Exhalá lentamente";

            breathingCircle.style.transform =
                "scale(1)";

            breathingTimer = setTimeout(() => {

                runBreathingCycle();

            }, 4000);

        }, 2000);

    }, 4000);

}

}

/* =========================================================
CUESTIONARIO
========================================================= */

const questions = [

{

    question:
        "¿Qué estudia principalmente la psicología deportiva?",

    answers: [

        "La alimentación de los deportistas",

        "La relación entre mente, emociones y deporte",

        "Solamente el entrenamiento físico",

        "El equipamiento deportivo"

    ],

    correct: 1,

    explanation:
        "La psicología deportiva estudia cómo los pensamientos, emociones y comportamientos se relacionan con la práctica deportiva."

},

{

    question:
        "¿Cuál de estas técnicas consiste en imaginar mentalmente una situación deportiva?",

    answers: [

        "Respiración",

        "Diálogo interno",

        "Visualización",

        "Relajación muscular"

    ],

    correct: 2,

    explanation:
        "La visualización consiste en representar mentalmente movimientos, situaciones o resultados antes de realizarlos."

},

{

    question:
        "¿Qué puede ayudar a controlar los nervios antes de una competencia?",

    answers: [

        "Ignorar completamente las emociones",

        "Respirar de manera lenta y controlada",

        "No prepararse",

        "Pensar constantemente en perder"

    ],

    correct: 1,

    explanation:
        "Una respiración lenta y controlada puede ayudar a regular la activación física y favorecer la calma."

},

{

    question:
        "¿Qué significa establecer objetivos deportivos?",

    answers: [

        "No tener ninguna meta",

        "Entrenar solamente cuando hay ganas",

        "Definir metas claras y alcanzables",

        "Compararse constantemente con otros"

    ],

    correct: 2,

    explanation:
        "Establecer objetivos permite definir metas concretas y organizar mejor el proceso de entrenamiento."

},

{

    question:
        "¿Por qué es importante la autoconfianza en el deporte?",

    answers: [

        "Porque elimina todos los errores",

        "Porque ayuda a afrontar desafíos con mayor seguridad",

        "Porque evita tener que entrenar",

        "Porque garantiza ganar todas las competencias"

    ],

    correct: 1,

    explanation:
        "La autoconfianza puede ayudar al deportista a afrontar desafíos y confiar en sus propias capacidades."

}

];

let currentQuestion = 0;

let score = 0;

let answered = false;

const questionCounter =
document.getElementById("questionCounter");

const quizQuestion =
document.getElementById("quizQuestion");

const answersContainer =
document.getElementById("answers");

const quizProgress =
document.getElementById("quizProgress");

const scoreElement =
document.getElementById("score");

const quizFeedback =
document.getElementById("quizFeedback");

const nextQuestionButton =
document.getElementById("nextQuestion");

function loadQuestion() {

if (
    !questionCounter ||
    !quizQuestion ||
    !answersContainer
) return;

const question =
    questions[currentQuestion];

answered = false;

questionCounter.textContent =
    `Pregunta ${currentQuestion + 1} de ${questions.length}`;

quizQuestion.textContent =
    question.question;

answersContainer.innerHTML = "";

question.answers.forEach(
    (answer, index) => {

        const button =
            document.createElement("button");

        button.className =
            "answer";

        button.textContent =
            answer;

        button.addEventListener(
            "click",
            () => selectAnswer(
                index,
                button
            )
        );

        answersContainer.appendChild(
            button
        );

    }
);

if (quizProgress) {

    const progress =
        ((currentQuestion + 1) /
            questions.length) * 100;

    quizProgress.style.width =
        `${progress}%`;

}

if (quizFeedback) {

    quizFeedback.textContent = "";

}

if (nextQuestionButton) {

    nextQuestionButton.style.display =
        "none";

}

}

function selectAnswer(index, selectedButton) {

if (answered) return;

answered = true;

const question =
    questions[currentQuestion];

const allAnswers =
    document.querySelectorAll(
        ".answer"
    );

allAnswers.forEach(button => {

    button.classList.add("disabled");

});

if (index === question.correct) {

    selectedButton.classList.add(
        "correct"
    );

    score++;

    if (scoreElement) {

        scoreElement.textContent =
            score;

    }

    if (quizFeedback) {

        quizFeedback.textContent =
            "✓ ¡Correcto! " +
            question.explanation;

        quizFeedback.style.color =
            "#3f8063";

    }

} else {

    selectedButton.classList.add(
        "incorrect"
    );

    allAnswers[
        question.correct
    ].classList.add("correct");

    if (quizFeedback) {

        quizFeedback.textContent =
            "✗ No es correcto. " +
            question.explanation;

        quizFeedback.style.color =
            "#a64c43";

    }

}

if (nextQuestionButton) {

    nextQuestionButton.style.display =
        "inline-block";

}

}

if (nextQuestionButton) {

nextQuestionButton.addEventListener(
    "click",
    () => {

        currentQuestion++;

        if (
            currentQuestion <
            questions.length
        ) {

            loadQuestion();

        } else {

            showQuizResult();

        }

    }
);

}

function showQuizResult() {

if (!answersContainer) return;

if (quizProgress) {

    quizProgress.style.width =
        "100%";

}

if (questionCounter) {

    questionCounter.textContent =
        "CUESTIONARIO FINALIZADO";

}

if (quizQuestion) {

    let message;

    if (score === 5) {

        message =
            "¡Excelente! Tenés un conocimiento muy sólido sobre psicología deportiva. 🏆";

    } else if (score >= 3) {

        message =
            "¡Muy bien! Conocés varios conceptos importantes de la psicología deportiva. 💪";

    } else {

        message =
            "Buen comienzo. Podés volver a recorrer la página para aprender más. 🧠";

    }

    quizQuestion.textContent =
        message;

}

answersContainer.innerHTML = `

    <div class="quiz-final">

        <div style="
            font-size: 60px;
            margin-bottom: 15px;
        ">
            🏆
        </div>

        <h3 style="
            font-family: 'Playfair Display', serif;
            font-size: 30px;
            color: #102a43;
            margin-bottom: 10px;
        ">
            Tu resultado
        </h3>

        <p style="
            color: #607487;
            font-size: 14px;
        ">
            Obtuviste
            <strong>
                ${score} de ${questions.length}
            </strong>
            respuestas correctas.
        </p>

    </div>

`;

if (quizFeedback) {

    quizFeedback.textContent =
        "¡Gracias por completar el cuestionario!";

    quizFeedback.style.color =
        "#1d5d87";

}

if (nextQuestionButton) {

    nextQuestionButton.textContent =
        "Volver a empezar ↻";

    nextQuestionButton.style.display =
        "inline-block";

    nextQuestionButton.onclick = restartQuiz;

}

}

function restartQuiz() {

currentQuestion = 0;

score = 0;

answered = false;

if (scoreElement) {

    scoreElement.textContent =
        "0";

}

if (nextQuestionButton) {

    nextQuestionButton.textContent =
        "Siguiente pregunta →";

}

loadQuestion();

}

/* =========================================================
INICIAR CUESTIONARIO
========================================================= */

if (questions.length > 0) {

loadQuestion();

}

/* =========================================================
EFECTO DE NAVEGACIÓN ACTIVA
========================================================= */

const sections =
document.querySelectorAll(
"section[id]"
);

const navigationLinks =
document.querySelectorAll(
".nav-links a"
);

window.addEventListener(
"scroll",
() => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (
            window.scrollY >=
            sectionTop
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });

    navigationLinks.forEach(link => {

        link.style.color = "";

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.style.color =
                "#1d5d87";

        }

    });

}

);

/* =========================================================
EFECTO PARALLAX SUAVE EN HERO
========================================================= */

const heroVisual =
document.querySelector(".hero-visual");

if (heroVisual) {

window.addEventListener(
    "mousemove",
    event => {

        if (window.innerWidth < 800)
            return;

        const x =
            (window.innerWidth / 2 -
                event.clientX) / 40;

        const y =
            (window.innerHeight / 2 -
                event.clientY) / 40;

        heroVisual.style.transform =
            `translate(${x}px, ${y}px)`;

    }
);

}

/* =========================================================
EFECTO DE APARICIÓN DEL HEADER
========================================================= */

window.addEventListener(
"load",
() => {

    document.body.classList.add(
        "page-loaded"
    );

    const hero =
        document.querySelector(".hero");

    if (hero) {

        hero.style.opacity = "1";

    }

}
