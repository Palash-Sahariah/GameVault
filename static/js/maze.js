/* =========================================================
   GAMEVAULT — MAZE MASTER V2
   Fresh Maze Engine

   FEATURES
   ---------------------------------------------------------
   • Random maze generation
   • Entire maze fits on screen
   • NO zoom
   • WASD controls
   • Arrow-key controls
   • Mobile directional buttons
   • No backtracking
   • Wall collision
   • Restart same maze
   • New random maze
   • Timer
   • Mistake counter
   • Best times
   • Sound effects
   • Sound toggle
   • Responsive resizing
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const canvas =
        document.getElementById("mazeCanvas");

    const ctx =
        canvas.getContext("2d");

    const mazeArea =
        document.getElementById("mazeArea");

    const playerElement =
        document.getElementById("player");

    const startLabel =
        document.getElementById("startLabel");

    const finishLabel =
        document.getElementById("finishLabel");

    const mazeMessage =
        document.getElementById("mazeMessage");

    const timeValue =
        document.getElementById("timeValue");

    const mazeSizeElement =
        document.getElementById("mazeSize");

    const mistakesElement =
        document.getElementById("mistakes");

    const bestTimeElement =
        document.getElementById("bestTime");

    const restartButton =
        document.getElementById("restartButton");

    const newMazeButton =
        document.getElementById("newMazeButton");

    const difficultyButtons =
        document.querySelectorAll(
            ".difficulty-button"
        );

    const resultOverlay =
        document.getElementById(
            "resultOverlay"
        );

    const resultTime =
        document.getElementById(
            "resultTime"
        );

    const resultMistakes =
        document.getElementById(
            "resultMistakes"
        );

    const resultDifficulty =
        document.getElementById(
            "resultDifficulty"
        );

    const resultSize =
        document.getElementById(
            "resultSize"
        );

    const newRecord =
        document.getElementById(
            "newRecord"
        );

    const resultRestartButton =
        document.getElementById(
            "resultRestartButton"
        );

    const resultNewMazeButton =
        document.getElementById(
            "resultNewMazeButton"
        );

    const soundButton =
        document.getElementById(
            "soundButton"
        );


    /* =====================================================
       SAFETY CHECK
    ===================================================== */

    if (
        !canvas ||
        !ctx ||
        !mazeArea ||
        !playerElement
    ) {

        console.error(
            "Maze Master: Required elements missing."
        );

        return;
    }


    /* =====================================================
       DIFFICULTIES
    ===================================================== */

    const DIFFICULTIES = {

        easy: {
            name: "EASY",
            size: 21
        },

        normal: {
            name: "NORMAL",
            size: 31
        },

        hard: {
            name: "HARD",
            size: 51
        },

        insane: {
            name: "INSANE",
            size: 71
        },

        nightmare: {
            name: "NIGHTMARE",
            size: 101
        }

    };


    /* =====================================================
       GAME STATE
    ===================================================== */

    let difficulty =
        "easy";

    let size =
        DIFFICULTIES[
            difficulty
        ].size;

    let maze = [];

    let player = {
        row: 1,
        col: 1
    };

    let start = {
        row: 1,
        col: 1
    };

    let finish = {
        row: size - 2,
        col: size - 2
    };

    let visited =
        new Set();

    let gameStarted =
        false;

    let gameFinished =
        false;

    let elapsedSeconds =
        0;

    let timerInterval =
        null;

    let mistakes =
        0;

    let seed =
        0;

    let cellSize =
        10;

    let mazePixelWidth =
        0;

    let mazePixelHeight =
        0;


    /* =====================================================
       SOUND STATE
    ===================================================== */

    let soundEnabled =
        true;

    let audioContext =
        null;


    /* =====================================================
       BASIC HELPERS
    ===================================================== */

    function cellKey(
        row,
        col
    ) {

        return `${row},${col}`;
    }


    function formatTime(
        seconds
    ) {

        const minutes =
            Math.floor(
                seconds / 60
            );

        const remainingSeconds =
            seconds % 60;

        return (
            String(minutes)
                .padStart(2, "0") +
            ":" +
            String(remainingSeconds)
                .padStart(2, "0")
        );
    }


    function showMessage(
        message
    ) {

        if (mazeMessage) {

            mazeMessage.textContent =
                message;
        }
    }


    /* =====================================================
       AUDIO SYSTEM
    ===================================================== */

    function getAudioContext() {

        if (!audioContext) {

            const AudioContextClass =
                window.AudioContext ||
                window.webkitAudioContext;


            if (!AudioContextClass) {

                return null;
            }


            try {

                audioContext =
                    new AudioContextClass();

            } catch (error) {

                console.warn(
                    "AudioContext could not be created.",
                    error
                );

                return null;
            }
        }


        /*
           Some browsers create the AudioContext
           in a suspended state.
        */

        if (
            audioContext.state ===
            "suspended"
        ) {

            audioContext
                .resume()
                .catch(() => {});
        }


        return audioContext;
    }


    function playSound(
        type
    ) {

        /*
           Sound disabled.
        */

        if (!soundEnabled) {

            return;
        }


        try {

            const audio =
                getAudioContext();


            if (!audio) {

                return;
            }


            const oscillator =
                audio.createOscillator();


            const gain =
                audio.createGain();


            oscillator.connect(
                gain
            );


            gain.connect(
                audio.destination
            );


            let frequency =
                430;

            let duration =
                0.05;


            switch (type) {

                case "move":

                    frequency = 430;
                    duration = 0.035;

                    break;


                case "error":

                    frequency = 120;
                    duration = 0.10;

                    break;


                case "complete":

                    frequency = 760;
                    duration = 0.18;

                    break;


                case "new":

                    frequency = 540;
                    duration = 0.08;

                    break;


                case "restart":

                    frequency = 300;
                    duration = 0.07;

                    break;


                default:

                    frequency = 430;
                    duration = 0.05;
            }


            oscillator.type =
                "sine";


            oscillator.frequency.setValueAtTime(
                frequency,
                audio.currentTime
            );


            gain.gain.setValueAtTime(
                0.0001,
                audio.currentTime
            );


            gain.gain.exponentialRampToValueAtTime(
                0.045,
                audio.currentTime + 0.01
            );


            gain.gain.exponentialRampToValueAtTime(
                0.0001,
                audio.currentTime +
                duration
            );


            oscillator.start(
                audio.currentTime
            );


            oscillator.stop(
                audio.currentTime +
                duration
            );


        } catch (error) {

            /*
               Audio should NEVER break gameplay.
            */

            console.warn(
                "Maze sound error:",
                error
            );
        }
    }


    /* =====================================================
       SOUND BUTTON
    ===================================================== */

    if (soundButton) {

        soundButton.addEventListener(
            "click",
            () => {

                soundEnabled =
                    !soundEnabled;


                soundButton.textContent =
                    soundEnabled
                        ? "🔊"
                        : "🔇";


                if (soundEnabled) {

                    playSound(
                        "move"
                    );
                }
            }
        );
    }


    /* =====================================================
       CREATE EMPTY MAZE
    ===================================================== */

    function createEmptyMaze() {

        maze = [];


        for (
            let row = 0;
            row < size;
            row++
        ) {

            const line = [];


            for (
                let col = 0;
                col < size;
                col++
            ) {

                /*
                   1 = wall
                   0 = path
                */

                line.push(1);
            }


            maze.push(line);
        }
    }


    /* =====================================================
       MAZE GENERATION
       Recursive Backtracker
    ===================================================== */

    function generateMaze() {

        createEmptyMaze();


        const stack = [];


        const initialRow =
            1;

        const initialCol =
            1;


        maze[
            initialRow
        ][
            initialCol
        ] = 0;


        stack.push({
            row: initialRow,
            col: initialCol
        });


        const directions = [

            [-2, 0],

            [2, 0],

            [0, -2],

            [0, 2]

        ];


        while (
            stack.length > 0
        ) {

            const current =
                stack[
                    stack.length - 1
                ];


            /*
               Shuffle directions.
            */

            const shuffled =
                directions
                    .slice()
                    .sort(
                        () =>
                            Math.random() -
                            0.5
                    );


            let carved =
                false;


            for (
                const [dr, dc]
                of shuffled
            ) {

                const nextRow =
                    current.row + dr;

                const nextCol =
                    current.col + dc;


                /*
                   Keep one-cell border.
                */

                if (
                    nextRow <= 0 ||
                    nextRow >= size - 1 ||
                    nextCol <= 0 ||
                    nextCol >= size - 1
                ) {

                    continue;
                }


                /*
                   Already carved.
                */

                if (
                    maze[
                        nextRow
                    ][
                        nextCol
                    ] === 0
                ) {

                    continue;
                }


                /*
                   Remove wall between
                   current and next cell.
                */

                maze[
                    current.row +
                    dr / 2
                ][
                    current.col +
                    dc / 2
                ] = 0;


                /*
                   Carve destination.
                */

                maze[
                    nextRow
                ][
                    nextCol
                ] = 0;


                stack.push({
                    row: nextRow,
                    col: nextCol
                });


                carved =
                    true;


                break;
            }


            if (!carved) {

                stack.pop();
            }
        }


        /*
           Entrance.
        */

        maze[1][0] = 0;


        /*
           Exit.
        */

        maze[
            size - 2
        ][
            size - 1
        ] = 0;


        start = {
            row: 1,
            col: 1
        };


        finish = {
            row: size - 2,
            col: size - 2
        };
    }


    /* =====================================================
       CHECK THAT MAZE HAS A SOLUTION
    ===================================================== */

    function hasSolution() {

        const queue = [

            {
                row: start.row,
                col: start.col
            }

        ];


        const seen =
            new Set();


        seen.add(
            cellKey(
                start.row,
                start.col
            )
        );


        let queueIndex =
            0;


        while (
            queueIndex <
            queue.length
        ) {

            const current =
                queue[
                    queueIndex++
                ];


            if (
                current.row ===
                    finish.row &&
                current.col ===
                    finish.col
            ) {

                return true;
            }


            const directions = [

                [-1, 0],

                [1, 0],

                [0, -1],

                [0, 1]

            ];


            for (
                const [dr, dc]
                of directions
            ) {

                const nextRow =
                    current.row + dr;

                const nextCol =
                    current.col + dc;


                if (
                    nextRow < 0 ||
                    nextRow >= size ||
                    nextCol < 0 ||
                    nextCol >= size
                ) {

                    continue;
                }


                if (
                    maze[
                        nextRow
                    ][
                        nextCol
                    ] !== 0
                ) {

                    continue;
                }


                const key =
                    cellKey(
                        nextRow,
                        nextCol
                    );


                if (
                    seen.has(key)
                ) {

                    continue;
                }


                seen.add(key);


                queue.push({
                    row: nextRow,
                    col: nextCol
                });
            }
        }


        return false;
    }


    /* =====================================================
       CREATE NEW MAZE
    ===================================================== */

    function createNewMaze() {

        /*
           Stop old timer.
        */

        stopTimer();


        /*
           Reset game.
        */

        gameStarted =
            false;

        gameFinished =
            false;

        elapsedSeconds =
            0;

        mistakes =
            0;


        visited.clear();


        /*
           Get current difficulty.
        */

        size =
            DIFFICULTIES[
                difficulty
            ].size;


        /*
           Generate a valid maze.

           This loop normally runs only once,
           because recursive backtracking naturally
           produces a connected maze.
        */

        let attempts = 0;


        do {

            seed =
                Math.floor(
                    Math.random() *
                    999999999
                );


            generateMaze();

            attempts++;


            /*
               Safety protection.
            */

            if (
                attempts > 20
            ) {

                console.warn(
                    "Maze generation took too many attempts."
                );

                break;
            }


        } while (
            !hasSolution()
        );


        /*
           Reset player.
        */

        player = {
            row: start.row,
            col: start.col
        };


        /*
           Starting cell counts as visited.
        */

        visited.add(
            cellKey(
                player.row,
                player.col
            )
        );


        /*
           Reset UI.
        */

        timeValue.textContent =
            "00:00";


        mistakesElement.textContent =
            "0";


        mazeSizeElement.textContent =
            `${size} × ${size}`;


        /*
           Hide result.
        */

        resultOverlay.classList.remove(
            "show"
        );


        /*
           Calculate correct size.
        */

        calculateCanvasSize();


        /*
           Draw.
        */

        drawMaze();


        updatePlayer();

        updateLabels();

        updateBestTime();


        showMessage(
            "READY"
        );


        playSound(
            "new"
        );


        setTimeout(() => {

            if (!gameFinished) {

                showMessage(
                    "FIND THE FINISH"
                );
            }

        }, 650);
    }


    /* =====================================================
       CALCULATE CANVAS SIZE
       Entire maze MUST fit.
    ===================================================== */

    function calculateCanvasSize() {

        const availableWidth =
            Math.max(
                100,
                mazeArea.clientWidth -
                30
            );


        const availableHeight =
            Math.max(
                100,
                mazeArea.clientHeight -
                30
            );


        /*
           Largest possible cell size.
        */

        cellSize =
            Math.floor(
                Math.min(
                    availableWidth /
                        size,

                    availableHeight /
                        size
                )
            );


        /*
           Minimum safe canvas cell size.
        */

        cellSize =
            Math.max(
                2,
                cellSize
            );


        mazePixelWidth =
            cellSize *
            size;


        mazePixelHeight =
            cellSize *
            size;


        /*
           High-DPI support.
        */

        const devicePixelRatio =
            Math.min(
                window.devicePixelRatio ||
                1,
                2
            );


        canvas.width =
            Math.floor(
                mazePixelWidth *
                devicePixelRatio
            );


        canvas.height =
            Math.floor(
                mazePixelHeight *
                devicePixelRatio
            );


        canvas.style.width =
            `${mazePixelWidth}px`;


        canvas.style.height =
            `${mazePixelHeight}px`;


        ctx.setTransform(
            devicePixelRatio,
            0,
            0,
            devicePixelRatio,
            0,
            0
        );
    }


    /* =====================================================
       DRAW MAZE
    ===================================================== */

    function drawMaze() {

        /*
           Clear.
        */

        ctx.clearRect(
            0,
            0,
            mazePixelWidth,
            mazePixelHeight
        );


        /*
           Background.
        */

        ctx.fillStyle =
            "#030914";


        ctx.fillRect(
            0,
            0,
            mazePixelWidth,
            mazePixelHeight
        );


        /*
           Draw maze cells.
        */

        for (
            let row = 0;
            row < size;
            row++
        ) {

            for (
                let col = 0;
                col < size;
                col++
            ) {

                const x =
                    col *
                    cellSize;


                const y =
                    row *
                    cellSize;


                if (
                    maze[row][col] === 1
                ) {

                    /*
                       Wall.
                    */

                    ctx.fillStyle =
                        "#17263d";


                    ctx.fillRect(
                        x,
                        y,
                        cellSize,
                        cellSize
                    );


                    /*
                       Wall highlight.
                    */

                    if (
                        cellSize >= 5
                    ) {

                        ctx.fillStyle =
                            "rgba(90,140,190,0.18)";


                        ctx.fillRect(
                            x,
                            y,
                            cellSize,
                            Math.max(
                                1,
                                cellSize *
                                0.08
                            )
                        );
                    }


                } else {

                    /*
                       Path.
                    */

                    ctx.fillStyle =
                        "#07101c";


                    ctx.fillRect(
                        x,
                        y,
                        cellSize,
                        cellSize
                    );
                }
            }
        }


        /*
           Draw visited route.
        */

        for (
            const key
            of visited
        ) {

            const parts =
                key.split(",");


            const row =
                Number(parts[0]);


            const col =
                Number(parts[1]);


            /*
               Don't paint over player.
            */

            if (
                row === player.row &&
                col === player.col
            ) {

                continue;
            }


            const x =
                col *
                cellSize;


            const y =
                row *
                cellSize;


            ctx.fillStyle =
                "rgba(20,156,255,0.13)";


            ctx.fillRect(
                x + 1,
                y + 1,
                Math.max(
                    1,
                    cellSize - 2
                ),
                Math.max(
                    1,
                    cellSize - 2
                )
            );
        }


        /*
           Start.
        */

        drawSpecialCell(
            start.row,
            start.col,
            "rgba(40,255,145,0.24)"
        );


        /*
           Finish.
        */

        drawSpecialCell(
            finish.row,
            finish.col,
            "rgba(255,208,70,0.28)"
        );


        /*
           Start marker.
        */

        drawMarker(
            start.row,
            start.col,
            "#38ff9a"
        );


        /*
           Finish marker.
        */

        drawMarker(
            finish.row,
            finish.col,
            "#ffd04d"
        );
    }


    /* =====================================================
       SPECIAL CELL
    ===================================================== */

    function drawSpecialCell(
        row,
        col,
        color
    ) {

        const x =
            col *
            cellSize;


        const y =
            row *
            cellSize;


        ctx.fillStyle =
            color;


        ctx.fillRect(
            x + 1,
            y + 1,
            Math.max(
                1,
                cellSize - 2
            ),
            Math.max(
                1,
                cellSize - 2
            )
        );
    }


    /* =====================================================
       SMALL START / FINISH MARKER
    ===================================================== */

    function drawMarker(
        row,
        col,
        color
    ) {

        const centerX =
            col *
            cellSize +
            cellSize / 2;


        const centerY =
            row *
            cellSize +
            cellSize / 2;


        const radius =
            Math.max(
                1.5,
                cellSize *
                0.25
            );


        ctx.beginPath();


        ctx.arc(
            centerX,
            centerY,
            radius,
            0,
            Math.PI * 2
        );


        ctx.fillStyle =
            color;


        ctx.fill();
    }


    /* =====================================================
       MOVEMENT VALIDATION
    ===================================================== */

    function canMove(
        row,
        col
    ) {

        /*
           Outside maze.
        */

        if (
            row < 0 ||
            row >= size ||
            col < 0 ||
            col >= size
        ) {

            return false;
        }


        /*
           Wall.
        */

        if (
            maze[row][col] !== 0
        ) {

            return false;
        }


        /*
           Already visited.

           THIS IS THE NO-BACKTRACKING RULE.
        */

        if (
            visited.has(
                cellKey(
                    row,
                    col
                )
            )
        ) {

            return false;
        }


        return true;
    }


    /* =====================================================
       MOVE PLAYER
    ===================================================== */

    function movePlayer(
        direction
    ) {

        if (gameFinished) {

            return;
        }


        let nextRow =
            player.row;


        let nextCol =
            player.col;


        switch (direction) {

            case "up":

                nextRow--;

                break;


            case "down":

                nextRow++;

                break;


            case "left":

                nextCol--;

                break;


            case "right":

                nextCol++;

                break;


            default:

                return;
        }


        /*
           Invalid movement.
        */

        if (
            !canMove(
                nextRow,
                nextCol
            )
        ) {

            mistakes++;


            mistakesElement.textContent =
                mistakes;


            showMessage(
                "BLOCKED!"
            );


            playSound(
                "error"
            );


            /*
               Shake maze.
            */

            mazeArea.classList.remove(
                "shake"
            );


            void mazeArea.offsetWidth;


            mazeArea.classList.add(
                "shake"
            );


            return;
        }


        /*
           First valid movement
           starts timer.
        */

        if (!gameStarted) {

            gameStarted =
                true;


            startTimer();
        }


        /*
           Move.
        */

        player.row =
            nextRow;


        player.col =
            nextCol;


        /*
           Mark visited.
        */

        visited.add(
            cellKey(
                player.row,
                player.col
            )
        );


        /*
           Redraw.
        */

        drawMaze();


        updatePlayer();


        updateLabels();


        playSound(
            "move"
        );


        /*
           Check finish.
        */

        if (
            player.row ===
                finish.row &&
            player.col ===
                finish.col
        ) {

            completeMaze();

        } else {

            showMessage(
                "KEEP GOING"
            );
        }
    }


    /* =====================================================
       PLAYER POSITION
    ===================================================== */

    function updatePlayer() {

        /*
           Canvas is centered in maze area.
        */

        const canvasLeft =
            (
                mazeArea.clientWidth -
                mazePixelWidth
            ) / 2;


        const canvasTop =
            (
                mazeArea.clientHeight -
                mazePixelHeight
            ) / 2;


        const x =
            canvasLeft +
            player.col *
                cellSize +
            cellSize / 2;


        const y =
            canvasTop +
            player.row *
                cellSize +
            cellSize / 2;


        playerElement.style.left =
            `${x}px`;


        playerElement.style.top =
            `${y}px`;


        /*
           Keep player visible.

           Small cells -> player stays larger.
        */

        const playerSize =
            Math.max(
                12,
                Math.min(
                    28,
                    cellSize *
                    0.85
                )
            );


        playerElement.style.width =
            `${playerSize}px`;


        playerElement.style.height =
            `${playerSize}px`;
    }


    /* =====================================================
       START / FINISH LABELS
    ===================================================== */

    function updateLabels() {

        const canvasLeft =
            (
                mazeArea.clientWidth -
                mazePixelWidth
            ) / 2;


        const canvasTop =
            (
                mazeArea.clientHeight -
                mazePixelHeight
            ) / 2;


        const startX =
            canvasLeft +
            start.col *
                cellSize +
            cellSize / 2;


        const startY =
            canvasTop +
            start.row *
                cellSize +
            cellSize / 2;


        const finishX =
            canvasLeft +
            finish.col *
                cellSize +
            cellSize / 2;


        const finishY =
            canvasTop +
            finish.row *
                cellSize +
            cellSize / 2;


        startLabel.style.left =
            `${startX}px`;


        startLabel.style.top =
            `${startY}px`;


        finishLabel.style.left =
            `${finishX}px`;


        finishLabel.style.top =
            `${finishY}px`;


        /*
           On very large mazes,
           cells become too small for text.
        */

        if (
            cellSize < 9
        ) {

            startLabel.style.display =
                "none";


            finishLabel.style.display =
                "none";

        } else {

            startLabel.style.display =
                "block";


            finishLabel.style.display =
                "block";
        }
    }


    /* =====================================================
       TIMER
    ===================================================== */

    function startTimer() {

        stopTimer();


        timerInterval =
            setInterval(() => {

                elapsedSeconds++;


                timeValue.textContent =
                    formatTime(
                        elapsedSeconds
                    );

            }, 1000);
    }


    function stopTimer() {

        if (
            timerInterval !== null
        ) {

            clearInterval(
                timerInterval
            );


            timerInterval =
                null;
        }
    }


    /* =====================================================
       COMPLETE MAZE
    ===================================================== */

    function completeMaze() {

        if (gameFinished) {

            return;
        }


        gameFinished =
            true;


        stopTimer();


        showMessage(
            "MAZE COMPLETE!"
        );


        const currentTime =
            elapsedSeconds;


        const bestKey =
            `mazeBest_${difficulty}`;


        const oldBest =
            Number(
                localStorage.getItem(
                    bestKey
                ) || 0
            );


        const isRecord =
            oldBest === 0 ||
            currentTime < oldBest;


        if (isRecord) {

            localStorage.setItem(
                bestKey,
                String(
                    currentTime
                )
            );
        }


        /*
           Result screen.
        */

        resultTime.textContent =
            formatTime(
                currentTime
            );


        resultMistakes.textContent =
            mistakes;


        resultDifficulty.textContent =
            DIFFICULTIES[
                difficulty
            ].name;


        resultSize.textContent =
            `${size} × ${size}`;


        newRecord.classList.toggle(
            "show",
            isRecord
        );


        updateBestTime();


        playSound(
            "complete"
        );


        /*
           Small delay feels better.
        */

        setTimeout(() => {

            resultOverlay.classList.add(
                "show"
            );

        }, 450);
    }


    /* =====================================================
       BEST TIME
    ===================================================== */

    function updateBestTime() {

        const key =
            `mazeBest_${difficulty}`;


        const best =
            Number(
                localStorage.getItem(
                    key
                ) || 0
            );


        bestTimeElement.textContent =
            best > 0
                ? formatTime(best)
                : "—";
    }


    /* =====================================================
       RESTART SAME MAZE
    ===================================================== */

    function restartSameMaze() {

        resultOverlay.classList.remove(
            "show"
        );


        stopTimer();


        gameStarted =
            false;


        gameFinished =
            false;


        elapsedSeconds =
            0;


        mistakes =
            0;


        player = {
            row: start.row,
            col: start.col
        };


        visited.clear();


        visited.add(
            cellKey(
                player.row,
                player.col
            )
        );


        timeValue.textContent =
            "00:00";


        mistakesElement.textContent =
            "0";


        showMessage(
            "RESTARTED"
        );


        drawMaze();


        updatePlayer();


        updateLabels();


        playSound(
            "restart"
        );


        setTimeout(() => {

            if (!gameFinished) {

                showMessage(
                    "FIND THE FINISH"
                );
            }

        }, 500);
    }


    /* =====================================================
       KEYBOARD CONTROLS
    ===================================================== */

    document.addEventListener(
        "keydown",
        event => {

            let direction =
                null;


            switch (
                event.key.toLowerCase()
            ) {

                case "arrowup":

                case "w":

                    direction =
                        "up";

                    break;


                case "arrowdown":

                case "s":

                    direction =
                        "down";

                    break;


                case "arrowleft":

                case "a":

                    direction =
                        "left";

                    break;


                case "arrowright":

                case "d":

                    direction =
                        "right";

                    break;


                default:

                    return;
            }


            event.preventDefault();


            movePlayer(
                direction
            );
        }
    );


    /* =====================================================
       MOBILE BUTTONS
    ===================================================== */

    document
        .querySelectorAll(
            ".arrow-button"
        )
        .forEach(button => {

            const direction =
                button.dataset.direction;


            button.addEventListener(
                "pointerdown",
                event => {

                    event.preventDefault();


                    movePlayer(
                        direction
                    );
                }
            );
        });


    /* =====================================================
       DIFFICULTY BUTTONS
    ===================================================== */

    difficultyButtons.forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    const selected =
                        button.dataset.difficulty;


                    if (
                        selected ===
                        difficulty
                    ) {

                        return;
                    }


                    difficulty =
                        selected;


                    difficultyButtons
                        .forEach(
                            item => {

                                item.classList
                                    .remove(
                                        "active"
                                    );
                            }
                        );


                    button.classList.add(
                        "active"
                    );


                    updateBestTime();


                    createNewMaze();
                }
            );
        }
    );


    /* =====================================================
       MAIN BUTTONS
    ===================================================== */

    restartButton.addEventListener(
        "click",
        restartSameMaze
    );


    newMazeButton.addEventListener(
        "click",
        createNewMaze
    );


    resultRestartButton.addEventListener(
        "click",
        restartSameMaze
    );


    resultNewMazeButton.addEventListener(
        "click",
        createNewMaze
    );


    /* =====================================================
       RESPONSIVE RESIZE
    ===================================================== */

    let resizeTimer =
        null;


    function handleResize() {

        clearTimeout(
            resizeTimer
        );


        resizeTimer =
            setTimeout(() => {

                /*
                   Recalculate the largest
                   possible maze size.
                */

                calculateCanvasSize();


                drawMaze();


                updatePlayer();


                updateLabels();

            }, 100);
    }


    window.addEventListener(
        "resize",
        handleResize
    );


    /* =====================================================
       RESIZE OBSERVER
    ===================================================== */

    if (
        "ResizeObserver" in window
    ) {

        const resizeObserver =
            new ResizeObserver(
                () => {

                    handleResize();

                }
            );


        resizeObserver.observe(
            mazeArea
        );
    }


    /* =====================================================
       INITIALIZE GAME
    ===================================================== */

    createNewMaze();

});