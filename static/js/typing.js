/* =========================================================
   GAMEVAULT — TYPING RUSH
   ========================================================= */

"use strict";


/* =========================================================
   DOM
   ========================================================= */

const modeButtons =
    document.querySelectorAll(".mode-btn");

const difficultyButtons =
    document.querySelectorAll(".difficulty-btn");

const fallingMode =
    document.getElementById("fallingMode");

const paragraphMode =
    document.getElementById("paragraphMode");

const fallingBoard =
    document.getElementById("fallingBoard");

const fallingWordElement =
    document.getElementById("fallingWord");

const fallingInput =
    document.getElementById("fallingInput");

const paragraphDisplay =
    document.getElementById("paragraphDisplay");

const paragraphInput =
    document.getElementById("paragraphInput");

const paragraphProgress =
    document.getElementById("paragraphProgress");

const paragraphProgressText =
    document.getElementById("paragraphProgressText");

const timeValue =
    document.getElementById("timeValue");

const wpmValue =
    document.getElementById("wpmValue");

const accuracyValue =
    document.getElementById("accuracyValue");

const mistakesValue =
    document.getElementById("mistakesValue");

const scoreValue =
    document.getElementById("scoreValue");

const bestValue =
    document.getElementById("bestValue");

const recordText =
    document.getElementById("recordText");

const restartBtn =
    document.getElementById("restartBtn");

const newGameBtn =
    document.getElementById("newGameBtn");

const startOverlay =
    document.getElementById("startOverlay");

const resultsOverlay =
    document.getElementById("resultsOverlay");

const startBtn =
    document.getElementById("startBtn");

const playAgainBtn =
    document.getElementById("playAgainBtn");

const startModeText =
    document.getElementById("startModeText");

const startDifficultyText =
    document.getElementById("startDifficultyText");

const resultIcon =
    document.getElementById("resultIcon");

const resultTitle =
    document.getElementById("resultTitle");

const resultMessage =
    document.getElementById("resultMessage");

const resultTime =
    document.getElementById("resultTime");

const resultWpm =
    document.getElementById("resultWpm");

const resultAccuracy =
    document.getElementById("resultAccuracy");

const resultMistakes =
    document.getElementById("resultMistakes");

const resultScore =
    document.getElementById("resultScore");

const resultBest =
    document.getElementById("resultBest");

const resultExtra =
    document.getElementById("resultExtra");


/* =========================================================
   DIFFICULTY
   ========================================================= */

const difficultyConfig = {

    easy: {
        fallSpeed: 42,
        acceleration: 1.2,
        maxSpeed: 75,
        words: 20
    },

    normal: {
        fallSpeed: 58,
        acceleration: 1.7,
        maxSpeed: 105,
        words: 30
    },

    hard: {
        fallSpeed: 78,
        acceleration: 2.2,
        maxSpeed: 140,
        words: 45
    },

    insane: {
        fallSpeed: 105,
        acceleration: 3.0,
        maxSpeed: 185,
        words: 65
    }

};


/* =========================================================
   WORD BANK
   ========================================================= */

const wordBank = {

    easy: [
        "apple",
        "river",
        "cloud",
        "house",
        "green",
        "water",
        "light",
        "music",
        "happy",
        "plant",
        "world",
        "dream",
        "stone",
        "tiger",
        "ocean",
        "space",
        "phone",
        "chair",
        "school",
        "friend",
        "game",
        "train",
        "summer",
        "winter",
        "forest",
        "sunny",
        "river",
        "garden",
        "orange",
        "silver"
    ],

    normal: [
        "adventure",
        "computer",
        "mountain",
        "creative",
        "journey",
        "freedom",
        "science",
        "future",
        "planet",
        "digital",
        "courage",
        "explore",
        "picture",
        "energy",
        "weather",
        "library",
        "project",
        "machine",
        "success",
        "history",
        "morning",
        "country",
        "language",
        "building",
        "discover",
        "message",
        "student",
        "balance",
        "technology",
        "village"
    ],

    hard: [
        "architecture",
        "extraordinary",
        "determination",
        "communication",
        "environment",
        "imagination",
        "responsibility",
        "development",
        "opportunity",
        "independent",
        "civilization",
        "engineering",
        "photography",
        "achievement",
        "information",
        "experiment",
        "electricity",
        "understanding",
        "intelligence",
        "observation",
        "innovation",
        "relationship",
        "competition",
        "programming",
        "motivation",
        "experience",
        "leadership",
        "confidence",
        "creativity",
        "knowledge"
    ],

    insane: [
        "characterization",
        "misunderstanding",
        "internationalization",
        "transformation",
        "extraordinary",
        "unpredictability",
        "responsibilities",
        "interdisciplinary",
        "electromagnetism",
        "implementation",
        "entrepreneurship",
        "experimentation",
        "communication",
        "environmental",
        "technological",
        "professionalism",
        "configuration",
        "concentration",
        "determination",
        "infrastructure",
        "synchronization",
        "mathematical",
        "philosophical",
        "psychological",
        "documentation",
        "authentication",
        "optimization",
        "visualization",
        "programming",
        "architecture"
    ]

};


/* =========================================================
   PARAGRAPHS
   ========================================================= */

const paragraphBank = {

    easy: [

        "Every great journey begins with a small step. Keep moving forward, stay curious, and learn something new every day.",

        "The morning sky was bright and clear. Birds moved between the trees while the quiet streets slowly became busy.",

        "Learning takes time, but every mistake can teach us something useful. Practice patiently and keep trying.",

        "A good idea becomes powerful when someone works patiently to turn it into reality. Small efforts can create big results.",

        "Technology can make everyday tasks easier, but creativity and human thinking are still important for solving problems.",

        "The world is full of interesting places, people, animals, and ideas. Exploring them can make learning much more exciting."

    ],

    normal: [

        "A successful project rarely appears perfect on the first attempt. People test their ideas, discover problems, make improvements, and continue until the result becomes stronger.",

        "The internet has changed the way people learn and communicate. Information can now travel across the world within seconds, giving students access to knowledge from many different sources.",

        "Building a useful skill requires consistency rather than sudden bursts of effort. A person who practices a little every day can eventually achieve results that once seemed impossible.",

        "Modern technology connects people in remarkable ways, but it also requires responsibility. Understanding how digital systems work helps us use them more safely and intelligently.",

        "Exploration has always encouraged people to ask difficult questions. From studying distant planets to examining tiny cells, curiosity continues to push human knowledge forward.",

        "A creative mind does not always search for the easiest answer. Sometimes the most interesting solutions appear when a person looks at an ordinary problem from an entirely different perspective."

    ],

    hard: [

        "Scientific progress depends on observation, experimentation, and careful reasoning. Researchers may spend years investigating a question before discovering evidence that changes the way an entire field understands a problem.",

        "Artificial intelligence is becoming increasingly useful in education, medicine, engineering, and communication. However, powerful technology must be developed thoughtfully so that its benefits are balanced with reliability, privacy, and responsible use.",

        "The development of modern cities has created remarkable opportunities for transportation, education, business, and entertainment. At the same time, growing populations require careful planning to protect resources and maintain a healthy environment.",

        "History demonstrates that major changes rarely happen because of one simple event. Economic conditions, technological discoveries, cultural movements, individual decisions, and unexpected circumstances often interact in complicated ways.",

        "Learning to program teaches more than the ability to write instructions for a computer. It encourages logical thinking, patience, experimentation, and the confidence to break complicated problems into smaller and more manageable pieces.",

        "Exploring the natural world can reveal relationships that are easy to overlook. A forest, for example, is not simply a collection of trees, but a complex system in which plants, animals, soil, water, and climate constantly influence one another."

    ],

    insane: [

        "The relationship between technological progress and society is extraordinarily complex because every major invention can create opportunities while simultaneously introducing unfamiliar challenges. Understanding these changes requires technical knowledge, historical awareness, ethical reasoning, and the ability to consider consequences that may not become obvious for many years.",

        "Scientific discovery often begins with uncertainty rather than confidence. Researchers formulate hypotheses, design experiments, analyze imperfect evidence, question unexpected results, and repeatedly revise their explanations. This process demonstrates why genuine knowledge is rarely produced by accepting the first convenient answer.",

        "As artificial intelligence becomes integrated into increasingly sophisticated systems, developers must consider questions involving reliability, transparency, security, privacy, and human responsibility. Creating a capable system is only part of the challenge; ensuring that people can understand and use that system responsibly is equally important.",

        "The future of exploration may depend on technologies capable of operating far beyond the environments in which humans can comfortably survive. Autonomous machines, advanced robotics, improved communication systems, and increasingly efficient energy sources could allow researchers to investigate places that are currently extremely difficult to reach.",

        "Complex problems often appear impossible when viewed as a single enormous challenge. Engineers, scientists, programmers, and researchers frequently make progress by dividing such problems into smaller components, testing each component independently, measuring the results, and gradually combining successful solutions into a larger system.",

        "Human creativity is difficult to measure because it can appear in mathematics, music, engineering, literature, architecture, scientific research, and countless ordinary activities. Creativity does not necessarily mean producing something completely unprecedented; it can also mean combining familiar ideas in a surprisingly useful or meaningful way."

    ]

};


/* =========================================================
   GAME STATE
   ========================================================= */

let currentMode = "falling";

let currentDifficulty = "easy";

let gameRunning = false;

let gameFinished = false;

let startTime = 0;

let elapsedSeconds = 0;

let timerInterval = null;

let animationFrame = null;

let currentWord = "";

let currentParagraph = "";

let wordPosition = 20;

let fallSpeed = 42;

let wordsCompleted = 0;

let charactersTyped = 0;

let correctCharacters = 0;

let mistakes = 0;

let score = 0;

let previousWord = "";

let previousParagraph = "";


/* =========================================================
   LOCAL STORAGE
   ========================================================= */

const bestKeys = {
    falling: "gamevault_typing_falling_best",
    paragraph: "gamevault_typing_paragraph_best"
};


function getBestScore() {

    const value =
        Number(
            localStorage.getItem(
                bestKeys[currentMode]
            )
        );

    return Number.isFinite(value) ? value : 0;
}


function saveBestScore(value) {

    localStorage.setItem(
        bestKeys[currentMode],
        String(value)
    );
}


/* =========================================================
   RANDOM HELPERS
   ========================================================= */

function randomItem(array) {

    return array[
        Math.floor(
            Math.random() * array.length
        )
    ];
}


function getNewWord() {

    const list =
        wordBank[currentDifficulty];

    let word = randomItem(list);

    /*
       Prevent the same word from appearing
       immediately twice.
    */

    if (list.length > 1) {

        let attempts = 0;

        while (
            word === previousWord &&
            attempts < 20
        ) {

            word = randomItem(list);

            attempts++;
        }
    }

    previousWord = word;

    return word;
}


function getNewParagraph() {

    const list =
        paragraphBank[currentDifficulty];

    let paragraph = randomItem(list);

    /*
       Prevent immediate paragraph repetition.
    */

    if (list.length > 1) {

        let attempts = 0;

        while (
            paragraph === previousParagraph &&
            attempts < 20
        ) {

            paragraph = randomItem(list);

            attempts++;
        }
    }

    previousParagraph = paragraph;

    return paragraph;
}


/* =========================================================
   UI HELPERS
   ========================================================= */

function updateModeButtons() {

    modeButtons.forEach(button => {

        button.classList.toggle(
            "active",
            button.dataset.mode === currentMode
        );

    });
}


function updateDifficultyButtons() {

    difficultyButtons.forEach(button => {

        button.classList.toggle(
            "active",
            button.dataset.difficulty === currentDifficulty
        );

    });
}


function updateModeText() {

    startModeText.textContent =
        currentMode === "falling"
            ? "🍎 Falling Words"
            : "📖 Paragraph Challenge";

    startDifficultyText.textContent =
        currentDifficulty.toUpperCase();
}


function showMode() {

    const falling =
        currentMode === "falling";

    fallingMode.hidden = !falling;

    paragraphMode.hidden = falling;

    if (falling) {

        fallingInput.disabled = !gameRunning;

        paragraphInput.disabled = true;

    } else {

        fallingInput.disabled = true;

        paragraphInput.disabled = !gameRunning;

    }

}


function showStartOverlay() {

    startOverlay.hidden = false;

}


function hideStartOverlay() {

    startOverlay.hidden = true;

}


function showResultsOverlay() {

    resultsOverlay.hidden = false;

}


function hideResultsOverlay() {

    resultsOverlay.hidden = true;

}


/* =========================================================
   PREPARE GAME
   ========================================================= */

function prepareGame() {

    stopLoops();

    gameRunning = false;

    gameFinished = false;

    startTime = 0;

    elapsedSeconds = 0;

    wordsCompleted = 0;

    charactersTyped = 0;

    correctCharacters = 0;

    mistakes = 0;

    score = 0;

    fallSpeed =
        difficultyConfig[
            currentDifficulty
        ].fallSpeed;

    fallingInput.value = "";

    paragraphInput.value = "";

    fallingWordElement.textContent =
        currentMode === "falling"
            ? "READY"
            : "";

    wordPosition = 20;

    currentWord = "";

    currentParagraph = "";

    paragraphProgress.style.width = "0%";

    paragraphProgressText.textContent = "0%";

    updateStats();

    updateModeText();

    showMode();

}


/* =========================================================
   START
   ========================================================= */

function startGame() {

    hideStartOverlay();

    hideResultsOverlay();

    prepareGame();

    gameRunning = true;

    startTime = performance.now();

    updateInputs();

    startTimer();

    if (currentMode === "falling") {

        startFallingMode();

    } else {

        startParagraphMode();

    }

}


/* =========================================================
   INPUT ENABLE/DISABLE
   ========================================================= */

function updateInputs() {

    fallingInput.disabled =
        !gameRunning ||
        currentMode !== "falling";

    paragraphInput.disabled =
        !gameRunning ||
        currentMode !== "paragraph";

}


/* =========================================================
   TIMER
   ========================================================= */

function startTimer() {

    clearInterval(timerInterval);

    timerInterval =
        setInterval(() => {

            if (!gameRunning) return;

            elapsedSeconds =
                (performance.now() - startTime) / 1000;

            updateStats();

        }, 100);

}


function stopTimer() {

    clearInterval(timerInterval);

    timerInterval = null;

}


/* =========================================================
   FALLING WORDS
   ========================================================= */

function startFallingMode() {

    currentWord = getNewWord();

    fallingInput.value = "";

    wordPosition = 20;

    fallSpeed =
        difficultyConfig[
            currentDifficulty
        ].fallSpeed;

    fallingWordElement.textContent =
        currentWord;

    fallingWordElement.style.top =
        `${wordPosition}px`;

    fallingInput.focus();

    animationFrame =
        requestAnimationFrame(fallingLoop);

}


function fallingLoop(timestamp) {

    if (!gameRunning) return;

    const delta =
        fallingLoop.lastTimestamp
            ? timestamp - fallingLoop.lastTimestamp
            : 16;

    fallingLoop.lastTimestamp = timestamp;

    wordPosition +=
        fallSpeed * (delta / 1000);

    fallingWordElement.style.top =
        `${wordPosition}px`;

    /*
       Gradually increase speed.
    */

    const config =
        difficultyConfig[
            currentDifficulty
        ];

    fallSpeed = Math.min(
        fallSpeed +
            config.acceleration *
            (delta / 1000),

        config.maxSpeed
    );


    const boardHeight =
        fallingBoard.clientHeight;

    const wordHeight =
        fallingWordElement.offsetHeight;

    const groundPosition =
        boardHeight -
        wordHeight -
        7;


    if (wordPosition >= groundPosition) {

        endGame("The word reached the ground.");

        return;
    }


    animationFrame =
        requestAnimationFrame(fallingLoop);

}


/*
   Reset the timestamp when starting another
   falling word.
*/

fallingLoop.lastTimestamp = 0;


/* =========================================================
   FALLING INPUT
   ========================================================= */

fallingInput.addEventListener(
    "input",
    function () {

        if (!gameRunning) return;

        if (currentMode !== "falling") return;

        let typed =
            fallingInput.value;

        /*
           Ignore leading/trailing accidental
           whitespace for normal keyboard input.
        */

        if (
            typed.length <= currentWord.length &&
            currentWord.startsWith(typed)
        ) {

            correctCharacters =
                Math.min(
                    correctCharacters + 1,
                    currentWord.length
                );

            charactersTyped++;

            if (typed === currentWord) {

                wordsCompleted++;

                score +=
                    currentWord.length *
                    difficultyScoreMultiplier();

                startNextWord();

            }

        } else {

            /*
               Wrong character:
               remove only the newest character.
               The player must enter the correct
               character before progressing.
            */

            fallingInput.value =
                typed.slice(
                    0,
                    Math.max(0, typed.length - 1)
                );

            mistakes++;

            charactersTyped++;

            updateStats();
        }

    }
);


/* =========================================================
   NEXT FALLING WORD
   ========================================================= */

function startNextWord() {

    const config =
        difficultyConfig[
            currentDifficulty
        ];

    if (
        config.words > 0 &&
        wordsCompleted >= config.words
    ) {

        endGame(
            "You completed the target number of words."
        );

        return;
    }

    currentWord =
        getNewWord();

    fallingInput.value = "";

    wordPosition = 20;

    fallingLoop.lastTimestamp = 0;

    fallingWordElement.textContent =
        currentWord;

    fallingWordElement.style.top =
        `${wordPosition}px`;

}


/* =========================================================
   PARAGRAPH MODE
   ========================================================= */

function startParagraphMode() {

    currentParagraph =
        getNewParagraph();

    paragraphInput.value = "";

    renderParagraph();

    paragraphInput.focus();

}


/* =========================================================
   PARAGRAPH RENDER
   ========================================================= */

function escapeHTML(text) {

    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


function renderParagraph() {

    const typed =
        paragraphInput.value;

    let html = "";

    for (
        let i = 0;
        i < currentParagraph.length;
        i++
    ) {

        const character =
            escapeHTML(
                currentParagraph[i]
            );

        if (i < typed.length) {

            html +=
                `<span class="correct">${character}</span>`;

        } else if (i === typed.length) {

            html +=
                `<span class="current">${character}</span>`;

        } else {

            html += character;

        }

    }

    paragraphDisplay.innerHTML =
        html;

}


/* =========================================================
   PARAGRAPH INPUT
   ========================================================= */

paragraphInput.addEventListener(
    "input",
    function () {

        if (!gameRunning) return;

        if (currentMode !== "paragraph") return;

        const typed =
            paragraphInput.value;


        /*
           Correct prefix:
           allow it.
        */

        if (
            currentParagraph.startsWith(typed)
        ) {

            correctCharacters =
                Math.min(
                    typed.length,
                    currentParagraph.length
                );

            charactersTyped++;

            renderParagraph();

            updateParagraphProgress();

            if (
                typed === currentParagraph
            ) {

                score =
                    Math.max(
                        1,
                        Math.round(
                            currentParagraph.length *
                            difficultyScoreMultiplier() *
                            2
                        )
                    );

                endGame(
                    "You completed the paragraph."
                );

            }

        } else {

            /*
               Wrong character:
               immediately remove the newest
               character so progress cannot continue.
            */

            paragraphInput.value =
                typed.slice(
                    0,
                    Math.max(0, typed.length - 1)
                );

            mistakes++;

            charactersTyped++;

            renderParagraph();

            updateParagraphProgress();

            updateStats();

        }

    }
);


/* =========================================================
   PARAGRAPH PROGRESS
   ========================================================= */

function updateParagraphProgress() {

    if (!currentParagraph.length) {

        paragraphProgress.style.width =
            "0%";

        paragraphProgressText.textContent =
            "0%";

        return;
    }

    const percentage =
        Math.floor(
            (
                paragraphInput.value.length /
                currentParagraph.length
            ) * 100
        );

    paragraphProgress.style.width =
        `${percentage}%`;

    paragraphProgressText.textContent =
        `${percentage}%`;

}


/* =========================================================
   SCORE MULTIPLIER
   ========================================================= */

function difficultyScoreMultiplier() {

    switch (currentDifficulty) {

        case "easy":
            return 1;

        case "normal":
            return 1.5;

        case "hard":
            return 2;

        case "insane":
            return 3;

        default:
            return 1;
    }

}


/* =========================================================
   STATS
   ========================================================= */

function calculateWPM() {

    if (elapsedSeconds <= 0) {

        return 0;
    }

    const minutes =
        elapsedSeconds / 60;

    /*
       Standard typing WPM:
       5 characters = 1 word.
    */

    return Math.round(
        (
            correctCharacters / 5
        ) / minutes
    );

}


function calculateAccuracy() {

    if (charactersTyped <= 0) {

        return 100;
    }

    return Math.max(
        0,
        Math.round(
            (
                correctCharacters /
                charactersTyped
            ) * 100
        )
    );

}


function updateStats() {

    const seconds =
        Math.floor(elapsedSeconds);

    timeValue.textContent =
        `${seconds}s`;

    wpmValue.textContent =
        calculateWPM();

    accuracyValue.textContent =
        `${calculateAccuracy()}%`;

    mistakesValue.textContent =
        mistakes;

    scoreValue.textContent =
        score;

    bestValue.textContent =
        getBestScore();

}


/* =========================================================
   END GAME
   ========================================================= */

function endGame(message) {

    if (!gameRunning) return;

    gameRunning = false;

    gameFinished = true;

    stopLoops();

    elapsedSeconds =
        Math.max(
            0.01,
            (performance.now() - startTime) / 1000
        );

    updateInputs();

    updateStats();

    const finalWpm =
        calculateWPM();

    const finalAccuracy =
        calculateAccuracy();

    const finalScore =
        score;

    const oldBest =
        getBestScore();

    let newBest = false;

    if (finalScore > oldBest) {

        saveBestScore(finalScore);

        newBest = true;

    }

    updateStats();


    /* RESULTS */

    resultTime.textContent =
        `${Math.floor(elapsedSeconds)}s`;

    resultWpm.textContent =
        finalWpm;

    resultAccuracy.textContent =
        `${finalAccuracy}%`;

    resultMistakes.textContent =
        mistakes;

    resultScore.textContent =
        finalScore;

    resultBest.textContent =
        Math.max(
            finalScore,
            oldBest
        );


    if (newBest) {

        resultIcon.textContent = "🏆";

        resultTitle.textContent =
            "NEW RECORD!";

        resultMessage.textContent =
            "You just set your best score.";

        resultExtra.textContent =
            `${message} • New personal best!`;

    } else {

        resultIcon.textContent = "🔥";

        resultTitle.textContent =
            "Challenge Complete";

        resultMessage.textContent =
            "Great run! Keep practicing to beat your record.";

        resultExtra.textContent =
            message;

    }


    showResultsOverlay();

}


/* =========================================================
   STOP LOOPS
   ========================================================= */

function stopLoops() {

    stopTimer();

    if (animationFrame !== null) {

        cancelAnimationFrame(
            animationFrame
        );

        animationFrame = null;

    }

    fallingLoop.lastTimestamp = 0;

}


/* =========================================================
   RESET CURRENT GAME
   ========================================================= */

function resetCurrentGame() {

    hideResultsOverlay();

    prepareGame();

    showStartOverlay();

}


/* =========================================================
   MODE BUTTONS
   ========================================================= */

modeButtons.forEach(button => {

    button.addEventListener(
        "click",
        function () {

            /*
               Do not change mode during an active game.
               The player can change it after finishing
               or before starting.
            */

            if (gameRunning) return;

            const mode =
                button.dataset.mode;

            if (
                mode !== "falling" &&
                mode !== "paragraph"
            ) {

                return;
            }

            currentMode = mode;

            updateModeButtons();

            prepareGame();

            updateModeText();

            showMode();

        }
    );

});


/* =========================================================
   DIFFICULTY BUTTONS
   ========================================================= */

difficultyButtons.forEach(button => {

    button.addEventListener(
        "click",
        function () {

            if (gameRunning) return;

            const difficulty =
                button.dataset.difficulty;

            if (
                !difficultyConfig[
                    difficulty
                ]
            ) {

                return;
            }

            currentDifficulty =
                difficulty;

            updateDifficultyButtons();

            prepareGame();

            updateModeText();

            showMode();

        }
    );

});


/* =========================================================
   START BUTTON
   ========================================================= */

startBtn.addEventListener(
    "click",
    function () {

        startGame();

    }
);


/* =========================================================
   PLAY AGAIN
   ========================================================= */

playAgainBtn.addEventListener(
    "click",
    function () {

        hideResultsOverlay();

        startGame();

    }
);


/* =========================================================
   RESTART
   ========================================================= */

restartBtn.addEventListener(
    "click",
    function () {

        resetCurrentGame();

    }
);


/* =========================================================
   NEW GAME
   ========================================================= */

newGameBtn.addEventListener(
    "click",
    function () {

        resetCurrentGame();

    }
);


/* =========================================================
   KEYBOARD SAFETY
   ========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Enter" &&
            !gameRunning &&
            !startOverlay.hidden
        ) {

            startGame();

        }

    }
);


/* =========================================================
   BLOCK PASTE
   ========================================================= */

fallingInput.addEventListener(
    "paste",
    function (event) {

        event.preventDefault();

    }
);

paragraphInput.addEventListener(
    "paste",
    function (event) {

        event.preventDefault();

    }
);


/* =========================================================
   INITIALIZATION
   ========================================================= */

function initialize() {

    currentMode = "falling";

    currentDifficulty = "easy";

    updateModeButtons();

    updateDifficultyButtons();

    prepareGame();

    updateModeText();

    showMode();

    hideResultsOverlay();

    showStartOverlay();

    updateStats();

}


initialize();