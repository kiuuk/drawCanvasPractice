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

let patchSelector = document.querySelectorAll('.swiper-slide');

const jerseys = {
  front : 'img/front.png',
  back : 'img/back.png'
};

const patches = [
  {title : 'AirMax1', url : 'https://stg-cf-nike.brzc.kr/kr/ko_kr/cmsstatic/AirMax1.png'},
  {title : 'AirMax95', url : 'https://stg-cf-nike.brzc.kr/kr/ko_kr/cmsstatic/AirMax95.png'},
  {title : 'AirMax90', url : 'https://stg-cf-nike.brzc.kr/kr/ko_kr/cmsstatic/AirMax90.png'},
  {title : 'AirMax97', url : 'https://stg-cf-nike.brzc.kr/kr/ko_kr/cmsstatic/AirMax97.png'},
  {title : 'AirMax270', url : 'https://stg-cf-nike.brzc.kr/kr/ko_kr/cmsstatic/AirMax270.png'},
  {title : 'AirMax180', url : 'https://stg-cf-nike.brzc.kr/kr/ko_kr/cmsstatic/AirMax180.png'},
  {title : 'AirMaxVaporMax', url : 'https://stg-cf-nike.brzc.kr/kr/ko_kr/cmsstatic/AirMaxVaporMax.png'},
  {title : 'TWFrank', url : 'https://stg-cf-nike.brzc.kr/kr/ko_kr/cmsstatic/TWFrank.png'},
  {title : 'PrayingHands', url : 'https://stg-cf-nike.brzc.kr/kr/ko_kr/cmsstatic/PrayingHands.png'},
  {title : 'CrossClubs', url : 'https://stg-cf-nike.brzc.kr/kr/ko_kr/cmsstatic/CrossClubs.png'},
  {title : 'GolfFutura', url : 'https://stg-cf-nike.brzc.kr/kr/ko_kr/cmsstatic/GolfFutura.png'},
  {title : 'NikeShoeBox', url : 'https://stg-cf-nike.brzc.kr/kr/ko_kr/cmsstatic/NikeShoeBox.png'},
  {title : 'JustDoIt', url : 'https://stg-cf-nike.brzc.kr/kr/ko_kr/cmsstatic/JustDoIt.png'},
  {title : 'NikeAir', url : 'https://stg-cf-nike.brzc.kr/kr/ko_kr/cmsstatic/NikeAir.png'},
  {title : 'NOPATCH', url : 'https://stg-cf-nike.brzc.kr/kr/ko_kr/cmsstatic/NOPATCH.png'}
]

function drawPatch(url) {
  let patch = new Image();
  patch.src = url;
  patch.onload = function(){
    ctxPatch.clearRect(0, 0, 1024, 1024);
    ctxPatch.drawImage(this, 430, 500, 200, 200);
  };
}

function drawBack(backName, backNumber) {
  displayName.textContent = backName;
  displayNumber.textContent = backNumber;
}

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let backName = inputName.value;
  let backNumber = inputNumber.value;
  drawBack(backName, backNumber);
})

patchSelector.forEach(function(patch, index){
  patch.addEventListener('click', () => {
    drawPatch(patches[index].url);
  })
})

window.addEventListener('DOMContentLoaded', () => {
  let jerseyView = ['front', 'back'];

  for (let i = 0; i < jerseyView.length; i++) {
    let image = new Image();
    image.src = jerseys[jerseyView[i]];
    image.onload = function() {
      jerseyView[i] === 'front' ? ctxFront.drawImage(this, 0, 0) : ctxBack.drawImage(this, 0, 0);
    }
  }
})