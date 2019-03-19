function getRandomVerse(list) {
  var randomNumber = Math.floor( Math.random() * list.length );
  return list[randomNumber];
}

var randomVerse = getRandomVerse(verses);
var message = "<h2>" + randomVerse.verse + "</h2>";
message += "<p>" + randomVerse.text + "</p>";
document.write(message);
