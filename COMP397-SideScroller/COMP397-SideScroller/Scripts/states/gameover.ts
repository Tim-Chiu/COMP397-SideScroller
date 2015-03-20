/// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/scoreboard.ts" />

var states;
(function (states) {
    // GAME OVER STATE CLASS
    var GameOver = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function GameOver() {
            this.playAgain = false;

            // Instantiate Game Container
            this.game = new createjs.Container();

            //Ocean object
            this.ocean = new objects.Ocean();
            this.game.addChild(this.ocean);

            //Game Over Label
            this.gameOverLabel = new objects.Label(320, 40, "GAME OVER");
            this.gameOverLabel.font = "60px Candara";
            this.gameOverLabel.regX = this.gameOverLabel.getMeasuredWidth() * 0.5;
            this.gameOverLabel.regY = this.gameOverLabel.getMeasuredLineHeight() * 0.5;
            this.game.addChild(this.gameOverLabel);

            //High Score Label
            this.highScoreLabel = new objects.Label(320, 180, ("High Score: " + highScore));
            this.game.addChild(this.highScoreLabel);

            //Final Score Label
            this.scoreLabel = new objects.Label(320, 120, ("Score: " + currentScore));
            this.game.addChild(this.scoreLabel);

            //Play Again Button
            this.playAgainButton = new objects.Button(320, 280, "playAgainButton");
            this.playAgainButton.on("click", this.playAgainClicked, this);
            this.game.addChild(this.playAgainButton);

            // Add Game Container to Stage
            stage.addChild(this.game);
        } // Constructor
        GameOver.prototype.playAgainClicked = function () {
            this.playAgain = true;
        };

        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        GameOver.prototype.update = function () {
            this.ocean.update();
            if (this.playAgain) {
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                currentState = constants.PLAY_STATE;
                stateChanged = true;
            }
            stage.update(); // Refreshes our stage
        }; // Update Method
        return GameOver;
    })();
    states.GameOver = GameOver; // Game Over Class
})(states || (states = {})); // States Module
//# sourceMappingURL=gameover.js.map