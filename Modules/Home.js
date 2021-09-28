fetch('https://api.quotable.io/random')
  .then(response => response.json())
  .then(data => {
    document.getElementById('quotes').innerText="\""+data.content+"\"\n\n"+data.author;
  })
fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(data => {
     document.getElementById('dogs').src = "\""+data.message+"\"";
  })
