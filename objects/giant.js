/// Whale / Shark
function Giant() {
    this.position = {
        x: 0,
        y: canvasHeight / 3
    };
    this.width = 100; // length
    this.height = 100; // width

    /// Draw Object
    this.draw = function() {
        ctx.fillStyle = "white";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        ctx.fill();
    }

    /// Move / Position Object
    this.move = function() {
        this.position.y = penguin.position.y;
        this.position.x += 0.09;
        if (this.position.x + this.width >= 200) {
            this.position.x = 0;
        }
    }

    /// Collision Detection
    this.intersects = function(other) {
        if (other.position.x <= this.position.x + this.width) {
            return true;
        }
    }
}
