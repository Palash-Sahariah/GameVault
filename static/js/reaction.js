/* =========================================
   REACTION RUSH
   FALLING OBJECT GAME
========================================= */


/* =========================================
   ELEMENTS
========================================= */

const startScreen = document.getElementById("startScreen");
const gameScreen = document.getElementById("gameScreen");
const resultScreen = document.getElementById("resultScreen");

const startBtn = document.getElementById("startBtn");
const playAgainBtn = document.getElementById("playAgainBtn");

const pauseBtn = document.getElementById("pauseBtn");
const resumeBtn = document.getElementById("resumeBtn");

const quitBtn = document.getElementById("quitBtn");
const pauseQuitBtn = document.getElementById("pauseQuitBtn");

const pauseOverlay = document.getElementById("pauseOverlay");

const soundBtn = document.getElementById("soundBtn");

const gameArea = document.getElementById("gameArea");
const objectsLayer = document.getElementById("objectsLayer");

const scoreEl = document.getElementById("score");
const comboEl = document.getElementById("combo");
const caughtEl = document.getElementById("caught");
const levelEl = document.getElementById("level");

const speedFill = document.getElementById("speedFill");
const speedText = document.getElementById("speedText");

const levelMessage = document.getElementById("levelMessage");
const comboPopup = document.getElementById("comboPopup");

const startBest = document.getElementById("startBest");

const finalScore = document.getElementById("finalScore");
const finalBest = document.getElementById("finalBest");
const finalCombo = document.getElementById("finalCombo");
const finalCaught = document.getElementById("finalCaught");
const finalLevel = document.getElementById("finalLevel");
const finalTime = document.getElementById("finalTime");
const finalDifficulty = document.getElementById("finalDifficulty");

const newRecord = document.getElementById("newRecord");

const difficultyButtons =
    document.querySelectorAll(".difficulty-btn");


/* =========================================
   DIFFICULTIES
========================================= */

const difficulties = {

    easy: {

        name: "EASY",

        startSpeed: 105,

        maxSpeed: 235,

        accelerationTime: 90,

        startSpawn: 1100,

        minSpawn: 720

    },


    normal: {

        name: "NORMAL",

        startSpeed: 135,

        maxSpeed: 310,

        accelerationTime: 85,

        startSpawn: 980,

        minSpawn: 620

    },


    hard: {

        name: "HARD",

        startSpeed: 170,

        maxSpeed: 390,

        accelerationTime: 80,

        startSpawn: 870,

        minSpawn: 540

    },


    insane: {

        name: "INSANE",

        startSpeed: 205,

        maxSpeed: 470,

        accelerationTime: 75,

        startSpawn: 780,

        minSpawn: 470

    }

};


/* =========================================
   FALLING OBJECTS
========================================= */

const objectTypes = [

    {
        type: "coin",
        emoji: "🪙",
        points: 10,
        weight: 34
    },

    {
        type: "apple",
        emoji: "🍎",
        points: 15,
        weight: 27
    },

    {
        type: "star",
        emoji: "⭐",
        points: 25,
        weight: 18
    },

    {
        type: "diamond",
        emoji: "💎",
        points: 50,
        weight: 12
    },

    {
        type: "lightning",
        emoji: "⚡",
        points: 75,
        weight: 6
    },

    {
        type: "flame",
        emoji: "🔥",
        points: 100,
        weight: 3
    }

];


/* =========================================
   GAME STATE
========================================= */

let selectedDifficulty = "easy";

let running = false;

let paused = false;

let score = 0;

let combo = 0;

let bestCombo = 0;

let caught = 0;

let level = 1;

let startTime = 0;

let elapsedSeconds = 0;

let lastFrame = 0;

let spawnTimer = 0;

let animationFrame = null;

let objectId = 0;

let objects = [];

let soundEnabled = true;

let audioContext = null;


/* =========================================
   AUDIO
========================================= */

function initAudio() {

    if (!audioContext) {

        audioContext =
            new (
                window.AudioContext ||
                window.webkitAudioContext
            )();

    }

    if (
        audioContext &&
        audioContext.state === "suspended"
    ) {

        audioContext.resume();

    }

}


function playSound(
    frequency = 500,
    duration = 0.07,
    type = "sine",
    volume = 0.035
) {

    if (!soundEnabled) return;

    try {

        initAudio();

        const oscillator =
            audioContext.createOscillator();

        const gain =
            audioContext.createGain();

        oscillator.type = type;

        oscillator.frequency.value =
            frequency;

        gain.gain.setValueAtTime(
            volume,
            audioContext.currentTime
        );

        gain.gain.exponentialRampToValueAtTime(
            0.001,
            audioContext.currentTime + duration
        );

        oscillator.connect(gain);

        gain.connect(audioContext.destination);

        oscillator.start();

        oscillator.stop(
            audioContext.currentTime + duration
        );

    } catch (error) {

        /* Sound is optional */

    }

}


/* =========================================
   SOUND BUTTON
========================================= */

soundBtn.addEventListener(
    "click",
    () => {

        soundEnabled =
            !soundEnabled;

        soundBtn.textContent =
            soundEnabled
                ? "🔊"
                : "🔇";

        if (soundEnabled) {

            playSound(
                650,
                0.08
            );

        }

    }
);


/* =========================================
   DIFFICULTY SELECTION
========================================= */

difficultyButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                difficultyButtons.forEach(
                    btn => {

                        btn.classList.remove(
                            "selected"
                        );

                    }
                );

                button.classList.add(
                    "selected"
                );

                selectedDifficulty =
                    button.dataset.difficulty;

                updateStartBest();

                playSound(
                    450,
                    0.05
                );

            }
        );

    }
);


/* =========================================
   LOCAL STORAGE
========================================= */

function getBestScore() {

    return Number(
        localStorage.getItem(
            `reactionRushBest_${selectedDifficulty}`
        ) || 0
    );

}


function saveBestScore(value) {

    localStorage.setItem(
        `reactionRushBest_${selectedDifficulty}`,
        String(value)
    );

}


function updateStartBest() {

    startBest.textContent =
        getBestScore().toLocaleString();

}


updateStartBest();


/* =========================================
   START GAME
========================================= */

startBtn.addEventListener(
    "click",
    startGame
);


playAgainBtn.addEventListener(
    "click",
    startGame
);


function startGame() {

    initAudio();

    cancelAnimationFrame(
        animationFrame
    );

    clearGameObjects();

    score = 0;

    combo = 0;

    bestCombo = 0;

    caught = 0;

    level = 1;

    elapsedSeconds = 0;

    spawnTimer = 0;

    objectId = 0;

    startTime =
        performance.now();

    lastFrame =
        startTime;

    running = true;

    paused = false;

    pauseOverlay.classList.add(
        "hidden"
    );

    startScreen.classList.add(
        "hidden"
    );

    resultScreen.classList.add(
        "hidden"
    );

    gameScreen.classList.remove(
        "hidden"
    );

    updateStats();

    updateSpeedDisplay();

    showLevelMessage(
        "LEVEL 1"
    );

    playSound(
        600,
        0.1
    );

    animationFrame =
        requestAnimationFrame(
            gameLoop
        );

}


/* =========================================
   MAIN GAME LOOP
========================================= */

function gameLoop(timestamp) {

    if (!running) return;

    animationFrame =
        requestAnimationFrame(
            gameLoop
        );


    if (paused) {

        lastFrame =
            timestamp;

        return;

    }


    let delta =
        (timestamp - lastFrame) / 1000;


    lastFrame =
        timestamp;


    /*
        Prevent very large jumps if the
        browser temporarily freezes.
    */

    delta =
        Math.min(
            delta,
            0.05
        );


    elapsedSeconds =
        (
            timestamp -
            startTime
        ) / 1000;


    updateDifficulty();

    updateObjects(
        delta
    );


    if (!running) {

        return;

    }


    spawnTimer +=
        delta * 1000;


    const currentSpawn =
        getCurrentSpawnInterval();


    if (
        spawnTimer >=
        currentSpawn
    ) {

        spawnTimer = 0;

        spawnObject();


        /*
            Gradually introduce multiple
            objects on screen.
        */

        if (
            elapsedSeconds > 15 &&
            Math.random() <
            getMultiSpawnChance()
        ) {

            setTimeout(
                () => {

                    if (
                        running &&
                        !paused
                    ) {

                        spawnObject();

                    }

                },
                120
            );

        }

    }


    updateStats();

}


/* =========================================
   SMOOTH FALLING SPEED
========================================= */

function getCurrentSpeed() {

    const difficulty =
        difficulties[
            selectedDifficulty
        ];


    /*
        Progress:

        0 = beginning
        1 = maximum speed

        Once it reaches 1,
        speed NEVER increases again.
    */

    const progress =
        Math.min(
            elapsedSeconds /
            difficulty.accelerationTime,
            1
        );


    /*
        Smoothstep creates gradual
        acceleration instead of sudden jumps.
    */

    const smoothProgress =
        progress *
        progress *
        (3 - 2 * progress);


    return (
        difficulty.startSpeed +
        (
            difficulty.maxSpeed -
            difficulty.startSpeed
        ) *
        smoothProgress
    );

}


/* =========================================
   SMOOTH SPAWN RATE
========================================= */

function getCurrentSpawnInterval() {

    const difficulty =
        difficulties[
            selectedDifficulty
        ];


    const progress =
        Math.min(
            elapsedSeconds /
            difficulty.accelerationTime,
            1
        );


    const smoothProgress =
        progress *
        progress *
        (3 - 2 * progress);


    return (
        difficulty.startSpawn -
        (
            difficulty.startSpawn -
            difficulty.minSpawn
        ) *
        smoothProgress
    );

}


/* =========================================
   MULTIPLE OBJECT CHANCE
========================================= */

function getMultiSpawnChance() {

    /*
        Starts at 0.

        Slowly increases.

        Maximum = 28%.
    */

    const progress =
        Math.min(
            elapsedSeconds / 100,
            1
        );


    return progress * 0.28;

}


/* =========================================
   LEVEL SYSTEM
========================================= */

function updateDifficulty() {

    /*
        New level every 15 seconds.

        Maximum displayed level = 10.
    */

    const newLevel =
        Math.min(
            10,
            Math.floor(
                elapsedSeconds / 15
            ) + 1
        );


    if (
        newLevel !== level
    ) {

        level =
            newLevel;

        showLevelMessage(
            `LEVEL ${level}`
        );

        playSound(
            700 +
            level * 50,
            0.12,
            "triangle",
            0.045
        );

    }

}


/* =========================================
   SPAWN OBJECT
========================================= */

function spawnObject() {

    if (
        !running ||
        paused
    ) {

        return;

    }


    const data =
        chooseObject();


    const areaWidth =
        objectsLayer.clientWidth;


    const objectSize =
        getObjectSize();


    const padding = 8;


    const maxX =
        Math.max(
            padding,
            areaWidth -
            objectSize -
            padding
        );


    const x =
        padding +
        Math.random() *
        maxX;


    const element =
        document.createElement(
            "div"
        );


    element.className =
        `falling-object ${data.type}`;


    element.textContent =
        data.emoji;


    element.dataset.id =
        objectId;


    element.setAttribute(
        "aria-label",
        `${data.points} point object`
    );


    element.style.width =
        `${objectSize}px`;


    element.style.height =
        `${objectSize}px`;


    element.style.left =
        `${x}px`;


    /*
        IMPORTANT FIX:

        top stays at 0px.

        The entire vertical movement
        is controlled by transform.
    */

    element.style.top =
        "0px";


    /*
        Start slightly above the
        visible game area.
    */

    const startY =
        -objectSize - 15;


    /*
        Object receives the current
        speed when spawned.
    */

    const speed =
        getCurrentSpeed();


    const gameObject = {

        id: objectId,

        element: element,

        type: data.type,

        emoji: data.emoji,

        points: data.points,

        x: x,

        y: startY,

        size: objectSize,

        speed: speed,

        caught: false

    };


    objectId++;


    /*
        Pointer events work for:

        PC mouse
        Laptop touchpad
        Mobile touchscreen
    */

    element.addEventListener(
        "pointerdown",
        event => {

            event.preventDefault();

            event.stopPropagation();

            catchObject(
                gameObject
            );

        }
    );


    objectsLayer.appendChild(
        element
    );


    objects.push(
        gameObject
    );

}


/* =========================================
   CHOOSE RANDOM OBJECT
========================================= */

function chooseObject() {

    let totalWeight = 0;


    objectTypes.forEach(
        object => {

            totalWeight +=
                object.weight;

        }
    );


    let random =
        Math.random() *
        totalWeight;


    for (
        const object
        of objectTypes
    ) {

        random -=
            object.weight;


        if (
            random <= 0
        ) {

            return object;

        }

    }


    return objectTypes[0];

}


/* =========================================
   OBJECT SIZE
========================================= */

function getObjectSize() {

    /*
        Objects become slightly smaller
        over time.

        The reduction is limited so the
        game doesn't become unfair.
    */

    const progress =
        Math.min(
            elapsedSeconds / 100,
            1
        );


    let baseSize;


    if (
        window.innerWidth <= 480
    ) {

        baseSize = 49;

    } else if (
        window.innerWidth <= 800
    ) {

        baseSize = 55;

    } else {

        baseSize = 64;

    }


    const reduction =
        progress * 10;


    return Math.max(
        43,
        baseSize - reduction
    );

}


/* =========================================
   UPDATE FALLING OBJECTS
========================================= */

function updateObjects(delta) {

    /*
        objectsLayer height represents
        the actual falling play area.
    */

    const floorY =
        objectsLayer.clientHeight -
        getFloorHeight();


    for (
        let i = objects.length - 1;
        i >= 0;
        i--
    ) {

        const object =
            objects[i];


        if (
            object.caught
        ) {

            objects.splice(
                i,
                1
            );

            continue;

        }


        /*
            Move object down.
        */

        object.y +=
            object.speed *
            delta;


        /*
            Apply exactly the same Y
            coordinate used for collision.
        */

        object.element.style.transform =
            `translate3d(0, ${object.y}px, 0)`;


        /*
            GAME OVER CONDITION

            The object is considered missed
            only when its BOTTOM reaches
            the TOP of the danger floor.

            No invisible gap.
        */

        if (
            object.y +
            object.size >=
            floorY
        ) {

            gameOver();

            return;

        }

    }

}


/* =========================================
   FLOOR HEIGHT
========================================= */

function getFloorHeight() {

    /*
        CSS floor:

            height: 8px;

        Therefore collision occurs exactly
        when the object's bottom reaches
        the top edge of that 8px floor.
    */

    return 8;

}


/* =========================================
   CATCH OBJECT
========================================= */

function catchObject(
    object
) {

    if (
        !running ||
        paused ||
        object.caught
    ) {

        return;

    }


    object.caught =
        true;


    object.element.style.pointerEvents =
        "none";


    caught++;

    combo++;


    if (
        combo > bestCombo
    ) {

        bestCombo =
            combo;

    }


    /*
        Combo multiplier:

        x1 = 1x
        x2 = 2x
        x3 = 3x
        x4+ = 4x
    */

    const multiplier =
        Math.min(
            combo,
            4
        );


    const earned =
        object.points *
        multiplier;


    score +=
        earned;


    showCatchEffect(
        object
    );


    if (
        combo >= 3
    ) {

        showComboPopup(
            `🔥 COMBO x${combo}`
        );

    }


    playSound(
        500 +
        Math.min(
            combo,
            8
        ) * 55,

        0.055,

        "sine",

        0.035
    );


    /*
        Catch animation.
    */

    object.element.style.transform =
        "translate3d(0, " +
        object.y +
        "px, 0) scale(1.45)";


    object.element.style.opacity =
        "0";


    setTimeout(
        () => {

            if (
                object.element &&
                object.element.parentNode
            ) {

                object.element.remove();

            }

        },
        100
    );


    const index =
        objects.indexOf(
            object
        );


    if (
        index !== -1
    ) {

        objects.splice(
            index,
            1
        );

    }

}


/* =========================================
   CATCH SCORE EFFECT
========================================= */

function showCatchEffect(
    object
) {

    const effect =
        document.createElement(
            "div"
        );


    effect.className =
        "catch-effect";


    effect.textContent =
        `+${object.points}`;


    effect.style.left =
        `${
            object.x +
            object.size / 2
        }px`;


    effect.style.top =
        `${object.y}px`;


    objectsLayer.appendChild(
        effect
    );


    setTimeout(
        () => {

            effect.remove();

        },
        550
    );

}


/* =========================================
   COMBO POPUP
========================================= */

function showComboPopup(
    text
) {

    comboPopup.textContent =
        text;


    comboPopup.classList.remove(
        "show"
    );


    void comboPopup.offsetWidth;


    comboPopup.classList.add(
        "show"
    );

}


/* =========================================
   LEVEL MESSAGE
========================================= */

function showLevelMessage(
    text
) {

    levelMessage.textContent =
        text;


    levelMessage.classList.remove(
        "show"
    );


    void levelMessage.offsetWidth;


    levelMessage.classList.add(
        "show"
    );

}


/* =========================================
   SPEED DISPLAY
========================================= */

function updateSpeedDisplay() {

    const difficulty =
        difficulties[
            selectedDifficulty
        ];


    const currentSpeed =
        getCurrentSpeed();


    const speedRange =
        difficulty.maxSpeed -
        difficulty.startSpeed;


    let percentage = 0;


    if (
        speedRange > 0
    ) {

        percentage =
            (
                (
                    currentSpeed -
                    difficulty.startSpeed
                ) /
                speedRange
            ) * 100;

    }


    const safePercentage =
        Math.max(
            0,
            Math.min(
                100,
                percentage
            )
        );


    speedFill.style.width =
        `${safePercentage}%`;


    speedText.textContent =
        `${Math.round(
            safePercentage
        )}%`;

}


/* =========================================
   UPDATE STATS
========================================= */

function updateStats() {

    scoreEl.textContent =
        score.toLocaleString();


    comboEl.textContent =
        `x${combo}`;


    caughtEl.textContent =
        caught;


    levelEl.textContent =
        level;


    updateSpeedDisplay();

}


/* =========================================
   PAUSE
========================================= */

pauseBtn.addEventListener(
    "click",
    () => {

        if (!running) {
            return;
        }


        paused =
            true;


        pauseOverlay.classList.remove(
            "hidden"
        );

    }
);


resumeBtn.addEventListener(
    "click",
    () => {

        paused =
            false;


        pauseOverlay.classList.add(
            "hidden"
        );


        lastFrame =
            performance.now();

    }
);


/* =========================================
   QUIT
========================================= */

quitBtn.addEventListener(
    "click",
    quitGame
);


pauseQuitBtn.addEventListener(
    "click",
    quitGame
);


function quitGame() {

    running =
        false;


    paused =
        false;


    cancelAnimationFrame(
        animationFrame
    );


    clearGameObjects();


    pauseOverlay.classList.add(
        "hidden"
    );


    gameScreen.classList.add(
        "hidden"
    );


    resultScreen.classList.add(
        "hidden"
    );


    startScreen.classList.remove(
        "hidden"
    );


    updateStartBest();

}


/* =========================================
   GAME OVER
========================================= */

function gameOver() {

    if (!running) {
        return;
    }


    running =
        false;


    paused =
        false;


    cancelAnimationFrame(
        animationFrame
    );


    const survivalTime =
        Math.floor(
            elapsedSeconds
        );


    const oldBest =
        getBestScore();


    const isNewRecord =
        score > oldBest;


    if (isNewRecord) {

        saveBestScore(
            score
        );

    }


    playSound(
        150,
        0.35,
        "sawtooth",
        0.055
    );


    finalScore.textContent =
        score.toLocaleString();


    finalBest.textContent =
        Math.max(
            score,
            oldBest
        ).toLocaleString();


    finalCombo.textContent =
        `x${bestCombo}`;


    finalCaught.textContent =
        caught;


    finalLevel.textContent =
        level;


    finalTime.textContent =
        `${survivalTime}s`;


    finalDifficulty.textContent =
        difficulties[
            selectedDifficulty
        ].name;


    if (
        isNewRecord &&
        score > 0
    ) {

        newRecord.classList.remove(
            "hidden"
        );

    } else {

        newRecord.classList.add(
            "hidden"
        );

    }


    clearGameObjects();


    gameScreen.classList.add(
        "hidden"
    );


    resultScreen.classList.remove(
        "hidden"
    );

}


/* =========================================
   CLEAR OBJECTS
========================================= */

function clearGameObjects() {

    objects.forEach(
        object => {

            if (
                object.element &&
                object.element.parentNode
            ) {

                object.element.remove();

            }

        }
    );


    objects = [];


    objectsLayer.innerHTML =
        "";

}


/* =========================================
   KEYBOARD SUPPORT
========================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            running
        ) {

            if (paused) {

                paused =
                    false;


                pauseOverlay.classList.add(
                    "hidden"
                );


                lastFrame =
                    performance.now();

            } else {

                paused =
                    true;


                pauseOverlay.classList.remove(
                    "hidden"
                );

            }

        }

    }
);


/* =========================================
   MOBILE TOUCH SUPPORT
========================================= */

gameArea.addEventListener(
    "touchstart",
    event => {

        event.preventDefault();

    },
    {
        passive: false
    }
);


gameArea.addEventListener(
    "touchmove",
    event => {

        event.preventDefault();

    },
    {
        passive: false
    }
);


/* =========================================
   INITIAL STATE
========================================= */

updateStartBest();