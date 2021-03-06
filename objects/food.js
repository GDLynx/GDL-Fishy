/// Collectable / Food / Score
function Collectable() {
    this.speed = 1 + Math.random() * 3;
    this.dir = Math.random() * 10;
    this.position = {
        x: canvasWidth,
        y: Math.random() * canvasHeight
    };
    this.width = 30;
    this.height = 30;

    /// Draw Object
    this.draw = function() {
        /*
        ctx.fillStyle = "green";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        ctx.fill();
        */
        var img = new Image();   // Create new img element
            if (this.dir >= 5) {
                img.src = './images/fish.png';
            } else {
                img.src = './images/fish-forward.png'; 
            }
        ctx.drawImage(img, this.position.x, this.position.y, this.width, this.height);
    }

    /// Move / Position Object
    this.move = function() {
        if (this.position.x >= canvasWidth || this.position.x <= 0) {
            this.dir = Math.random() * 10;
            this.position.x = canvasWidth - this.width/2; // 0 + this.width / 2;
            this.position.y = Math.random() * canvasHeight;
            this.speed = 1 + Math.random() * 3;
        } else {
            if (this.dir >= 5) {
                this.position.x -= this.speed;
            } else {
                this.position.x += this.speed;
            }
        }
    }
}
