//generate a random number
function randomNumber() {
  let randomNum = Math.floor( Math.random() * verses.length );
  return randomNum;
}

//generate a random verse that is different from the previous verse
function getRandomVerse() {
  let randomNum = randomNumber();
  while (previousRandomNumber === randomNum) {
    randomNum = randomNumber();
  }
  previousRandomNumber = randomNum;
  return verses[randomNum];
}

//print message to the div with the class verse-container
function print(message) {
  var outputDiv = document.getElementById('verse-container');
  outputDiv.innerHTML = message;
}

//process the random verse, create a message and print it to the div
function renderVerse() {
  var randomVerse = getRandomVerse();
  var message = "<h2>" + randomVerse.verse + "</h2>";
  message += "<p>" + randomVerse.text + "</p>";
  print(message);
}

var previousRandomNumber;
renderVerse();
const myButton = document.getElementById('verse-button');
myButton.addEventListener('click', renderVerse);
