
// I created a variable and store random number 0f 6
let randomNo1 = Math.floor(Math.random() * 6) + 1;
// I created Second variable and store random img 
let randomResource1 = "images/dice" + randomNo1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomResource1);

// I created a variable and store random number 0f 6
let randomNo2 = Math.floor(Math.random() * 6) + 1;
// I created Second variable and store random img 
let randomResource2 = "images/dice" + randomNo2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomResource2);

  // this is used change h1 

if(randomNo1 > randomNo2){
  document.querySelector("h1").innerHTML = "player 1st Winner!";
}
else if(randomNo2 > randomNo1){
  document.querySelector("h1").innerHTML = "player 2nd Winner!";
}  // it is something else 

else{
  document.querySelector("h1").innerHTML = "Match Draw!";
}