function getRandomVerse(list) {
  var randomNumber = Math.floor( Math.random() * list.length );
  return list[randomNumber];
}

function print(message) {
  var outputDiv = document.getElementById('verse-container');
  outputDiv.innerHTML = message;
}

var randomVerse = getRandomVerse(verses);
var message = "<h2>" + randomVerse.verse + "</h2>";
message += "<p>" + randomVerse.text + "</p>";
print(message);
