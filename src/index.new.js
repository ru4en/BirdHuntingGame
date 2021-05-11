
let canvas = document.getElementById("GameScreen");
let ctx = canvas.getContext("2d");
var j = 8000;
var k = Math.floor(Math.random() * 400);
var l = Math.random();
var m = Math.random();
var canvasPos = getPosition(canvas);
var mouseX = 0;
var mouseY = 0;
var missed = 0;

var score = 0;
canvas.style.cursor = "crosshair";

const bird = new Image();
bird.src = 'img/bird.png';

const bird2 = new Image();
bird2.src = 'img/bird2.png';


(function main() {
    setTimeout(function() {
      j = 7 + j;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (l >= 0.5) {ctx.drawImage(bird, j, k, 75, 75);} else {ctx.drawImage(bird, ++j, --k, 75, 75);};
      if (m <= 0.5) {ctx.drawImage(bird2, j, k, 75, 75);} else bird2, j, k, 75, 75);};
      main();
      if (j >= 800) {
        ++missed;
        j = 0; 
            k = Math.floor(Math.random() * 400);
            l = Math.random();
            m = Math.random();
            canvas.onclick = function(){if (mouseX - j <= 70 && mouseX - j >= -70 && mouseY - k <= 70 && mouseY - k >= -70){
              ++score;j = 800;}};
              
        };
    }, 10)
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
    ctx.arc(mouseX, mouseY, 20, 0, 2 * Math.PI, true);
    ctx.fillStyle = "rgba(0,0,0, 0.8)";
    
    ctx.fill();
    requestAnimationFrame(update);
    ctx.font = "20px Arial";
    ctx.fillText(`Score: ${score}      Missed: ${missed-score}`,550, 30); 
}

update()