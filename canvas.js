const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const inputName = document.getElementById('inputName');
const inputNumber = document.getElementById('inputNumber');
const displayName = document.getElementById('displayName');
const displayNumber = document.getElementById('displayNumber');
const submitBtn = document.getElementById('submit');

function drawLogo() {
  let image = new Image();
  image.src = 'img/england-football-seeklogo.com.svg';
  image.onload = function(){
    ctx.drawImage(this, 550, 500, 20, 25);
  };
}

submitBtn.addEventListener('click', function(e){
  e.preventDefault();
  let displayName = inputName.value;
  let displayNumber = inputNumber.value;
  // drawTextNumber(displayNumber);
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