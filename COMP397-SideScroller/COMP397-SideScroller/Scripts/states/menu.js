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
    // MENU STATE CLASS
    var Menu = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function Menu() {
            this.play = false;
            this.play2 = false;
            this.instruction = false;
            // Instantiate Game Container
            this.game = new createjs.Container();

            //Ocean object
            this.ocean = new objects.Ocean();
            this.game.addChild(this.ocean);

            //Title Label
            this.mailPilotLabel = new objects.Label(320, 150, "Infinite Space");
            this.mailPilotLabel.font = "80px Candara";
            this.mailPilotLabel.color = "#ffffff";
            this.mailPilotLabel.regX = this.mailPilotLabel.getMeasuredWidth() * 0.5;
            this.mailPilotLabel.regY = this.mailPilotLabel.getMeasuredLineHeight() * 0.5;
            this.game.addChild(this.mailPilotLabel);

            //Play Button
            this.playButton = new objects.Button(320, 320, "playButton");
            this.playButton.on("click", this.playClicked, this);
            this.game.addChild(this.playButton);

            //Play2 Button
            this.play2Button = new objects.Button(320, 380, "play2Button");
            this.play2Button.on("click", this.play2Clicked, this);
            this.game.addChild(this.play2Button);

            //Instruction Button
            this.instructionButton = new objects.Button(320, 440, "instructionButton");
            this.instructionButton.on("click", this.instructionsClicked, this);
            this.game.addChild(this.instructionButton);

            // Add Game Container to Stage
            stage.addChild(this.game);

        } // Constructor
        Menu.prototype.playClicked = function () {
            this.play = true;
        };
        Menu.prototype.play2Clicked = function () {
            this.play2 = true;
        };
        Menu.prototype.instructionsClicked = function () {
            this.instruction = true;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        Menu.prototype.update = function () {
            this.ocean.update();
            if (this.play) {
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                constants.CLOUD_NUM = 0;
                currentState = constants.PLAY_STATE;
                stateChanged = true;
            }
            if (this.play2) {
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                constants.CLOUD_NUM = 5;
                currentState = constants.PLAY_STATE;
                stateChanged = true;
            }
            if (this.instruction) {
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                currentState = constants.INSTRUCTIONS_STATE;
                stateChanged = true;
            }
            stage.update(); // Refreshes our stage
        }; // Update Method
        return Menu;
    })();
    states.Menu = Menu; // Menu Class
})(states || (states = {})); // States Module
//# sourceMappingURL=menu.js.map