function burgerClick() {
  let links = document.getElementById('links');
  if (links.className === 'links') {
    links.className += ' null';
  } else {
    links.className = 'links';
  }
}

let pageY = 0;
let elapsedTimeCounter = 0;
function gazerStopClick() {

  location.reload(true);

}
function gazerClick() {
  alert('When activating Web-Gazer please allow a few seconds for it to start. Once it begins, please callibrate by looking at the top of the page and clicking 5 times in the same spot then do the same for the bottom of the page');
  webgazer.showPredictionPoints(true);
  webgazer.setGazeListener(function (data, elapsedTime) {
    if (data == null) {
      return;
    }
    var xprediction = data.x; //these x coordinates are relative to the viewport
    var yprediction = data.y; //these y coordinates are relative to the viewport
    let windowH = window.innerHeight;
    console.log(windowH);
    elapsedTimeCounter += 1;
    if (elapsedTimeCounter % 15 === 0 && yprediction > windowH * .85) {
      window.scrollTo(0, pageY);
      pageY += 250;
    } else if (elapsedTimeCounter % 15 === 0 && yprediction < windowH * .15) {
      window.scrollTo(0, pageY);
      pageY -= 250;
    }

  }).begin();

}

document.addEventListener('DOMContentLoaded', burgerClick);