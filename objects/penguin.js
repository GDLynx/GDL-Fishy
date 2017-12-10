/// Penguin / Player
var alteredSpeed = 0; 
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
        this.velocity.y = Math.round(event.beta);
        this.velocity.x = Math.round(event.gamma);
    }

    /// Move Object
    this.move = function() { // should collision / intersection checking occur here?
        this.position.x += this.velocity.x - alteredSpeed;
        this.position.y += this.velocity.y - alteredSpeed;
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
