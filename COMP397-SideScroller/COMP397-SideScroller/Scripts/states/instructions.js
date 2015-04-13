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
    var Instructions = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function Instructions() {
            this.play = false;
            // Instantiate Game Container
            this.game = new createjs.Container();

            //Ocean object
            this.ocean = new objects.Ocean();
            this.game.addChild(this.ocean);

            //Instruction Label
            this.instructionsLabel = new objects.Label(320, 40, "Instructions");
            this.instructionsLabel.font = "60px Candara";
            this.instructionsLabel.color = "#ffffff";
            this.instructionsLabel.regX = this.instructionsLabel.getMeasuredWidth() * 0.5;
            this.instructionsLabel.regY = this.instructionsLabel.getMeasuredLineHeight() * 0.5;
            this.game.addChild(this.instructionsLabel);

            //Goal Label
            this.instructionsLabel = new objects.Label(320, 120, "You are on a rescue mission");
            this.instructionsLabel.font = "20px Candara";
            this.instructionsLabel.color = "#ffffff";
            this.instructionsLabel.regX = this.instructionsLabel.getMeasuredWidth() * 0.5;
            this.game.addChild(this.instructionsLabel);

            //Objective Label
            this.instructionsLabel = new objects.Label(320, 180, "Rescue the astronauts, floating in space");
            this.instructionsLabel.font = "20px Candara";
            this.instructionsLabel.color = "#ffffff";
            this.instructionsLabel.regX = this.instructionsLabel.getMeasuredWidth() * 0.5;
            this.game.addChild(this.instructionsLabel);

            //Avoid Label
            this.instructionsLabel = new objects.Label(320, 240, "Avoid astroids, they will damage your ship");
            this.instructionsLabel.font = "20px Candara";
            this.instructionsLabel.color = "#ffffff";
            this.instructionsLabel.regX = this.instructionsLabel.getMeasuredWidth() * 0.5;
            this.game.addChild(this.instructionsLabel);

            //Controls Label
            this.controlLabel = new objects.Label(500, 300, "Controls: Move with the mouse");
            this.controlLabel.font = "20px Candara";
            this.controlLabel.color = "#ffffff";
            this.game.addChild(this.controlLabel);

            //Play Again Button
            this.playButton = new objects.Button(320, 360, "playButton");
            this.playButton.on("click", this.playClicked, this);
            this.game.addChild(this.playButton);

            // Add Game Container to Stage
            stage.addChild(this.game);
        } // Constructor
        Instructions.prototype.playClicked = function () {
            this.play = true;
        };

        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        Instructions.prototype.update = function () {
            this.ocean.update();
            if (this.play) {
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                currentState = constants.PLAY_STATE;
                stateChanged = true;
            }
            stage.update(); // Refreshes our stage
        }; // Update Method
        return Instructions;
    })();
    states.Instructions = Instructions; // Game Over Class
})(states || (states = {})); // States Module
//# sourceMappingURL=gameover.js.map