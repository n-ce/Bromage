// displays newer content without opening new pages

var nav = document.getElementsByTagName('h4');

function fetchHtml(a,b) {
  fetch("https://raw.githubusercontent.com/n-ce/SPACE-Modules/main/"+a+".html")
    .then((response) => {
      return response.text();
    })
    .then((html) => {
      document.getElementById('root').innerHTML = html;
      document.querySelector('header').innerText = a;
      for ( i = 0; i < 3; i++){
        nav[i].style.color="#fff7";
        nav[i].style.animationName=undefined;
      }
      nav[b].style.color="#fff";
      nav[b].style.animationName="bubble";
    });
}
