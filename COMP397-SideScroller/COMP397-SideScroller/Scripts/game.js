
/*
Source File: Game.js
Author/Developer's Name: Tim Chiu
Last Modified Date: 4/17/2015
Date Last Modified: 4/17/2015
Program Description: Final Project - Arcade Game
*/

// Global game Variables
var canvas;
var stage;
var assetLoader;
var stats = new Stats();
var currentScore = 0;
var highScore = 0;

// Game State Variables
var currentState;
var currentStateFunction;
var stateChanged = false;
var gamePlay;
var gamePlayLeveltwo;
var gameOver;
var instructions;
var menu;
var manifest = [
    { id: "cloud", src: "assets/images/asteroid.png" },
    { id: "island", src: "assets/images/astronaut.png" },
    { id: "ocean", src: "assets/images/space.jpg" },
    { id: "plane", src: "assets/images/rocket.png" },
    { id: "playButton", src: "assets/images/level1Button.png" },
    { id: "playAgainButton", src: "assets/images/playAgainButton.png" },
    { id: "instructionButton", src: "assets/images/instructionButton.png" },
    { id: "play2Button", src: "assets/images/level2Button.png" },
    { id: "backButton", src: "assets/images/backButton.png" },
    { id: "engine", src: "assets/audio/rocket2.mp3" },
    { id: "yay", src: "assets/audio/saved.mp3" },
    { id: "thunder", src: "assets/audio/explosion.mp3" }
];
function Preload() {
    assetLoader = new createjs.LoadQueue(); // create a new preloader
    assetLoader.installPlugin(createjs.Sound); // need plugin for sounds
    assetLoader.on("complete", init, this); // when assets finished preloading - then init function
    assetLoader.loadManifest(manifest);
}
function init() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20); // Enable mouse events
    createjs.Ticker.setFPS(60); // 60 frames per second
    createjs.Ticker.addEventListener("tick", gameLoop);
    setupStats();
    currentState = constants.MENU_STATE;
    changeState(currentState);
}
function setupStats() {
    stats.setMode(0);
    // align top-left
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '650px';
    stats.domElement.style.top = '440px';
    document.body.appendChild(stats.domElement);
}
function gameLoop() {
    stats.begin();
    if (stateChanged) {
        changeState(currentState);
        stateChanged = false;
    }
    else {
        currentStateFunction.update();
    }
    stats.end();
}
function changeState(state) {
    switch (state) {
        case constants.MENU_STATE:
            // instantiate menu screen
            menu = new states.Menu();
            currentStateFunction = menu;
            break;
        case constants.PLAY_STATE:
            // instantiate game play screen
            gamePlay = new states.GamePlay();
            currentStateFunction = gamePlay;
            break;
        case constants.GAME_OVER_STATE:
            // instantiate game over screen
            gameOver = new states.GameOver();
            currentStateFunction = gameOver;
            break;
        case constants.INSTRUCTIONS_STATE:
            //instantiate instructions screen
            instructions = new states.Instructions();
            currentStateFunction = instructions;
            break;
    }
}
//# sourceMappingURL=game.js.map