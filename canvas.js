const canvas = document.getElementById('canvas');
const canvasText = document.getElementById('canvasText');
const ctx = canvas.getContext('2d');
const ctxText = canvasText.getContext('2d');

const inputName = document.getElementById('inputName');
const inputNumber = document.getElementById('inputNumber');
const submitBtn = document.getElementById('submit');

function drawLogo() {
  let image = new Image();
  image.src = 'img/england-football-seeklogo.com.svg';
  image.onload = function(){
    ctxText.drawImage(this, 550, 500, 15, 25);
  };
}

function drawTextName(value) {
  ctxText.font = '80px englandRg';
  ctxText.fillStyle = '#dcdada';
  ctxText.strokeStyle = '#C0212A';
  ctxText.lineWidth = 1;
  ctxText.textAlign = 'center';
  ctxText.fillText(value, 480, 250);
  ctxText.strokeText(value, 480, 250);
}

function drawTextNumber(value){
  ctxText.font = '280px englandRg';
  ctxText.fillStyle = '#dcdada';
  ctxText.strokeStyle = '#C0212A';
  ctxText.lineWidth = 1;
  ctxText.textAlign = 'center';
  ctxText.fillText(value, 480, 490);
  ctxText.strokeText(value, 480, 490);
}

submitBtn.addEventListener('click', function(e){
  e.preventDefault();
  let displayName = inputName.value;
  let displayNumber = inputNumber.value;
  canvasText.style.letterSpacing = '-5px';
  ctxText.clearRect(0, 0, 1024, 1024);  
  drawTextName(displayName);
  drawTextNumber(displayNumber);
  drawLogo();
})

window.addEventListener('DOMContentLoaded', function(){
  let image = new Image();
  image.src = 'img/back.png';
  image.onload = function(){
    canvas.width = this.naturalWidth;
    canvas.height = this.naturalHeight;
    ctx.drawImage(this, 0, 0);
  };
})