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

const startBtn =
    document.getElementById("startBtn");

const restartBtn =
    document.getElementById("restartBtn");

const newGameBtn =
    document.getElementById("newGameBtn");

const overlayStartBtn =
    document.getElementById("overlayStartBtn");

const resultRestartBtn =
    document.getElementById("resultRestartBtn");

const startOverlay =
    document.getElementById("startOverlay");

const resultsOverlay =
    document.getElementById("resultsOverlay");

const startDescription =
    document.getElementById("startDescription");

const overlayMode =
    document.getElementById("overlayMode");

const overlayDifficulty =
    document.getElementById("overlayDifficulty");

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

const resultTitle =
    document.getElementById("resultTitle");

const resultSubtitle =
    document.getElementById("resultSubtitle");

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
   CONFIG
   ========================================================= */

const difficultyConfig = {

    easy: {
        label: "EASY",
        fallingSpeed: 0.055,
        acceleration: 0.000008,
        maxSpeed: 0.11,
        wordScore: 10
    },

    normal: {
        label: "NORMAL",
        fallingSpeed: 0.075,
        acceleration: 0.000012,
        maxSpeed: 0.145,
        wordScore: 15
    },

    hard: {
        label: "HARD",
        fallingSpeed: 0.1,
        acceleration: 0.000017,
        maxSpeed: 0.19,
        wordScore: 22
    },

    insane: {
        label: "INSANE",
        fallingSpeed: 0.135,
        acceleration: 0.000022,
        maxSpeed: 0.24,
        wordScore: 32
    }

};


/* =========================================================
   WORD BANK
   ========================================================= */

const wordBank = {

    easy: [
        "apple", "water", "house", "green", "light",
        "music", "happy", "river", "cloud", "plant",
        "school", "friend", "world", "dream", "game",
        "star", "book", "chair", "phone", "smile",
        "winter", "summer", "ocean", "forest", "animal",
        "family", "morning", "garden", "coffee", "travel",
        "window", "planet", "flower", "orange", "silver",
        "yellow"
    ],

    normal: [
        "adventure", "computer", "creative", "mountain",
        "beautiful", "freedom", "journey", "picture",
        "science", "future", "energy", "language",
        "digital", "building", "curious", "country",
        "imagine", "discover", "balance", "natural",
        "progress", "knowledge", "problem", "project",
        "success", "technology", "history", "explore",
        "universe", "library", "weather", "engine",
        "network", "student", "learning", "challenge"
    ],

    hard: [
        "architecture", "determination", "extraordinary",
        "development", "environment", "communication",
        "opportunity", "responsibility", "imagination",
        "engineering", "programming", "electricity",
        "civilization", "experiment", "information",
        "creativity", "motivation", "understanding",
        "achievement", "exploration", "perspective",
        "technology", "innovation", "concentration",
        "independent", "experience", "organization",
        "intelligence", "relationship", "possibility",
        "adventure"
    ],

    insane: [
        "misunderstanding", "characterization",
        "internationalization", "electromagnetism",
        "entrepreneurship", "transformation",
        "synchronization", "extraordinary",
        "interdisciplinary", "cryptocurrency",
        "biotechnology", "infrastructure",
        "configuration", "implementation",
        "philosophical", "unpredictable",
        "congratulations", "professionalism",
        "experimentation", "responsiveness",
        "accessibility", "comprehensive",
        "determination", "communication",
        "responsibility", "computational",
        "environmental", "civilization",
        "characteristic", "administration"
    ]

};


/* =========================================================
   PARAGRAPH BANK
   ========================================================= */

const paragraphBank = {

    easy: [

        "Every great journey begins with a small step. When we stay patient and keep practicing, difficult things slowly become easier. The most important part is to continue moving forward even when progress feels slow.",

        "A quiet morning can be the perfect time to think about new ideas. The world feels different when there is less noise around us. A few peaceful minutes can help us plan the day with a clear and positive mind.",

        "Learning something new takes time, but every mistake can teach us something useful. Instead of being afraid of mistakes, we can use them as clues that show us what needs more practice.",

        "Nature reminds us that growth does not happen instantly. A small seed needs water, sunlight, and time before it becomes a strong plant. People also need patience and consistent effort to grow.",

        "Friends can make ordinary days more enjoyable. A simple conversation, a shared joke, or a helpful moment can create memories that remain valuable for many years.",

        "Books allow us to explore places and ideas without leaving our room. A good story can introduce new characters, cultures, questions, and possibilities that change the way we see the world."

    ],

    normal: [

        "Technology has changed the way people learn, communicate, and solve problems. A student can now explore subjects through videos, simulations, interactive tools, and digital libraries. However, technology becomes truly useful only when it is combined with curiosity and disciplined learning.",

        "The night sky has inspired people for thousands of years. Stars that appear as tiny points of light are actually enormous objects separated from Earth by unimaginable distances. Studying them helps scientists understand the history and structure of the universe.",

        "Success rarely comes from one perfect decision. It usually develops through many small choices made consistently over time. People who are willing to learn from failure often become stronger because every setback gives them another opportunity to improve.",

        "A city is more than a collection of buildings and roads. It is a constantly changing network of people, ideas, businesses, cultures, and stories. The character of a city is created by the millions of small interactions that happen every day.",

        "Good communication requires more than speaking clearly. It also requires listening carefully and trying to understand another person's point of view. When people communicate with patience and respect, disagreements can often become opportunities for better understanding.",

        "Scientific discoveries often begin with simple questions. A person notices something unusual, becomes curious about it, and starts searching for an explanation. Over time, careful observation and repeated experiments can turn a small question into important knowledge."

    ],

    hard: [

        "Modern engineering combines mathematics, physics, computer science, and creative problem solving to design systems that can operate reliably in complicated environments. Engineers must consider efficiency, safety, cost, sustainability, and the needs of the people who will eventually use their creations.",

        "Artificial intelligence is developing rapidly, but understanding its possibilities requires more than simply using sophisticated software. Researchers must consider data quality, computational resources, reliability, transparency, and the consequences of deploying intelligent systems in real-world situations.",

        "Exploration has always been driven by a mixture of curiosity and practical necessity. From mapping distant oceans to studying planets beyond Earth, explorers expand the boundaries of human knowledge. Each discovery also creates new questions that future generations may attempt to answer.",

        "A successful project depends on coordination between many different tasks. Planning establishes a direction, experimentation reveals what works, and careful testing exposes weaknesses before they become serious problems. The final result is usually shaped by hundreds of small decisions rather than one dramatic moment.",

        "Environmental challenges cannot be solved by a single invention or organization. They require cooperation between scientists, governments, businesses, communities, and individuals. Long-term progress depends on developing useful technologies while also changing the habits that create unnecessary waste.",

        "The history of computing demonstrates how quickly an idea can transform society. Machines that once occupied entire rooms can now fit inside devices carried in a pocket. This extraordinary progress has created opportunities that earlier generations could hardly have imagined."

    ],

    insane: [

        "Computational science has become an essential bridge between theoretical knowledge and practical experimentation. Instead of relying exclusively on physical measurements, researchers can construct detailed simulations, analyze enormous datasets, and test complicated hypotheses with algorithms that would be impossible to execute manually.",

        "The development of sophisticated autonomous systems presents an unusual combination of engineering and philosophical challenges. A machine may be capable of processing information extremely quickly, yet its usefulness still depends on how accurately its designers define objectives, measure uncertainty, handle unexpected circumstances, and evaluate the consequences of its decisions.",

        "Interdisciplinary research frequently produces discoveries that would remain invisible inside a single academic field. When biologists collaborate with engineers, computer scientists, physicists, and mathematicians, completely different methods of reasoning can be combined to investigate problems that involve several layers of complexity.",

        "Human civilization has repeatedly demonstrated an extraordinary ability to adapt to technological transformation. Nevertheless, rapid innovation can create new responsibilities alongside new opportunities. Understanding how technologies influence economies, education, communication, privacy, and individual decision-making is therefore becoming increasingly important.",

        "Building a reliable software system requires considerably more than writing code that works under ideal conditions. Developers must anticipate invalid input, unexpected failures, changing requirements, security concerns, performance limitations, and differences between devices. Careful architecture and extensive testing are essential when reliability matters.",

        "Scientific progress is rarely a perfectly predictable sequence of successful experiments. Researchers frequently encounter unexpected results, incomplete measurements, contradictory evidence, or hypotheses that fail under closer examination. These setbacks are valuable because they force scientists to reconsider assumptions and construct explanations that survive stronger tests."

    ]

};


/* =========================================================
   STATE
   ========================================================= */

let currentMode = "falling";
let currentDifficulty = "easy";

let gameRunning = false;
let startTime = 0;
let elapsedSeconds = 0;

let timerInterval = null;
let animationFrame = null;
let lastFrameTime = 0;


/* FALLING */

let currentWord = "";
let typedWord = "";
let wordY = 20;
let fallingSpeed = 0;
let wordsCompleted = 0;


/* PARAGRAPH */

let currentParagraph = "";
let paragraphCorrectCharacters = 0;


/* STATS */

let totalCorrectCharacters = 0;
let totalAttempts = 0;
let mistakes = 0;
let score = 0;

let previousWord = "";
let previousParagraph = "";


/* =========================================================
   LOCAL STORAGE
   ========================================================= */

function getBestKey() {

    return `gamevault_typing_best_${currentMode}_${currentDifficulty}`;

}


function getBestScore() {

    return Number(
        localStorage.getItem(getBestKey()) || 0
    );

}


function saveBestScore(value) {

    const oldBest = getBestScore();

    if (value > oldBest) {

        localStorage.setItem(
            getBestKey(),
            String(value)
        );

        return value;
    }

    return oldBest;

}


/* =========================================================
   RANDOM
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

    let word;

    do {

        word = randomItem(list);

    } while (
        list.length > 1 &&
        word === previousWord
    );

    previousWord = word;

    return word;

}


function getNewParagraph() {

    const list =
        paragraphBank[currentDifficulty];

    let paragraph;

    do {

        paragraph = randomItem(list);

    } while (
        list.length > 1 &&
        paragraph === previousParagraph
    );

    previousParagraph = paragraph;

    return paragraph;

}


/* =========================================================
   MODE DISPLAY
   ========================================================= */

function setModeDisplay() {

    const isFalling =
        currentMode === "falling";

    /*
     * Control BOTH the hidden attribute and
     * the active class so CSS cannot leave
     * the wrong game visible.
     */

    fallingMode.hidden = !isFalling;
    paragraphMode.hidden = isFalling;

    fallingMode.classList.toggle(
        "active-section",
        isFalling
    );

    paragraphMode.classList.toggle(
        "active-section",
        !isFalling
    );

    if (isFalling) {

        fallingMode.style.display = "";
        paragraphMode.style.display = "none";

        startDescription.textContent =
            "Type the falling word before it reaches the ground.";

        overlayMode.textContent =
            "🍎 Falling Words";

    } else {

        fallingMode.style.display = "none";
        paragraphMode.style.display = "";

        startDescription.textContent =
            "Type the complete paragraph accurately.";

        overlayMode.textContent =
            "📖 Paragraph Challenge";

    }

    bestValue.textContent =
        getBestScore();

}


function setDifficultyDisplay() {

    difficultyButtons.forEach(button => {

        button.classList.toggle(
            "active",
            button.dataset.difficulty ===
            currentDifficulty
        );

    });

    overlayDifficulty.textContent =
        difficultyConfig[currentDifficulty].label;

    bestValue.textContent =
        getBestScore();

}


/* =========================================================
   BUTTON STATE
   ========================================================= */

function updateButtonStates() {

    modeButtons.forEach(button => {

        button.classList.toggle(
            "active",
            button.dataset.mode ===
            currentMode
        );

    });

    setDifficultyDisplay();

}


/* =========================================================
   RESET STATS
   ========================================================= */

function resetStats() {

    elapsedSeconds = 0;

    totalCorrectCharacters = 0;

    totalAttempts = 0;

    mistakes = 0;

    score = 0;

    wordsCompleted = 0;

    paragraphCorrectCharacters = 0;

    updateStats();

}


/* =========================================================
   PREPARE NEW GAME
   ========================================================= */

function prepareNewGame() {

    stopGameLoops();

    gameRunning = false;

    resetStats();

    typedWord = "";

    fallingInput.value = "";

    paragraphInput.value = "";

    fallingInput.disabled = true;
    paragraphInput.disabled = true;

    wordY = 20;

    fallingSpeed = 0;

    fallingWordElement.style.top =
        `${wordY}px`;

    /*
     * Do NOT reset previousWord or
     * previousParagraph here.
     *
     * This guarantees a new game doesn't
     * immediately repeat the previous item.
     */

    currentWord =
        getNewWord();

    fallingWordElement.textContent =
        currentWord;

    currentParagraph =
        getNewParagraph();

    renderParagraph();

    updateParagraphDisplay();

    updateParagraphProgress();

    recordText.textContent =
        `${difficultyConfig[currentDifficulty].label} • Ready`;

    startBtn.textContent =
        "▶ START";

    updateButtonStates();

    updateStats();

}


/* =========================================================
   MODE SWITCH
   ========================================================= */

modeButtons.forEach(button => {

    button.addEventListener("click", () => {

        const selectedMode =
            button.dataset.mode;

        if (
            selectedMode !== currentMode &&
            gameRunning
        ) {

            stopGameLoops();
            gameRunning = false;

        }

        currentMode =
            selectedMode;

        closeResultsOverlay();

        prepareNewGame();

        setModeDisplay();

        updateButtonStates();

        showStartOverlay();

    });

});


/* =========================================================
   DIFFICULTY SWITCH
   ========================================================= */

difficultyButtons.forEach(button => {

    button.addEventListener("click", () => {

        const selectedDifficulty =
            button.dataset.difficulty;

        if (
            selectedDifficulty !==
            currentDifficulty &&
            gameRunning
        ) {

            stopGameLoops();
            gameRunning = false;

        }

        currentDifficulty =
            selectedDifficulty;

        closeResultsOverlay();

        prepareNewGame();

        setDifficultyDisplay();

        showStartOverlay();

    });

});


/* =========================================================
   START GAME
   ========================================================= */

function startGame() {

    if (gameRunning) {
        return;
    }

    closeStartOverlay();
    closeResultsOverlay();

    /*
     * Generate the actual game content here.
     */

    if (currentMode === "falling") {

        currentWord =
            getNewWord();

        typedWord = "";

        fallingInput.value = "";

        wordY = 20;

        fallingSpeed =
            difficultyConfig[currentDifficulty]
                .fallingSpeed;

        fallingWordElement.textContent =
            currentWord;

        fallingWordElement.style.top =
            `${wordY}px`;

    } else {

        currentParagraph =
            getNewParagraph();

        paragraphInput.value = "";

        paragraphCorrectCharacters = 0;

        renderParagraph();

        updateParagraphDisplay();

        updateParagraphProgress();

    }

    resetStats();

    gameRunning = true;

    startTime =
        performance.now();

    fallingInput.disabled =
        currentMode !== "falling";

    paragraphInput.disabled =
        currentMode !== "paragraph";

    if (currentMode === "falling") {

        startFallingGame();

    } else {

        startParagraphGame();

    }

    startTimer();

    updateStats();

    startBtn.textContent =
        "⏺ RUNNING";

    recordText.textContent =
        `${difficultyConfig[currentDifficulty].label} • Game running`;

}


/* =========================================================
   FALLING GAME
   ========================================================= */

function startFallingGame() {

    lastFrameTime =
        performance.now();

    fallingInput.focus();

    animationFrame =
        requestAnimationFrame(
            fallingLoop
        );

}


function fallingLoop(timestamp) {

    if (
        !gameRunning ||
        currentMode !== "falling"
    ) {
        return;
    }

    const delta =
        Math.min(
            timestamp - lastFrameTime,
            40
        );

    lastFrameTime =
        timestamp;

    const config =
        difficultyConfig[currentDifficulty];

    wordY +=
        fallingSpeed * delta;

    fallingSpeed =
        Math.min(
            fallingSpeed +
            config.acceleration * delta,
            config.maxSpeed
        );

    fallingWordElement.style.top =
        `${wordY}px`;

    const boardHeight =
        fallingBoard.clientHeight;

    const wordHeight =
        fallingWordElement.offsetHeight;

    const groundHeight = 12;

    if (
        wordY + wordHeight >=
        boardHeight - groundHeight
    ) {

        gameOver(
            "The word reached the ground."
        );

        return;

    }

    animationFrame =
        requestAnimationFrame(
            fallingLoop
        );

}


/* =========================================================
   FALLING INPUT
   ========================================================= */

fallingInput.addEventListener(
    "input",
    () => {

        if (
            !gameRunning ||
            currentMode !== "falling"
        ) {
            return;
        }

        const expected =
            currentWord.toLowerCase();

        const value =
            fallingInput.value.toLowerCase();

        /*
         * Wrong input is rejected immediately.
         */

        if (
            value.length <= expected.length &&
            expected.startsWith(value)
        ) {

            if (
                value.length >
                typedWord.length
            ) {

                const added =
                    value.length -
                    typedWord.length;

                totalCorrectCharacters +=
                    added;

                totalAttempts +=
                    added;

            }

            typedWord = value;

        } else {

            mistakes++;
            totalAttempts++;

            fallingInput.value =
                typedWord;

            flashInputError(
                fallingInput
            );

        }

        if (
            typedWord === expected
        ) {

            completeWord();

        }

        updateStats();

    }
);


/* =========================================================
   COMPLETE FALLING WORD
   ========================================================= */

function completeWord() {

    wordsCompleted++;

    const config =
        difficultyConfig[currentDifficulty];

    const lengthBonus =
        currentWord.length * 2;

    const speedBonus =
        Math.max(
            0,
            Math.round(
                (
                    1 -
                    wordY /
                    Math.max(
                        1,
                        fallingBoard.clientHeight
                    )
                ) * 10
            )
        );

    score +=
        config.wordScore +
        lengthBonus +
        speedBonus;

    /*
     * New word ONLY appears after
     * current word is completely typed.
     */

    currentWord =
        getNewWord();

    typedWord = "";

    fallingInput.value = "";

    wordY = 20;

    fallingWordElement.textContent =
        currentWord;

    fallingWordElement.style.top =
        `${wordY}px`;

    fallingInput.focus();

    updateStats();

}


/* =========================================================
   PARAGRAPH GAME
   ========================================================= */

function startParagraphGame() {

    paragraphInput.value = "";

    paragraphCorrectCharacters = 0;

    updateParagraphDisplay();

    updateParagraphProgress();

    paragraphInput.focus();

}


/* =========================================================
   PARAGRAPH RENDER
   ========================================================= */

function renderParagraph() {

    paragraphDisplay.innerHTML = "";

    for (
        let i = 0;
        i < currentParagraph.length;
        i++
    ) {

        const span =
            document.createElement("span");

        span.textContent =
            currentParagraph[i];

        span.dataset.index =
            String(i);

        paragraphDisplay.appendChild(
            span
        );

    }

}


/* =========================================================
   PARAGRAPH INPUT
   ========================================================= */

paragraphInput.addEventListener(
    "input",
    () => {

        if (
            !gameRunning ||
            currentMode !== "paragraph"
        ) {
            return;
        }

        const expected =
            currentParagraph;

        const value =
            paragraphInput.value;

        /*
         * Correct prefix:
         * allow it.
         */

        if (
            value.length <= expected.length &&
            expected.startsWith(value)
        ) {

            if (
                value.length >
                paragraphCorrectCharacters
            ) {

                const added =
                    value.length -
                    paragraphCorrectCharacters;

                totalCorrectCharacters +=
                    added;

                totalAttempts +=
                    added;

            }

            paragraphCorrectCharacters =
                value.length;

        } else {

            /*
             * Find exactly how much of the
             * entered text is valid.
             */

            let validLength = 0;

            const max =
                Math.min(
                    value.length,
                    expected.length
                );

            while (
                validLength < max &&
                value[validLength] ===
                expected[validLength]
            ) {

                validLength++;

            }

            /*
             * Every invalid character attempt
             * counts as a mistake.
             */

            const invalidCount =
                Math.max(
                    1,
                    value.length -
                    validLength
                );

            mistakes +=
                invalidCount;

            totalAttempts +=
                invalidCount;

            paragraphInput.value =
                expected.slice(
                    0,
                    validLength
                );

            paragraphCorrectCharacters =
                validLength;

            flashInputError(
                paragraphInput
            );

        }

        updateParagraphDisplay();

        updateParagraphProgress();

        updateStats();

        if (
            paragraphInput.value ===
            expected
        ) {

            completeParagraph();

        }

    }
);


/* =========================================================
   PARAGRAPH DISPLAY
   ========================================================= */

function updateParagraphDisplay() {

    const spans =
        paragraphDisplay.querySelectorAll(
            "span"
        );

    const value =
        paragraphInput.value;

    spans.forEach(
        (span, index) => {

            span.classList.remove(
                "correct",
                "current",
                "incorrect"
            );

            if (
                index <
                value.length
            ) {

                span.classList.add(
                    "correct"
                );

            } else if (
                index ===
                value.length
            ) {

                span.classList.add(
                    "current"
                );

            }

        }
    );

}


/* =========================================================
   PARAGRAPH PROGRESS
   ========================================================= */

function updateParagraphProgress() {

    if (!currentParagraph.length) {
        return;
    }

    const value =
        paragraphInput.value.length;

    const percentage =
        Math.min(
            100,
            Math.round(
                (
                    value /
                    currentParagraph.length
                ) * 100
            )
        );

    paragraphProgress.style.width =
        `${percentage}%`;

    paragraphProgressText.textContent =
        `${percentage}%`;

}


/* =========================================================
   COMPLETE PARAGRAPH
   ========================================================= */

function completeParagraph() {

    const time =
        getElapsedSeconds();

    const words =
        currentParagraph
            .trim()
            .split(/\s+/)
            .length;

    score =
        Math.max(
            0,
            Math.round(
                words * 15 +
                currentParagraph.length * 2 -
                mistakes * 4 +
                Math.max(
                    0,
                    300 -
                    time * 3
                )
            )
        );

    endGame(
        "Paragraph completed!"
    );

}


/* =========================================================
   TIMER
   ========================================================= */

function startTimer() {

    stopTimer();

    timerInterval =
        setInterval(
            () => {

                if (!gameRunning) {
                    return;
                }

                elapsedSeconds =
                    getElapsedSeconds();

                updateStats();

            },
            250
        );

}


function stopTimer() {

    if (timerInterval) {

        clearInterval(
            timerInterval
        );

        timerInterval = null;

    }

}


function getElapsedSeconds() {

    if (!startTime) {
        return 0;
    }

    return Math.max(
        0,
        (
            performance.now() -
            startTime
        ) / 1000
    );

}


/* =========================================================
   STATS
   ========================================================= */

function calculateAccuracy() {

    if (totalAttempts <= 0) {
        return 100;
    }

    return Math.max(
        0,
        Math.min(
            100,
            Math.round(
                (
                    totalCorrectCharacters /
                    totalAttempts
                ) * 100
            )
        )
    );

}


function calculateWPM() {

    const minutes =
        elapsedSeconds / 60;

    if (
        minutes <= 0 ||
        totalCorrectCharacters <= 0
    ) {
        return 0;
    }

    return Math.round(
        (
            totalCorrectCharacters / 5
        ) / minutes
    );

}


function updateStats() {

    if (gameRunning) {

        elapsedSeconds =
            getElapsedSeconds();

    }

    timeValue.textContent =
        formatTime(elapsedSeconds);

    wpmValue.textContent =
        calculateWPM();

    accuracyValue.textContent =
        `${calculateAccuracy()}%`;

    mistakesValue.textContent =
        mistakes;

    scoreValue.textContent =
        Math.max(
            0,
            Math.round(score)
        );

    bestValue.textContent =
        getBestScore();

}


/* =========================================================
   FORMAT TIME
   ========================================================= */

function formatTime(seconds) {

    if (seconds < 60) {

        return `${Math.floor(seconds)}s`;

    }

    const minutes =
        Math.floor(
            seconds / 60
        );

    const remaining =
        Math.floor(
            seconds % 60
        );

    return `${minutes}m ${String(
        remaining
    ).padStart(2, "0")}s`;

}


/* =========================================================
   END GAME
   ========================================================= */

function gameOver(reason) {

    endGame(reason);

}


function endGame(reason) {

    if (!gameRunning) {
        return;
    }

    elapsedSeconds =
        getElapsedSeconds();

    gameRunning = false;

    stopGameLoops();

    fallingInput.disabled = true;
    paragraphInput.disabled = true;

    const finalScore =
        Math.max(
            0,
            Math.round(score)
        );

    const oldBest =
        getBestScore();

    const newBest =
        saveBestScore(finalScore);

    resultTime.textContent =
        formatTime(elapsedSeconds);

    resultWpm.textContent =
        calculateWPM();

    resultAccuracy.textContent =
        `${calculateAccuracy()}%`;

    resultMistakes.textContent =
        mistakes;

    resultScore.textContent =
        finalScore;

    resultBest.textContent =
        newBest;

    if (
        finalScore > oldBest &&
        finalScore > 0
    ) {

        resultTitle.textContent =
            "NEW RECORD!";

        resultSubtitle.textContent =
            "You just set a new personal best.";

    } else {

        resultTitle.textContent =
            currentMode === "falling"
                ? "Game Over"
                : "Challenge Complete";

        resultSubtitle.textContent =
            reason || "Great run!";

    }

    if (
        currentMode === "falling"
    ) {

        resultExtra.innerHTML =
            `<strong>${wordsCompleted}</strong> words completed`;

    } else {

        resultExtra.innerHTML =
            `<strong>${currentParagraph.length}</strong> characters typed`;

    }

    updateStats();

    resultsOverlay.classList.remove(
        "hidden"
    );

    startBtn.textContent =
        "▶ START";

    recordText.textContent =
        reason || "Run finished.";

}


/* =========================================================
   STOP LOOPS
   ========================================================= */

function stopGameLoops() {

    stopTimer();

    if (animationFrame !== null) {

        cancelAnimationFrame(
            animationFrame
        );

        animationFrame = null;

    }

}


/* =========================================================
   OVERLAYS
   ========================================================= */

function showStartOverlay() {

    closeResultsOverlay();

    setModeDisplay();

    setDifficultyDisplay();

    startOverlay.classList.remove(
        "hidden"
    );

}


function closeStartOverlay() {

    startOverlay.classList.add(
        "hidden"
    );

}


function closeResultsOverlay() {

    resultsOverlay.classList.add(
        "hidden"
    );

}


/* =========================================================
   START BUTTON
   ========================================================= */

startBtn.addEventListener(
    "click",
    () => {

        if (!gameRunning) {

            prepareNewGame();

            startGame();

        }

    }
);


/* =========================================================
   OVERLAY START
   ========================================================= */

overlayStartBtn.addEventListener(
    "click",
    () => {

        closeStartOverlay();

        startGame();

    }
);


/* =========================================================
   RESTART
   ========================================================= */

restartBtn.addEventListener(
    "click",
    () => {

        closeStartOverlay();
        closeResultsOverlay();

        prepareNewGame();

        startGame();

    }
);


/* =========================================================
   NEW GAME
   ========================================================= */

newGameBtn.addEventListener(
    "click",
    () => {

        closeResultsOverlay();

        prepareNewGame();

        showStartOverlay();

    }
);


/* =========================================================
   RESULT PLAY AGAIN
   ========================================================= */

resultRestartBtn.addEventListener(
    "click",
    () => {

        closeResultsOverlay();

        prepareNewGame();

        startGame();

    }
);


/* =========================================================
   ERROR FEEDBACK
   ========================================================= */

function flashInputError(input) {

    input.animate(
        [
            {
                transform:
                    "translateX(0)"
            },
            {
                transform:
                    "translateX(-5px)"
            },
            {
                transform:
                    "translateX(5px)"
            },
            {
                transform:
                    "translateX(-4px)"
            },
            {
                transform:
                    "translateX(4px)"
            },
            {
                transform:
                    "translateX(0)"
            }
        ],
        {
            duration: 180,
            easing: "ease-out"
        }
    );

}


/* =========================================================
   PREVENT PASTE / DROP
   ========================================================= */

function preventPasteAndDrop(input) {

    input.addEventListener(
        "paste",
        event => {
            event.preventDefault();
        }
    );

    input.addEventListener(
        "drop",
        event => {
            event.preventDefault();
        }
    );

}


preventPasteAndDrop(fallingInput);
preventPasteAndDrop(paragraphInput);


/* =========================================================
   ESC
   ========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            !resultsOverlay.classList.contains(
                "hidden"
            )
        ) {

            closeResultsOverlay();

        }

    }
);


/* =========================================================
   INITIALIZATION
   ========================================================= */

prepareNewGame();

currentMode = "falling";
currentDifficulty = "easy";

setModeDisplay();
setDifficultyDisplay();
updateButtonStates();

showStartOverlay();

updateStats();