
/// Get Canvas & Context
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

/// Global variables
var canvasWidth = 400, canvasHeight = 400;

/// Initiallize objects (in global scope)
var penguin;
var alteredSpeed = 0; // used in conjuction with eel's shock
var squid = [];
var eel = [];
var collectable = [];
var giant;

var timer = 0;
function spawnFood() {
    if (timer < 300) {
        timer++;
    } else {
        timer = 0;
        collectable.push(new Collectable());
    }
}
function gameOver() {
    penguin.position.x = startX;
    penguin.position.y = startY;
    giant.position.x = 0;
    penguin.score = 0;
    alert("Game over!");
}

/// Unsure what this does
if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = (function() {
        return window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(/* function frameRequestCallback */ callback, /*DOMElement Element */  element) {
            window.setTimeout(callback, 1000 / 60);
        }
    })();
}

function init() {
    /// Check the device's orientation is accessible
    if (window.DeviceOrientationEvent) {
        window.addEventListener("deviceorientation", function(event)
        {
            /// Get Device Orientation (for Fish)
            penguin.getDeviceOrientation();
        })
    };

    /// Create Object Instances (unsure if this should be here or in "update")
    penguin = new Penguin();
    giant = new Giant();
    for (var s = 0; s < 3; s++) {
        //squid = new Squid();
        // squid[s] = new Squid();
        squid.push(new Squid());
        // console.log("Spawn squid");
    }
    for (var e = 0; e < 3; e++) {
        eel.push(new Eel());
    }
    for (var i = 0; i < 3; i++) {
        collectable.push(new Collectable());
        //collectable[i] = new Collectable();
        // collectable.push(new Bubble());
        // console.log(collectable.length);
    }

    /// Begin Game
    update();
}

function update() {

    /// Move / Update / Trigger Behavior for Object/s
    penguin.move();
    giant.move();
    for (var i = 0; i < collectable.length; i++) {
        collectable[i].move();
    }
    for (var s = 0; s < squid.length; s++) {
        squid[s].move();
    }
    for (var e = 0; e < eel.length; e++) {
        eel[e].move();
    }

    /// Clear canvas + draw (to an empty canvas)
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    penguin.draw();
    penguin.drawScore();
    ctx.font="50px Arial";
    ctx.fillText("X Y: " + penguin.velocity.x + " " + penguin.velocity.y, 32, 300);
    ctx.fillText("ASpeed: " + alteredSpeed, 32, 362); // for testing
    giant.draw();
    for (var i = 0; i < collectable.length; i++) {
        collectable[i].draw();
    }
    for (var s = 0; s < squid.length; s++) {
        squid[s].draw();
        // console.log("Draw squid")
    }
    for (var e = 0; e < eel.length; e++) {
        eel[e].draw();
    }

    /// Colision/s
    if (giant.intersects(penguin)) {
        gameOver();
    }
    for (var s = 0; s < squid.length; s++) {
        if (penguin.intersects(squid[s])) {
            squid[s].ink();
            //console.log("Squid coll");
        }
    }
    for (var e = 0; e < eel.length; e++) {
        if (eel[e].intersects(penguin)) {
            eel[e].shock();
            alteredSpeed = 14; // [just] have to find out what this should equal to
            //console.log("Shocked");
        } else {
            alteredSpeed = 0;
        }
    }
    //ctx.fillText("AlteredSpeed: " + alteredSpeed, 32, 32); // for testing
    for (var i = 0; i < collectable.length; i++) { // between Penguin & Collectable objects
        penguin.intersects(collectable[i]);
        if (penguin.intersects(collectable[i]) && collectable.length >= 0) {
            console.log("Food coll");
            penguin.score += 1;
            // collectable.splice(collectable[i-1], 1);
            collectable.splice(0, 1);
            //collectable[i].position.x = canvasWidth;
        }
    }

    spawnFood();
    requestAnimationFrame(update); // Keep animating
}

/// Run Initiallization function which will begin the game
init();
