// displays newer content without opening new pages


function fetchHtml(a) {
  fetch("https://raw.githubusercontent.com/n-ce/SPACE-Modules/main/" + a + ".html")
    .then(response => response.text())
    .then(html => {
      document.getElementById('root').innerHTML = html;
    });
  if (a != "Home" && a != "Apps" && a != "About") {
    console.log(a);
    fetch("https://raw.githubusercontent.com/n-ce/SPACE-Modules/main/" + a + ".js")
      .then(response => response.text())
      .then(txt => {
        var script = document.createElement("script");
        script.innerHTML = txt;
        document.body.appendChild(script);
      })
  }
}

//drawer

var nav = document.getElementsByTagName('h4');

function drawer() {
  document.querySelectorAll('.nav')[1].classList.toggle("drawer");
}

//DarkMode 

if (localStorage.getItem('theme')) {
  dark();
}

function dark() {
  document.body.classList.toggle("bodyDark");
  for (var i = 0; i < 7; i++) {
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
function fullscreen() {
  document.documentElement.requestFullscreen();
}

function exitfs() {
  document.exitFullscreen();
}
