var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {

    // CLOUD CLASS
    var Cloud = (function (_super) {
        __extends(Cloud, _super);

        // CONSTRUCTOR
        function Cloud() {
            _super.call(this, "cloud");
            this.sound = "thunder";
            this.reset();
        }

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        Cloud.prototype.update = function () {
            this.y += this._dy;
            this.x -= this._dx;
            this.rotation += this._dx;
            this.rotation += this._dy;
            this._checkBounds();
        };

        // reset the Asteroids
        Cloud.prototype.reset = function () {
            this.y = Math.floor(Math.random() * 480);;
            this.x = 960;
            this._dy = Math.floor(Math.random() * 5) - 5;
            this._dx = Math.floor(Math.random() * 5) + 5;
        };

        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        Cloud.prototype._checkBounds = function () {
            // check if asteroids has left the screen
            if (this.x < (0 - this.width)) {
                this.reset();
            }
        };
        return Cloud;
    })(objects.GameObject);
    objects.Cloud = Cloud;
})(objects || (objects = {}));
//# sourceMappingURL=cloud.js.map