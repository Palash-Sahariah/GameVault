const SIZE = 4;

let board = [];
let score = 0;

const scoreElement =
    document.getElementById("score");

const bestElement =
    document.getElementById("best");

const tilesElement =
    document.getElementById("tiles");

const gameMessage =
    document.getElementById("gameMessage");

const messageTitle =
    document.getElementById("messageTitle");

const messageText =
    document.getElementById("messageText");

const newGameButton =
    document.getElementById("newGame");

const tryAgainButton =
    document.getElementById("tryAgain");


let bestScore =
    Number(
        localStorage.getItem(
            "gamevault-2048-best"
        )
    ) || 0;

bestElement.textContent =
    bestScore;


/* =========================
   START GAME
========================= */

function startGame() {

    board =
        Array.from(
            { length: SIZE },
            () =>
                Array(SIZE).fill(0)
        );

    score = 0;

    gameMessage.classList.add(
        "hidden"
    );

    updateScore();

    addRandomTile();

    addRandomTile();

    render();

}


function updateScore() {

    scoreElement.textContent =
        score;

    if (score > bestScore) {

        bestScore = score;

        bestElement.textContent =
            bestScore;

        localStorage.setItem(
            "gamevault-2048-best",
            bestScore
        );

    }

}


/* =========================
   RANDOM TILE
========================= */

function addRandomTile() {

    const emptyCells = [];

    for (
        let row = 0;
        row < SIZE;
        row++
    ) {

        for (
            let col = 0;
            col < SIZE;
            col++
        ) {

            if (
                board[row][col] === 0
            ) {

                emptyCells.push({
                    row,
                    col
                });

            }

        }

    }


    if (
        emptyCells.length === 0
    ) {

        return false;

    }


    const chosen =
        emptyCells[
            Math.floor(
                Math.random() *
                emptyCells.length
            )
        ];


    board[chosen.row][chosen.col] =
        Math.random() < 0.9
            ? 2
            : 4;

    return true;

}


/* =========================
   RENDER
========================= */

function render() {

    tilesElement.innerHTML = "";

    for (
        let row = 0;
        row < SIZE;
        row++
    ) {

        for (
            let col = 0;
            col < SIZE;
            col++
        ) {

            const value =
                board[row][col];

            if (value === 0) {
                continue;
            }


            const tile =
                document.createElement(
                    "div"
                );

            tile.className =
                `tile tile-${value}`;

            tile.textContent =
                value;

            tile.style.gridRow =
                row + 1;

            tile.style.gridColumn =
                col + 1;

            tilesElement.appendChild(
                tile
            );

        }

    }

}


/* =========================
   MOVE
========================= */

function move(direction) {

    let moved = false;

    const oldBoard =
        JSON.stringify(board);


    if (direction === "left") {

        for (
            let row = 0;
            row < SIZE;
            row++
        ) {

            const line =
                board[row];

            const result =
                slideLine(line);

            board[row] =
                result;

        }

    }


    if (direction === "right") {

        for (
            let row = 0;
            row < SIZE;
            row++
        ) {

            const line =
                [...board[row]]
                    .reverse();

            const result =
                slideLine(line)
                    .reverse();

            board[row] =
                result;

        }

    }


    if (direction === "up") {

        for (
            let col = 0;
            col < SIZE;
            col++
        ) {

            const line = [];

            for (
                let row = 0;
                row < SIZE;
                row++
            ) {

                line.push(
                    board[row][col]
                );

            }


            const result =
                slideLine(line);


            for (
                let row = 0;
                row < SIZE;
                row++
            ) {

                board[row][col] =
                    result[row];

            }

        }

    }


    if (direction === "down") {

        for (
            let col = 0;
            col < SIZE;
            col++
        ) {

            const line = [];

            for (
                let row = SIZE - 1;
                row >= 0;
                row--
            ) {

                line.push(
                    board[row][col]
                );

            }


            const result =
                slideLine(line);


            for (
                let row = SIZE - 1,
                    i = 0;
                row >= 0;
                row--,
                    i++
            ) {

                board[row][col] =
                    result[i];

            }

        }

    }


    moved =
        oldBoard !==
        JSON.stringify(board);


    if (!moved) {

        return;

    }


    addRandomTile();

    updateScore();

    render();


    if (hasWon()) {

        showMessage(
            "YOU REACHED 2048!",
            "Legendary move! You can continue playing."
        );

        return;

    }


    if (!canMove()) {

        showMessage(
            "GAME OVER",
            "No more moves. Try again!"
        );

    }

}


/* =========================
   SLIDE + MERGE
========================= */

function slideLine(line) {

    const filtered =
        line.filter(
            value => value !== 0
        );

    const result = [];

    for (
        let i = 0;
        i < filtered.length;
        i++
    ) {

        if (
            filtered[i] ===
            filtered[i + 1]
        ) {

            const merged =
                filtered[i] * 2;

            result.push(
                merged
            );

            score += merged;

            i++;

        } else {

            result.push(
                filtered[i]
            );

        }

    }


    while (
        result.length < SIZE
    ) {

        result.push(0);

    }


    return result;

}


/* =========================
   WIN
========================= */

function hasWon() {

    for (
        let row = 0;
        row < SIZE;
        row++
    ) {

        for (
            let col = 0;
            col < SIZE;
            col++
        ) {

            if (
                board[row][col] === 2048
            ) {

                return true;

            }

        }

    }

    return false;

}


/* =========================
   GAME OVER
========================= */

function canMove() {

    for (
        let row = 0;
        row < SIZE;
        row++
    ) {

        for (
            let col = 0;
            col < SIZE;
            col++
        ) {

            if (
                board[row][col] === 0
            ) {

                return true;

            }


            if (
                col < SIZE - 1 &&
                board[row][col] ===
                board[row][col + 1]
            ) {

                return true;

            }


            if (
                row < SIZE - 1 &&
                board[row][col] ===
                board[row + 1][col]
            ) {

                return true;

            }

        }

    }

    return false;

}


/* =========================
   MESSAGE
========================= */

function showMessage(
    title,
    text
) {

    messageTitle.textContent =
        title;

    messageText.textContent =
        text;

    gameMessage.classList.remove(
        "hidden"
    );

}


/* =========================
   KEYBOARD
========================= */

document.addEventListener(
    "keydown",
    event => {

        const keys = {

            ArrowLeft: "left",

            ArrowRight: "right",

            ArrowUp: "up",

            ArrowDown: "down"

        };


        if (
            keys[event.key]
        ) {

            event.preventDefault();

            move(
                keys[event.key]
            );

        }

    }
);


/* =========================
   MOBILE BUTTONS
========================= */

document
    .querySelectorAll(
        ".mobile-controls button"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                move(
                    button.dataset.direction
                );

            }
        );

    });


/* =========================
   TOUCH / SWIPE
========================= */

let touchStartX = 0;
let touchStartY = 0;


document
    .getElementById("gameBoard")
    .addEventListener(
        "touchstart",
        event => {

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


document
    .getElementById("gameBoard")
    .addEventListener(
        "touchend",
        event => {

            const touch =
                event.changedTouches[0];

            const dx =
                touch.clientX -
                touchStartX;

            const dy =
                touch.clientY -
                touchStartY;


            const minSwipe =
                25;


            if (
                Math.abs(dx) <
                    minSwipe &&
                Math.abs(dy) <
                    minSwipe
            ) {

                return;

            }


            if (
                Math.abs(dx) >
                Math.abs(dy)
            ) {

                if (dx > 0) {

                    move("right");

                } else {

                    move("left");

                }

            } else {

                if (dy > 0) {

                    move("down");

                } else {

                    move("up");

                }

            }

        },
        {
            passive: true
        }
    );


/* =========================
   BUTTONS
========================= */

newGameButton.addEventListener(
    "click",
    startGame
);


tryAgainButton.addEventListener(
    "click",
    startGame
);


/* =========================
   START
========================= */

startGame();