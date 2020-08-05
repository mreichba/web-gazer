function burgerClick() {
  let links = document.getElementById('links');
  if (links.className === 'links') {
    links.className += ' null';
  } else {
    links.className = 'links';
  }

}
webgazer.showPredictionPoints(true);
webgazer.setGazeListener(function (data, elapsedTime) {
  if (data == null) {
    return;
  }
  var xprediction = data.x; //these x coordinates are relative to the viewport
  var yprediction = data.y; //these y coordinates are relative to the viewport
  console.log(elapsedTime); //elapsed time is based on time since begin was called
}).begin();

document.addEventListener('DOMContentLoaded', burgerClick);