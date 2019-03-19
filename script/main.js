function getRandomVerse(list) {
  var randomNumber = Math.floor( Math.random() * list.length );
  return list[randomNumber];
}

function print(message) {
  var outputDiv = document.getElementById('verse-container');
  outputDiv.innerHTML = message;
}

function renderVerse() {
  var randomVerse = getRandomVerse(verses);
  var message = "<h2>" + randomVerse.verse + "</h2>";
  message += "<p>" + randomVerse.text + "</p>";
  print(message);
}

renderVerse();
const myButton = document.getElementById('verse-button');
myButton.addEventListener('click', renderVerse);
