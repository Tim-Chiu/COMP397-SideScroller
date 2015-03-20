var objects;
(function (objects) {
    // SCOREBOARD CLASS ++++++++++++++++++++++++++++++++++++++++
    var ScoreBoard = (function () {
        // CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++
        function ScoreBoard(game) {
            this.score = 0;
            this.lives = 3;
            this.active = true;
            this._livesLabel = new createjs.Text("Lives: ", "20px Candara", "#ffffff");
            game.addChild(this._livesLabel);
            this._livesLabel.x = 10;
            this._livesLabel.y = 10;
            this._scoreLabel = new createjs.Text("Score: ", "20px Candara", "#ffffff");
            this._scoreLabel.x = 400;
            this._scoreLabel.y = 10;
            game.addChild(this._scoreLabel);
        }
        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++
        ScoreBoard.prototype.update = function () {
            this._livesLabel.text = "Lives: " + this.lives;
            this._scoreLabel.text = "Score: " + this.score;
        };
        return ScoreBoard;
    })();
    objects.ScoreBoard = ScoreBoard;
})(objects || (objects = {}));
//# sourceMappingURL=scoreboard.js.map