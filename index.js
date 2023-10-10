//Gives random number from 1-6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

//Gives random image from 1-6.png
var randomDiceImage = randomNumber1 + ".png";

//ive random image from source folder
var randomImageSource = "Images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

//Gives random number from 1-6
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

//ive random image from source folder
var randomImageSource2 = "images/" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}

//If player 2 wins
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}

//Booth players draw
else {
  document.querySelector("h1").innerHTML = "Draw!";
}