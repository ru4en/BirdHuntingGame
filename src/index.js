
let canvas = document.getElementById("GameScreen");
let ctx = canvas.getContext("2d");
var j = 800;
var k = Math.floor(Math.random() * 400);
var l;
var level = 1;
var speed = 15;
var canvasPos = getPosition(canvas);
var mouseX = 0;
var mouseY = 0;
var missed = -1;

var score = 0;
canvas.style.cursor = "crosshair";

const bird = new Image();
bird.src = 'img/bird.png';

const gameOver = new Image();
gameOver.src = 'img/bird.png';


(function myLoop() {
    setTimeout(function() {
      j = j + 10;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (l >= 0.5) {++k} else {--k};
      ctx.drawImage(bird, j, k, 75, 75);
      if (missed - score < 2 && score == 10){++level; score = 0; missed = 0; speed+2;};
    if (missed - score >= 3){document.getElementById("GameScreen").style.backgroundImage = "url('img/gameOver.png')";update();return};
      myLoop();
      if (j >= 800) {
        ++missed;
        j = -90; 
            k = Math.floor(Math.random() * 400);
            l = Math.random();
            console.log(l);
            canvas.onclick = function(){if (mouseX - j <= 70 && mouseX - j >= -70 && mouseY - k <= 70 && mouseY - k >= -70){
              ++score;j = 800;}};
        };
    }, speed)
})();    

 
function getPosition(el) {
    var xPosition = 0;
    var yPosition = 0;
   
    while (el) {
      xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
      yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
      el = el.offsetParent;
    }
    return {
      x: xPosition,
      y: yPosition
    };
  }   

function setMousePosition(e) {
  mouseX = e.clientX - canvasPos.x;
  mouseY = e.clientY - canvasPos.y;
}


function update() {
    canvas.addEventListener("mousemove", setMousePosition, false);
    ctx.beginPath();
    ctx.arc(mouseX, mouseY, 30, 0, 2 * Math.PI, true);
    ctx.fillStyle = "rgba(0,0,0, 0.8)";
    ctx.fill();
    requestAnimationFrame(update);
    ctx.font = "20px Arial";
    ctx.fillText(`Score: ${score}      Missed: ${missed-score}      Level: ${level}`,450, 30); 
}

update()
