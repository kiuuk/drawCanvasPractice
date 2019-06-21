const canvasFront = document.getElementById('canvasFront');
const canvasBack = document.getElementById('canvasBack');
const ctxFront = canvasFront.getContext('2d');
const ctxBack = canvasBack.getContext('2d');

const inputName = document.getElementById('inputName');
const inputNumber = document.getElementById('inputNumber');
const displayName = document.getElementById('displayName');
const displayNumber = document.getElementById('displayNumber');
const submitBtn = document.getElementById('submit');

const jerseys = {
  front : 'img/front.png',
  back : 'img/back.png'
};

function drawLogo() {
  let image = new Image();
  image.src = 'img/england-football-seeklogo.com.svg';
  image.onload = function(){
    ctxBack.drawImage(this, 550, 500, 20, 25);
  };
}

function drawBack(backName, backNumber) {
  displayName.textContent = backName;
  displayNumber.textContent = backNumber;
}

submitBtn.addEventListener('click', function(e){
  e.preventDefault();
  let backName = inputName.value;
  let backNumber = inputNumber.value;
  drawBack(backName, backNumber);
  // drawLogo();
})

window.addEventListener('DOMContentLoaded', function(){
  let jerseyView = ['front', 'back'];

  for (let i = 0; i < jerseyView.length; i++) {
    let image = new Image();
    image.src = jerseys[jerseyView[i]];
    image.onload = function() {
      jerseyView[i] === 'front' ? ctxFront.drawImage(this, 0, 0) : ctxBack.drawImage(this, 0, 0);
    }
  }
})