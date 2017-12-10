/// Squid
function Squid() {
    this.speed = 1 + Math.random();
    this.dir = Math.random() * 10;
    this.position = {
        x: canvasWidth,
        y: Math.random() * canvasHeight
    };
    this.width = 30;
    this.height = 30;

    /// Draw Object
    this.draw = function() {
        //console.log("Drawing squid");
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        ctx.fill();
        ctx.fillStyle = "black";
        //ctx.fillText("Squid", this.position.x, this.position.y-this.width);
    }

    this.ink = function() {
        for (var t = 0; t < Math.random() * 400; t++) {
            ctx.fillRect(this.position.x + Math.random() * this.width * 2,
                this.position.y + Math.random() * this.height * 2,
                48, 48
            );
        }
    }

    /// Move / Position Object
    this.move = function() {
        if (this.position.x >= canvasWidth || this.position.x <= 0) {
            this.dir = Math.random() * 10;
            this.position.x = 0 + this.width/2;
            this.position.y = Math.random() * canvasHeight;
            this.speed = 1 + Math.random();
        } else {
            if (this.dir >= 5) {
                this.position.x += this.speed;
            } else {
                this.position.x -= this.speed;
            }
        }
    }
}
