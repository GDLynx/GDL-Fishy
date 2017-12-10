/// Penguin / Player
//var alteredSpeed = 0;
function Penguin() {
    this.velocity = {
        x:0, y:0
    }
    this.position = {
        x: 200, y: 100
    }
    this.width = 30;
    this.height = 30;
    this.score = 0;

    /// Get Device Orientation
    this.getDeviceOrientation = function() {
        /* alteredSpeed is used in conjuction with the "eel shock" */
        // this.velocity.y = Math.round(event.beta) - alteredSpeed;
        this.velocity.x = Math.round(event.gamma) - alteredSpeed;
    }

    /// Move Object
    this.move = function() { // should collision / intersection checking occur here?
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        /// If this exits canvas = game-over
        if (this.position.x > canvasWidth || this.position.x < 0 ||
            this.position.y > canvasHeight || this.position.y < 0) {
            alert("Game over");
            this.score = 0; 
        }
    }

    this.intersects = function(other) {
        if (this.position.x < other.position.x + other.width &&
                this.position.x + this.width > other.position.x &&
                this.position.y < other.position.y + other.height &&
                this.height + this.position.y > other.position.y) {
            // alert("Collected");
            console.log("Collision");
            return true;
        } else {
            //console.log("No collision");
        }
    }

    /// Draw Object
    this.draw = function() {
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
    this.drawScore = function() {
        ctx.font = "32px Arial";
        ctx.fillText("Score: " + this.score, this.position.x, 40);
    }
}
