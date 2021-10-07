var count = 0;
var body = document.querySelector('#rprbody');
body.onclick = function() { count++; }

setTimeout(loop, 500);

function command(x) {
  var sound = new Audio("https://github.com/n-ce/RandomPiano/blob/main/Chords/" + Math.trunc(Math.random() * 88) + ".mp3?raw=true");
  if (count % 2 == 1) {
    body.style.backgroundImage = "url(https://raw.githubusercontent.com/n-ce/RandomPiano/main/Pause.webp)";
    body.style.backgroundColor = "#059C6A77";
    sound.play();
    document.querySelector("#rprback").addEventListener('click', function(){count++})

  }
  else {
    body.style.backgroundImage = "url(https://raw.githubusercontent.com/n-ce/RandomPiano/main/Play.webp)";
    body.style.backgroundColor = "#00D08C77";
    sound.pause();
  }
  setTimeout(x, Math.trunc(Math.random() * 3000));
}

function loop() { command(loop2); }

function loop2() { command(loop); }
