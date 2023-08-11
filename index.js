var random1 = Math.floor(Math.random() * 6) + 1;
var randomDice = "dice" + random1 + ".png";



var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDice);

var random2 = Math.floor(Math.random() * 6) + 1;
var randomDice2 = "dice" + random2 + ".png";


var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDice2);



if(random1> random2){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if(random1< random2){
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}
else {
    document.querySelector("h1").innerHTML = "Draw!"
}
