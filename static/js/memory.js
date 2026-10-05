document.addEventListener("DOMContentLoaded", () => {

    const startScreen = document.getElementById("startScreen");
    const gameScreen = document.getElementById("gameScreen");
    const resultScreen = document.getElementById("resultScreen");

    const startBtn = document.getElementById("startBtn");
    const restartBtn = document.getElementById("restartBtn");
    const quitBtn = document.getElementById("quitBtn");
    const playAgainBtn = document.getElementById("playAgainBtn");
    const homeBtn = document.getElementById("homeBtn");

    const soundBtn = document.getElementById("soundBtn");

    const levelDisplay = document.getElementById("levelDisplay");
    const scoreDisplay = document.getElementById("scoreDisplay");
    const timerDisplay = document.getElementById("timerDisplay");
    const comboDisplay = document.getElementById("comboDisplay");

    const pairsDisplay = document.getElementById("pairsDisplay");
    const totalPairsDisplay = document.getElementById("totalPairsDisplay");
    const progressBar = document.getElementById("progressBar");

    const gameBoard = document.getElementById("gameBoard");

    const resultIcon = document.getElementById("resultIcon");
    const resultStatus = document.getElementById("resultStatus");
    const resultTitle = document.getElementById("resultTitle");

    const finalScore = document.getElementById("finalScore");
    const finalTime = document.getElementById("finalTime");
    const finalAccuracy = document.getElementById("finalAccuracy");
    const finalCombo = document.getElementById("finalCombo");
    const finalPairs = document.getElementById("finalPairs");
    const newBest = document.getElementById("newBest");


    /* =========================
       GAME SETTINGS
    ========================= */

    const levels = {
        easy: {
            name: "EASY",
            rows: 4,
            cols: 4,
            time: 60
        },

        normal: {
            name: "NORMAL",
            rows: 4,
            cols: 5,
            time: 50
        },

        hard: {
            name: "HARD",
            rows: 5,
            cols: 6,
            time: 40
        },

        insane: {
            name: "INSANE",
            rows: 6,
            cols: 6,
            time: 30
        }
    };


    /*
        Symbol pool.

        We have many more symbols than needed so the
        game can choose a random subset for every game.
    */

    const symbols = [
        "🐉", "🚀", "🦖", "👾",
        "🎮", "🏎️", "🌌", "⚡",
        "💎", "👑", "🛸", "🔥",
        "🌙", "⭐", "🪐", "🤖",
        "🧙", "🐺", "🦊", "🦁",
        "🐯", "🦅", "🍀", "💰",
        "🎯", "🏆", "💠", "🔮",
        "⚔️", "🛡️", "🌋", "❄️",
        "☄️", "🌊", "🌟", "🧿"
    ];


    let selectedLevel = "easy";

    let cards = [];
    let firstCard = null;
    let secondCard = null;

    let lockBoard = false;

    let matchedPairs = 0;
    let totalPairs = 0;

    let score = 0;
    let combo = 0;
    let maxCombo = 0;

    let moves = 0;
    let wrongMoves = 0;

    let timeLeft = 0;
    let startingTime = 0;

    let timer = null;

    let soundEnabled = true;


    /* =========================
       DIFFICULTY SELECTION
    ========================= */

    document.querySelectorAll(".difficulty-card").forEach(button => {

        button.addEventListener("click", () => {

            document.querySelectorAll(".difficulty-card")
                .forEach(btn => btn.classList.remove("selected"));

            button.classList.add("selected");

            selectedLevel = button.dataset.level;
        });

    });


    /* =========================
       START
    ========================= */

    startBtn.addEventListener("click", () => {
        startGame();
    });


    restartBtn.addEventListener("click", () => {
        startGame();
    });


    quitBtn.addEventListener("click", () => {

        stopTimer();

        showScreen(startScreen);

    });


    playAgainBtn.addEventListener("click", () => {
        startGame();
    });


    homeBtn.addEventListener("click", () => {
        window.location.href = "/";
    });


    /* =========================
       SOUND TOGGLE
    ========================= */

    soundBtn.addEventListener("click", () => {

        soundEnabled = !soundEnabled;

        soundBtn.textContent = soundEnabled ? "🔊" : "🔇";
    });


    /* =========================
       START GAME
    ========================= */

    function startGame() {

        stopTimer();

        const settings = levels[selectedLevel];

        matchedPairs = 0;
        score = 0;
        combo = 0;
        maxCombo = 0;

        moves = 0;
        wrongMoves = 0;

        firstCard = null;
        secondCard = null;

        lockBoard = false;

        timeLeft = settings.time;
        startingTime = settings.time;

        levelDisplay.textContent = settings.name;

        scoreDisplay.textContent = "0";
        timerDisplay.textContent = timeLeft;
        comboDisplay.textContent = "×0";

        totalPairs = (settings.rows * settings.cols) / 2;

        totalPairsDisplay.textContent = totalPairs;
        pairsDisplay.textContent = "0";

        progressBar.style.width = "0%";

        createBoard(settings);

        showScreen(gameScreen);

        startTimer();

    }


    /* =========================
       CREATE BOARD
    ========================= */

    function createBoard(settings) {

        gameBoard.innerHTML = "";

        gameBoard.style.gridTemplateColumns =
            `repeat(${settings.cols}, 1fr)`;


        /*
            RANDOM SYMBOL SELECTION

            First shuffle the entire symbol pool.

            Then take only as many symbols as required
            for this level.

            Example:
            8 pairs = 8 random symbols.
        */

        const shuffledSymbols = shuffle([...symbols]);

        const selectedSymbols =
            shuffledSymbols.slice(0, totalPairs);


        /*
            Duplicate every symbol so each one
            has exactly one matching pair.
        */

        let deck = [];

        selectedSymbols.forEach(symbol => {

            deck.push(symbol);
            deck.push(symbol);

        });


        /*
            SECOND SHUFFLE

            This is important.

            It means the two matching cards are
            randomly positioned on the board.
        */

        deck = shuffle(deck);


        cards = [];


        deck.forEach((symbol, index) => {

            const card = document.createElement("button");

            card.className = "card";

            card.dataset.symbol = symbol;
            card.dataset.index = index;

            card.setAttribute(
                "aria-label",
                "Hidden memory card"
            );

            card.innerHTML = `
                <div class="card-inner">

                    <div class="card-face card-front"></div>

                    <div class="card-face card-back">
                        ${symbol}
                    </div>

                </div>
            `;

            card.addEventListener("click", () => {

                handleCardClick(card);

            });

            gameBoard.appendChild(card);

            cards.push(card);

        });

    }


    /* =========================
       CARD CLICK
    ========================= */

    function handleCardClick(card) {

        if (lockBoard) return;

        if (card === firstCard) return;

        if (card.classList.contains("matched")) return;

        if (card.classList.contains("flipped")) return;


        card.classList.add("flipped");

        playSound("flip");


        if (!firstCard) {

            firstCard = card;

            return;
        }


        secondCard = card;

        moves++;

        lockBoard = true;


        checkMatch();

    }


    /* =========================
       MATCH CHECK
    ========================= */

    function checkMatch() {

        const isMatch =
            firstCard.dataset.symbol ===
            secondCard.dataset.symbol;


        if (isMatch) {

            handleMatch();

        } else {

            handleWrong();

        }

    }


    /* =========================
       MATCH
    ========================= */

    function handleMatch() {

        firstCard.classList.add("matched");
        secondCard.classList.add("matched");

        matchedPairs++;

        combo++;

        if (combo > maxCombo) {
            maxCombo = combo;
        }


        /*
            SCORE FORMULA

            Base = 100

            Combo multiplier increases
            with consecutive matches.
        */

        const comboBonus =
            Math.min(combo * 25, 250);

        const matchScore =
            100 + comboBonus;

        score += matchScore;


        scoreDisplay.textContent = score;

        comboDisplay.textContent = `×${combo}`;

        pairsDisplay.textContent = matchedPairs;


        const progress =
            (matchedPairs / totalPairs) * 100;

        progressBar.style.width = `${progress}%`;


        playSound("match");


        setTimeout(() => {

            firstCard = null;
            secondCard = null;
            lockBoard = false;

            if (matchedPairs === totalPairs) {

                finishGame(true);

            }

        }, 350);

    }


    /* =========================
       WRONG MATCH
    ========================= */

    function handleWrong() {

        wrongMoves++;

        combo = 0;

        comboDisplay.textContent = "×0";

        score = Math.max(0, score - 25);

        scoreDisplay.textContent = score;


        firstCard.classList.add("wrong");
        secondCard.classList.add("wrong");


        playSound("wrong");


        setTimeout(() => {

            firstCard.classList.remove("flipped");
            secondCard.classList.remove("flipped");

            firstCard.classList.remove("wrong");
            secondCard.classList.remove("wrong");

            firstCard = null;
            secondCard = null;

            lockBoard = false;

        }, 650);

    }


    /* =========================
       TIMER
    ========================= */

    function startTimer() {

        stopTimer();

        timer = setInterval(() => {

            timeLeft--;

            timerDisplay.textContent = timeLeft;


            if (timeLeft <= 10) {

                timerDisplay.style.color =
                    "#ff647b";

            } else {

                timerDisplay.style.color =
                    "";

            }


            if (timeLeft <= 0) {

                finishGame(false);

            }

        }, 1000);

    }


    function stopTimer() {

        if (timer) {

            clearInterval(timer);
            timer = null;

        }

    }


    /* =========================
       FINISH GAME
    ========================= */

    function finishGame(won) {

        stopTimer();

        lockBoard = true;


        const timeUsed =
            startingTime - timeLeft;


        const accuracy =
            moves > 0
                ? Math.round(
                    ((moves - wrongMoves) / moves) * 100
                )
                : 0;


        /*
            SPEED BONUS

            Faster completion gives more points.
        */

        if (won) {

            const speedBonus =
                Math.max(0, timeLeft * 10);

            score += speedBonus;

            scoreDisplay.textContent = score;

        }


        const bestKey =
            `memoryRushBest_${selectedLevel}`;


        const oldBest =
            Number(localStorage.getItem(bestKey) || 0);


        const isNewBest =
            score > oldBest;


        if (isNewBest) {

            localStorage.setItem(
                bestKey,
                score
            );

        }


        showResult(
            won,
            score,
            timeUsed,
            accuracy,
            maxCombo,
            isNewBest
        );

    }


    /* =========================
       RESULT SCREEN
    ========================= */

    function showResult(
        won,
        finalScoreValue,
        timeUsed,
        accuracy,
        maxComboValue,
        isNewBest
    ) {

        if (won) {

            resultIcon.textContent = "🏆";

            resultStatus.textContent =
                "CHALLENGE COMPLETE";

            resultTitle.textContent =
                "MEMORY MASTER";

        } else {

            resultIcon.textContent = "⏰";

            resultStatus.textContent =
                "TIME'S UP";

            resultTitle.textContent =
                "TRY AGAIN";

        }


        finalScore.textContent =
            finalScoreValue.toLocaleString();


        finalTime.textContent =
            `${timeUsed}s`;


        finalAccuracy.textContent =
            `${accuracy}%`;


        finalCombo.textContent =
            `×${maxComboValue}`;


        finalPairs.textContent =
            `${matchedPairs}/${totalPairs}`;


        if (isNewBest) {

            newBest.classList.add("show");

        } else {

            newBest.classList.remove("show");

        }


        showScreen(resultScreen);

    }


    /* =========================
       SCREEN SWITCH
    ========================= */

    function showScreen(screen) {

        document.querySelectorAll(".screen")
            .forEach(item => {
                item.classList.remove("active");
            });

        screen.classList.add("active");

    }


    /* =========================
       SHUFFLE
    ========================= */

    function shuffle(array) {

        /*
            Fisher-Yates shuffle.

            This makes the order different
            every time the board is generated.
        */

        for (
            let i = array.length - 1;
            i > 0;
            i--
        ) {

            const j =
                Math.floor(
                    Math.random() * (i + 1)
                );

            [
                array[i],
                array[j]
            ] = [
                array[j],
                array[i]
            ];

        }

        return array;

    }


    /* =========================
       SIMPLE SOUND
    ========================= */

    function playSound(type) {

        if (!soundEnabled) return;


        /*
            Browser audio is generated using
            Web Audio API.

            No audio files are required.
        */

        try {

            const AudioContext =
                window.AudioContext ||
                window.webkitAudioContext;

            if (!AudioContext) return;

            const ctx = new AudioContext();

            const oscillator =
                ctx.createOscillator();

            const gain =
                ctx.createGain();


            oscillator.connect(gain);
            gain.connect(ctx.destination);


            if (type === "match") {

                oscillator.frequency.value = 700;
                oscillator.type = "sine";

            } else if (type === "wrong") {

                oscillator.frequency.value = 180;
                oscillator.type = "triangle";

            } else {

                oscillator.frequency.value = 420;
                oscillator.type = "sine";

            }


            gain.gain.setValueAtTime(
                0.0001,
                ctx.currentTime
            );

            gain.gain.exponentialRampToValueAtTime(
                0.06,
                ctx.currentTime + 0.01
            );

            gain.gain.exponentialRampToValueAtTime(
                0.0001,
                ctx.currentTime + 0.12
            );


            oscillator.start();

            oscillator.stop(
                ctx.currentTime + 0.13
            );

        } catch (error) {

            // Sound is optional.
            console.log("Audio unavailable.");

        }

    }

});