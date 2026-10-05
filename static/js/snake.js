/* =========================================================
   GAMEVAULT — SNAKE
   ========================================================= */

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const scoreEl = document.getElementById("score");
const bestEl = document.getElementById("best");
const finalScoreEl = document.getElementById("finalScore");

const startScreen = document.getElementById("startScreen");
const pauseScreen = document.getElementById("pauseScreen");
const gameOverScreen = document.getElementById("gameOverScreen");

const startBtn = document.getElementById("startBtn");
const resumeBtn = document.getElementById("resumeBtn");
const restartBtn = document.getElementById("restartBtn");

const pauseBtn = document.getElementById("pauseBtn");
const restartGameBtn = document.getElementById("restartGameBtn");

const upBtn = document.getElementById("upBtn");
const downBtn = document.getElementById("downBtn");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");


/* =========================================================
   GAME SETTINGS
   ========================================================= */

const GRID_SIZE = 24;

let snake = [];
let food = {};

let direction = {
    x: 1,
    y: 0
};

let nextDirection = {
    x: 1,
    y: 0
};

let score = 0;

let bestScore =
    Number(localStorage.getItem("gamevaultSnakeBest")) || 0;

let gameRunning = false;
let paused = false;
let gameOver = false;

let gameLoop = null;

let speed = 130;


/* =========================================================
   INITIAL DISPLAY
   ========================================================= */

bestEl.textContent = bestScore;


/* =========================================================
   CANVAS SIZE
   ========================================================= */

function resizeCanvas() {

    const rect = canvas.getBoundingClientRect();

    const size = Math.floor(
        Math.min(rect.width, rect.height)
    );

    if (size <= 0) return;

    canvas.width = size;
    canvas.height = size;

    draw();
}

window.addEventListener("resize", resizeCanvas);


/* =========================================================
   START / RESET GAME
   ========================================================= */

function startGame() {

    clearInterval(gameLoop);

    snake = [
        { x: 12, y: 12 },
        { x: 11, y: 12 },
        { x: 10, y: 12 }
    ];

    direction = {
        x: 1,
        y: 0
    };

    nextDirection = {
        x: 1,
        y: 0
    };

    score = 0;

    speed = 130;

    gameRunning = true;
    paused = false;
    gameOver = false;

    scoreEl.textContent = "0";

    startScreen.classList.add("hidden");
    pauseScreen.classList.add("hidden");
    gameOverScreen.classList.add("hidden");

    spawnFood();

    resizeCanvas();

    gameLoop = setInterval(update, speed);
}


/* =========================================================
   FOOD
   ========================================================= */

function spawnFood() {

    let valid = false;

    while (!valid) {

        food = {
            x: Math.floor(Math.random() * GRID_SIZE),
            y: Math.floor(Math.random() * GRID_SIZE)
        };

        valid = !snake.some(
            segment =>
                segment.x === food.x &&
                segment.y === food.y
        );
    }
}


/* =========================================================
   GAME UPDATE
   ========================================================= */

function update() {

    if (!gameRunning || paused) {
        return;
    }

    direction = {
        ...nextDirection
    };

    const head = {
        x: snake[0].x + direction.x,
        y: snake[0].y + direction.y
    };


    /* ---------------- WALL COLLISION ---------------- */

    if (
        head.x < 0 ||
        head.x >= GRID_SIZE ||
        head.y < 0 ||
        head.y >= GRID_SIZE
    ) {

        endGame();

        return;
    }


    /* ---------------- SELF COLLISION ---------------- */

    const hitSelf = snake.some(
        segment =>
            segment.x === head.x &&
            segment.y === head.y
    );

    if (hitSelf) {

        endGame();

        return;
    }


    snake.unshift(head);


    /* ---------------- FOOD ---------------- */

    if (
        head.x === food.x &&
        head.y === food.y
    ) {

        score += 10;

        scoreEl.textContent = score;

        if (score > bestScore) {

            bestScore = score;

            bestEl.textContent = bestScore;

            localStorage.setItem(
                "gamevaultSnakeBest",
                bestScore
            );
        }

        spawnFood();

        increaseSpeed();

    } else {

        snake.pop();
    }


    draw();
}


/* =========================================================
   SPEED
   ========================================================= */

function increaseSpeed() {

    /*
       Every 50 points the snake gets faster.
    */

    const newSpeed =
        Math.max(
            55,
            130 - Math.floor(score / 50) * 10
        );

    if (newSpeed !== speed) {

        speed = newSpeed;

        clearInterval(gameLoop);

        gameLoop = setInterval(
            update,
            speed
        );
    }
}


/* =========================================================
   DRAW
   ========================================================= */

function draw() {

    if (!canvas.width || !canvas.height) {
        return;
    }

    const cell =
        canvas.width / GRID_SIZE;


    /* ---------------- BACKGROUND ---------------- */

    ctx.fillStyle = "#061225";

    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    /* ---------------- GRID ---------------- */

    ctx.strokeStyle =
        "rgba(80, 130, 190, 0.10)";

    ctx.lineWidth = 1;

    for (let i = 0; i <= GRID_SIZE; i++) {

        const p = i * cell;

        ctx.beginPath();

        ctx.moveTo(p, 0);
        ctx.lineTo(p, canvas.height);

        ctx.stroke();

        ctx.beginPath();

        ctx.moveTo(0, p);
        ctx.lineTo(canvas.width, p);

        ctx.stroke();
    }


    /* ---------------- FOOD ---------------- */

    drawFood(cell);


    /* ---------------- SNAKE ---------------- */

    snake.forEach(
        (segment, index) => {

            const padding = cell * 0.09;

            const x =
                segment.x * cell + padding;

            const y =
                segment.y * cell + padding;

            const size =
                cell - padding * 2;


            ctx.fillStyle =
                index === 0
                    ? "#39ff88"
                    : "#16c96b";

            ctx.shadowColor =
                "rgba(0,255,130,0.55)";

            ctx.shadowBlur =
                index === 0 ? 12 : 6;

            roundRect(
                ctx,
                x,
                y,
                size,
                size,
                cell * 0.20
            );

            ctx.fill();

            ctx.shadowBlur = 0;


            /* Head eyes */

            if (index === 0) {

                drawEyes(
                    x,
                    y,
                    size,
                    cell
                );
            }
        }
    );
}


/* =========================================================
   FOOD DRAWING
   ========================================================= */

function drawFood(cell) {

    const centerX =
        food.x * cell + cell / 2;

    const centerY =
        food.y * cell + cell / 2;

    const radius =
        cell * 0.31;


    /* Glow */

    ctx.shadowColor =
        "rgba(255,40,40,0.8)";

    ctx.shadowBlur = 16;


    /* Apple */

    ctx.fillStyle = "#ff3030";

    ctx.beginPath();

    ctx.arc(
        centerX,
        centerY + 2,
        radius,
        0,
        Math.PI * 2
    );

    ctx.fill();


    ctx.shadowBlur = 0;


    /* Highlight */

    ctx.fillStyle =
        "rgba(255,255,255,0.65)";

    ctx.beginPath();

    ctx.arc(
        centerX - radius * 0.35,
        centerY - radius * 0.35,
        radius * 0.18,
        0,
        Math.PI * 2
    );

    ctx.fill();


    /* Stem */

    ctx.strokeStyle = "#6b3b1d";

    ctx.lineWidth = Math.max(2, cell * 0.07);

    ctx.beginPath();

    ctx.moveTo(
        centerX,
        centerY - radius
    );

    ctx.lineTo(
        centerX + cell * 0.08,
        centerY - radius * 1.35
    );

    ctx.stroke();


    /* Leaf */

    ctx.fillStyle = "#43e36f";

    ctx.beginPath();

    ctx.ellipse(
        centerX + cell * 0.13,
        centerY - radius * 1.2,
        cell * 0.13,
        cell * 0.07,
        -0.4,
        0,
        Math.PI * 2
    );

    ctx.fill();
}


/* =========================================================
   SNAKE EYES
   ========================================================= */

function drawEyes(x, y, size, cell) {

    ctx.fillStyle = "#07110c";

    let eye1;
    let eye2;


    if (direction.x === 1) {

        eye1 = {
            x: x + size * 0.72,
            y: y + size * 0.30
        };

        eye2 = {
            x: x + size * 0.72,
            y: y + size * 0.70
        };

    } else if (direction.x === -1) {

        eye1 = {
            x: x + size * 0.28,
            y: y + size * 0.30
        };

        eye2 = {
            x: x + size * 0.28,
            y: y + size * 0.70
        };

    } else if (direction.y === -1) {

        eye1 = {
            x: x + size * 0.30,
            y: y + size * 0.28
        };

        eye2 = {
            x: x + size * 0.70,
            y: y + size * 0.28
        };

    } else {

        eye1 = {
            x: x + size * 0.30,
            y: y + size * 0.72
        };

        eye2 = {
            x: x + size * 0.70,
            y: y + size * 0.72
        };
    }


    const eyeSize =
        Math.max(2, cell * 0.07);


    ctx.beginPath();

    ctx.arc(
        eye1.x,
        eye1.y,
        eyeSize,
        0,
        Math.PI * 2
    );

    ctx.arc(
        eye2.x,
        eye2.y,
        eyeSize,
        0,
        Math.PI * 2
    );

    ctx.fill();
}


/* =========================================================
   ROUND RECTANGLE
   ========================================================= */

function roundRect(
    ctx,
    x,
    y,
    width,
    height,
    radius
) {

    ctx.beginPath();

    ctx.roundRect(
        x,
        y,
        width,
        height,
        radius
    );
}


/* =========================================================
   DIRECTION
   ========================================================= */

function changeDirection(x, y) {

    if (!gameRunning || gameOver) {
        return;
    }

    /*
       Prevent instant 180° turns.
    */

    if (
        x === -direction.x &&
        y === -direction.y
    ) {
        return;
    }

    if (
        x === -nextDirection.x &&
        y === -nextDirection.y
    ) {
        return;
    }

    nextDirection = {
        x,
        y
    };
}


/* =========================================================
   KEYBOARD
   ========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        const key =
            event.key.toLowerCase();


        if (
            [
                "arrowup",
                "arrowdown",
                "arrowleft",
                "arrowright",
                " ",
                "w",
                "a",
                "s",
                "d"
            ].includes(key)
        ) {

            event.preventDefault();
        }


        switch (key) {

            case "arrowup":
            case "w":
                changeDirection(0, -1);
                break;

            case "arrowdown":
            case "s":
                changeDirection(0, 1);
                break;

            case "arrowleft":
            case "a":
                changeDirection(-1, 0);
                break;

            case "arrowright":
            case "d":
                changeDirection(1, 0);
                break;

            case " ":
                togglePause();
                break;
        }
    }
);


/* =========================================================
   PAUSE
   ========================================================= */

function togglePause() {

    if (!gameRunning || gameOver) {
        return;
    }

    paused = !paused;

    if (paused) {

        pauseScreen.classList.remove("hidden");

        pauseBtn.textContent =
            "▶ RESUME";

    } else {

        pauseScreen.classList.add("hidden");

        pauseBtn.textContent =
            "⏸ PAUSE";
    }
}


/* =========================================================
   GAME OVER
   ========================================================= */

function endGame() {

    gameRunning = false;

    gameOver = true;

    paused = false;

    clearInterval(gameLoop);

    finalScoreEl.textContent = score;

    gameOverScreen.classList.remove("hidden");

    pauseScreen.classList.add("hidden");

    pauseBtn.textContent =
        "⏸ PAUSE";
}


/* =========================================================
   BUTTONS
   ========================================================= */

startBtn.addEventListener(
    "click",
    startGame
);


resumeBtn.addEventListener(
    "click",
    togglePause
);


restartBtn.addEventListener(
    "click",
    startGame
);


pauseBtn.addEventListener(
    "click",
    togglePause
);


restartGameBtn.addEventListener(
    "click",
    startGame
);


/* =========================================================
   D-PAD
   ========================================================= */

upBtn.addEventListener(
    "pointerdown",
    () => changeDirection(0, -1)
);

downBtn.addEventListener(
    "pointerdown",
    () => changeDirection(0, 1)
);

leftBtn.addEventListener(
    "pointerdown",
    () => changeDirection(-1, 0)
);

rightBtn.addEventListener(
    "pointerdown",
    () => changeDirection(1, 0)
);


/* =========================================================
   MOBILE SWIPE
   ========================================================= */

let touchStartX = 0;
let touchStartY = 0;


canvas.addEventListener(
    "touchstart",
    function (event) {

        const touch =
            event.changedTouches[0];

        touchStartX =
            touch.clientX;

        touchStartY =
            touch.clientY;

    },
    {
        passive: true
    }
);


canvas.addEventListener(
    "touchend",
    function (event) {

        const touch =
            event.changedTouches[0];

        const dx =
            touch.clientX - touchStartX;

        const dy =
            touch.clientY - touchStartY;

        const minSwipe = 25;


        if (
            Math.abs(dx) < minSwipe &&
            Math.abs(dy) < minSwipe
        ) {
            return;
        }


        if (Math.abs(dx) > Math.abs(dy)) {

            if (dx > 0) {

                changeDirection(1, 0);

            } else {

                changeDirection(-1, 0);
            }

        } else {

            if (dy > 0) {

                changeDirection(0, 1);

            } else {

                changeDirection(0, -1);
            }
        }

    },
    {
        passive: true
    }
);


/* =========================================================
   INITIAL DRAW
   ========================================================= */

resizeCanvas();