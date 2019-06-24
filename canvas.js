const canvasFront = document.getElementById('canvasFront');
const canvasBack = document.getElementById('canvasBack');
const canvasPatch = document.getElementById('canvasPatch');
const ctxFront = canvasFront.getContext('2d');
const ctxBack = canvasBack.getContext('2d');
const ctxPatch = canvasPatch.getContext('2d');

const inputName = document.getElementById('inputName');
const inputNumber = document.getElementById('inputNumber');
const displayName = document.getElementById('displayName');
const displayNumber = document.getElementById('displayNumber');
const submitBtn = document.getElementById('submit');

const jerseys = {
  front : 'img/front.png',
  back : 'img/back.png'
};

const patches = {
  AirMax1 : 'https://stg-cf-nike.brzc.kr/kr/ko_kr/cmsstatic/AirMax1.png',
  AirMax95 : 'https://stg-cf-nike.brzc.kr/kr/ko_kr/cmsstatic/AirMax95.png',
  AirMax90 : 'https://stg-cf-nike.brzc.kr/kr/ko_kr/cmsstatic/AirMax90.png',
  AirMax97 : 'https://stg-cf-nike.brzc.kr/kr/ko_kr/cmsstatic/AirMax97.png',
  AirMax270 : 'https://stg-cf-nike.brzc.kr/kr/ko_kr/cmsstatic/AirMax270.png',
  AirMax180 : 'https://stg-cf-nike.brzc.kr/kr/ko_kr/cmsstatic/AirMax180.png',
  AirMaxVaporMax : 'https://stg-cf-nike.brzc.kr/kr/ko_kr/cmsstatic/AirMaxVaporMax.png',
  TWFrank : 'https://stg-cf-nike.brzc.kr/kr/ko_kr/cmsstatic/TWFrank.png',
  PrayingHands : 'https://stg-cf-nike.brzc.kr/kr/ko_kr/cmsstatic/PrayingHands.png',
  CrossClubs : 'https://stg-cf-nike.brzc.kr/kr/ko_kr/cmsstatic/CrossClubs.png',
  GolfFutura : 'https://stg-cf-nike.brzc.kr/kr/ko_kr/cmsstatic/GolfFutura.png',
  NikeShoeBox : 'https://stg-cf-nike.brzc.kr/kr/ko_kr/cmsstatic/NikeShoeBox.png',
  JustDoIt : 'https://stg-cf-nike.brzc.kr/kr/ko_kr/cmsstatic/JustDoIt.png',
  NikeAir : 'https://stg-cf-nike.brzc.kr/kr/ko_kr/cmsstatic/NikeAir.png',
  NOPATCH : 'https://stg-cf-nike.brzc.kr/kr/ko_kr/cmsstatic/NOPATCH.png'
}

function drawPatch() {
  let patch = new Image();
  patch.src = patches.AirMaxVaporMax;
  patch.onload = function(){
    ctxPatch.drawImage(this, 430, 500, 200, 200);
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
  // drawPatch();
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
  drawPatch();
})