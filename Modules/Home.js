fetch('https://api.quotable.io/random')
  .then(response => response.json())
  .then(data => {
    document.getElementById('quotes').innerText="\""+data.content+"\"\n\n"+data.author;
  })
