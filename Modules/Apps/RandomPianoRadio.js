var count = 0;
var body = document.querySelector('#rprbody');

body.onclick = function() { count++; }

setTimeout(loop, 500);

function command(x) {
  var sound = new Audio("https://github.com/n-ce/RandomPiano/blob/main/Chords/" + Math.trunc(Math.random() * 88) + ".mp3?raw=true");
  if (count % 2 == 1) {
    body.style.backgroundImage = "url(https://img-premium.flaticon.com/png/512/3172/premium/3172676.png?token=exp=1633084902~hmac=f38cedea42262add0ad088723bd5d1be)";
    body.style.backgroundColor = "#059C6A77";
    sound.play();
  }
  else {
    body.style.backgroundImage = "url(https://img-premium.flaticon.com/png/512/3172/premium/3172674.png?token=exp=1633084876~hmac=1177e30a610b42e109bfcb2608ca08d4)";
    body.style.backgroundColor = "#00D08C77";
    sound.pause();
  }
  setTimeout(x, Math.trunc(Math.random() * 3000));
}

function loop() { command(loop2); }

function loop2() { command(loop); }
