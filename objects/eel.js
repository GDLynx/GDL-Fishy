/// Eel
function Eel() {
    this.speed = 2 + Math.random() * 4;
    this.dir = Math.random() * 10;
    this.position = {
        x: canvasWidth,
        y: Math.random() * canvasHeight
    };
    this.width = 30;
    this.height = 30;

    /// Draw Object
    this.draw = function() {
        ctx.fillStyle = "blue";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        ctx.fill();
    }

    /// Shock
    this.shock = function() {
        alert("Shocked by eel");
        return true;
    } 

    /// Move / Position Object
    this.move = function() {
        if (this.position.x >= canvasWidth || this.position.x <= 0) {
            this.dir = Math.random() * 10;
            this.position.x = 0 + this.width/2;
            this.position.y = Math.random() * canvasHeight;
            this.speed = 2 + Math.random() * 4;
        } else {
            if (this.dir >= 5) {
                this.position.x += this.speed;
            } else {
                this.position.x -= this.speed;
            }
        }
    }

    this.intersects = function(other) { /* Is used to check collision between penguin
            and eel which will then result in the shock effect*/
        if (this.position.x < other.position.x + other.width &&
                this.position.x + this.width > other.position.x - 40 &&
                this.position.y < other.position.y + other.height &&
                this.height + this.position.y > other.position.y) {
            // alert("Collected");
            console.log("Collision");
            return true;
        } else {
            //console.log("No collision");
        }
    }
}
