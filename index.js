var randomNumber1 = Math.round(Math.random()*5)+1; //to get number between 1 to 6
var randomDice = "dice"+randomNumber1+".png";  //set random dice img 
var imgSource = "images/"+randomDice;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",imgSource);


var randomNumber2 = Math.round(Math.random()*5+1);
var randomDice2 = "dice"+randomNumber2+".png";
var imgSource2 = "images/"+randomDice2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",imgSource2);


if(randomNumber1 > randomNumber2){
               document.querySelector("h1").innerHTML = "🚩 Player1 won!";
              
}
else if(randomNumber1 < randomNumber2){
              document.querySelector("h1").innerHTML = "Player2 won! 🚩";
}
else{
              
              document.querySelector("h1").innerHTML = "Game Draw!";
}

