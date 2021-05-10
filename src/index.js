

let canvas = document.getElementById("GameScreen");
let ctx = canvas.getContext("2d");
var j = 0;
var k = Math.floor(Math.random() * 400);
var l;
var canvasPos = getPosition(canvas);
var mouseX = 0;
var mouseY = 0;
var missed = 0;

var score = 0;
canvas.style.cursor = "crosshair";

const img = new Image();
img.src = 'img/bird.png';


(function myLoop() {
    setTimeout(function() {
      j = 5 + j ;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (l >= 0.5) {++k} else {--k};
      ctx.drawImage(img, j, k, 75, 75);
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
    })
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

/* || mouseY >= 100 >= k 
mouseX - j >= 0 <= 100){
    ++score}else score == 0;
*/

function update() {
    canvas.addEventListener("mousemove", setMousePosition, false);
    ctx.beginPath();
    ctx.arc(mouseX, mouseY, 30, 0, 2 * Math.PI, true);
    ctx.fillStyle = "rgba(0,0,0, 0.8)";
    
    ctx.fill();
    requestAnimationFrame(update);
    ctx.font = "20px Arial";
    ctx.fillText(`Score: ${score}      Missed: ${missed-score}`,550, 30); 
}

update()
