'use strict';


var randomNumber3 = Math.floor(Math.random() * 6 );

var start = document.getElementById( "start" ) ;
var reset = document.getElementById( "reset" ) ;

var diceImages = [
  "images/1.png",
  "images/2.png",
  "images/3.png",
  "images/4.png",
  "images/5.png",
  "images/6.png",
];





start.addEventListener('click', () => {


  var randomNumber1 = Math.floor(Math.random() * 6 );
  var randomNumber2 = Math.floor(Math.random() * 6 );


  var diceImg1 = document.getElementById("img1");
  diceImg1.setAttribute("src", diceImages[randomNumber1]);

  var diceImg2 = document.getElementById("img2");
  diceImg2.setAttribute("src", diceImages[randomNumber2]);

  

  if(randomNumber1 > randomNumber2){
    var result = document.getElementById("result");
    result.innerText = "Player1 Win!";
  }else if(randomNumber1 === randomNumber2){
    var result = document.getElementById("result");
    result.innerText = "Draw!";
  }else{
    var result = document.getElementById("result");
    result.innerText = "Player2 Win!";
  }

  var reStart = document.getElementById("start");
  reStart.innerText = "ReStart";

});





