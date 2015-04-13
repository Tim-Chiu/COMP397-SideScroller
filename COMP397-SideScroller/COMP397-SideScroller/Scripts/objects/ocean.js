var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // OCEAN CLASS
    var Ocean = (function (_super) {
        __extends(Ocean, _super);
        // CONSTRUCTOR
        function Ocean() {
            _super.call(this, assetLoader.getResult("ocean"));
            // PUBLIC INSTANCE VARIABLES
            this._dy = 1;
            this.reset();
        }
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        Ocean.prototype.update = function () {
            this.x -= this._dy;
            this._checkBounds();
        };
        Ocean.prototype.reset = function () {
            this.y = 0;
            this.x = 0;
        };
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        Ocean.prototype._checkBounds = function () {
            if (this.x === -760) {
                this.reset();
            }
        };
        return Ocean;
    })(createjs.Bitmap);
    objects.Ocean = Ocean;
})(objects || (objects = {}));
//# sourceMappingURL=ocean.js.map