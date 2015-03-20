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

            // Instantiate Game Container
            this.game = new createjs.Container();

            //Ocean object
            this.ocean = new objects.Ocean();
            this.game.addChild(this.ocean);

            //Title Label
            this.mailPilotLabel = new objects.Label(320, 100, "Infinite Space");
            this.mailPilotLabel.font = "60px Candara";
            this.mailPilotLabel.color = "#ffffff";
            this.mailPilotLabel.regX = this.mailPilotLabel.getMeasuredWidth() * 0.5;
            this.mailPilotLabel.regY = this.mailPilotLabel.getMeasuredLineHeight() * 0.5;
            this.game.addChild(this.mailPilotLabel);

            //Goal Label
            this.goalLabel = new objects.Label(540, 200, "Goal: Rescue the lost Astronauts!");
            this.goalLabel.font = "20px Candara";
            this.goalLabel.color = "#ffffff";
            this.game.addChild(this.goalLabel);

            //Controls Label
            this.controlLabel = new objects.Label(500, 240, "Control: Move with the mouse");
            this.controlLabel.font = "20px Candara";
            this.controlLabel.color = "#ffffff";
            this.game.addChild(this.controlLabel);

            //Play Button
            this.playButton = new objects.Button(320, 340, "playButton");
            this.playButton.on("click", this.playClicked, this);
            this.game.addChild(this.playButton);

            // Add Game Container to Stage
            stage.addChild(this.game);

        } // Constructor
        Menu.prototype.playClicked = function () {
            this.play = true;
        };

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        Menu.prototype.update = function () {
            this.ocean.update();
            if (this.play) {
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                currentState = constants.PLAY_STATE;
                stateChanged = true;
            }
            stage.update(); // Refreshes our stage
        }; // Update Method
        return Menu;
    })();
    states.Menu = Menu; // Menu Class
})(states || (states = {})); // States Module
//# sourceMappingURL=menu.js.map