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
            this.x = 750;
            this._dy = Math.floor(Math.random() * 10) - 5;
            this._dx = Math.floor(Math.random() * 4) + 5;
        };
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        Cloud.prototype._checkBounds = function () {
            // check if island has left the bottom of the screen
            if (this.x < 0) {
                this.reset();
            }
        };
        return Cloud;
    })(objects.GameObject);
    objects.Cloud = Cloud;
})(objects || (objects = {}));
//# sourceMappingURL=cloud.js.map