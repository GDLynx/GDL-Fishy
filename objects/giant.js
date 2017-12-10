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
        /*
        ctx.fillStyle = "white";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        ctx.fill();
        */
        var img = new Image();   // Create new img element
        img.src = './images/whale.png';
        ctx.drawImage(img, this.position.x, this.position.y, this.width, this.height);

        /// Particles
        for (var i = 0; i < 2; i++) {
            ctx.fillStyle = "cyan";
            ctx.fillRect(this.position.x + this.width * Math.random() * 3,
                this.position.y - this.height * Math.random() * 3, 16, 16 );
            ctx.fillRect(this.position.x - this.width * Math.random() * 3,
                this.position.y + this.height * Math.random() * 3, 16, 16 );
            ctx.fillRect(this.position.x + this.width * Math.random() * 3,
                this.position.y + this.height * Math.random() * 3, 16, 16 );
            ctx.fillRect(this.position.x - this.width * Math.random() * 3,
                this.position.y - this.height * Math.random() * 3, 16, 16 );
        }

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
