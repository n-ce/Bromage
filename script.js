// displays newer content without opening new pages

var nav = document.getElementsByTagName('h4');

function fetchHtml(a, b) {
  fetch("https://raw.githubusercontent.com/n-ce/SPACE-Modules/main/" + a + ".html")
    .then((response) => {
      return response.text();
    })
    .then((html) => {
      document.getElementById('root').innerHTML = html;
      document.querySelector('header').innerText = a;
    });
}

//drawer
function drawer(){
  document.querySelectorAll('.nav')[1].classList.toggle("drawer");
}

//DarkMode 

if (localStorage.getItem('theme')) {
  dark();
}

function dark() {
  document.body.classList.toggle("bodyDark");
  for (var i = 0; i < 4; i++) {
    document.querySelectorAll('.button')[i].classList.toggle("buttonDark");
  }
  if (document.body.classList.contains("bodyDark")) {
    localStorage.setItem('theme', "dark");
  }
  else {
    localStorage.setItem('theme', "");
  }
}

//fullscreen
function fullscreen(){
document.documentElement.requestFullscreen();
}
function exitfs(){
  document.exitFullscreen();
}