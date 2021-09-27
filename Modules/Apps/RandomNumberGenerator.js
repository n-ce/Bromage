function handleMotionEvent(event) {

  if (event.accelerationIncludingGravity.x < -10) {
    document.querySelector('#rngbody').innerText = Math.trunc(Math.random() * Math.pow(10, 1 / Math.random()));
  }
  document.querySelector('#rnghtml').onclick = function() {
    document.querySelector('#rngbody').innerText = Math.trunc(Math.random() * Math.pow(10, 1 / Math.random()));
  }
}

window.addEventListener("devicemotion", handleMotionEvent, true);