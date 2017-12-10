/// Penguin / Player
//var alteredSpeed = 0;
var startX = 200, startY = 200;
function Penguin() {
    this.velocity = {
        x:0, y:0
    }
    this.position = {
        x: startX, y: startY
    }
    this.width = 30;
    this.height = 30;
    this.score = 0;

    /// Get Device Orientation
    this.getDeviceOrientation = function() {
        /* alteredSpeed is used in conjuction with the "eel shock" */
        if (this.score > 3 && this.score < 30) {
            this.velocity.y = Math.round(event.beta) * this.score/3;
            this.velocity.x = Math.round(event.gamma) * this.score/3 - alteredSpeed;
        } else {
            this.velocity.y = Math.round(event.beta);
            this.velocity.x = Math.round(event.gamma) - alteredSpeed;
        }
    }

    /// Move Object
    this.move = function() { // should collision / intersection checking occur here?
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        /// If this exits canvas = game-over
        if (this.position.x > canvasWidth || this.position.x < 0 ||
            this.position.y > canvasHeight || this.position.y < 0) {
                gameOver();
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

        var img = new Image();   // Create new img element
        img.src = './images/penguin.png';
        if (this.score > 3 && this.score < 30) {
            /*
            ctx.fillRect(this.position.x, this.position.y,
            this.width * this.score/3, this.height * this.score/3);
            */
            ctx.drawImage(img, this.position.x, this.position.y, this.width * this.score/3,
                 this.height * this.score / 3);
        } else {
            // ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
            ctx.drawImage(img, this.position.x, this.position.y, this.width, this.height);
        }


        /// Particles
        for (var i = 0; i < 10; i++) {
            ctx.fillStyle = "cyan";
            ctx.fillRect(this.position.x + this.width * Math.random() * 3,
                this.position.y - this.height * Math.random() * 3, 13, 13 );
            ctx.fillRect(this.position.x - this.width * Math.random() * 3,
                this.position.y + this.height * Math.random() * 3, 13, 13 );
            ctx.fillRect(this.position.x + this.width * Math.random() * 3,
                this.position.y + this.height * Math.random() * 3, 13, 13 );
            ctx.fillRect(this.position.x - this.width * Math.random() * 3,
                this.position.y - this.height * Math.random() * 3, 13, 13 );
        }
    }
    this.drawScore = function() {
        ctx.font = "32px Arial";
        ctx.fillStyle = "black";
        ctx.fillText("Score: " + this.score, this.position.x, 40);
    }
}
