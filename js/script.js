// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



$("#shoot").click(function(){
  let usercomment= $("#input").val();
$("#userChoice").text(usercomment)
});

$("#shoot").click(function(){
  let usercomment= $("#input").val();
  
  $("#computerChoice").text();
});
function computerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  return ["rock", "paper", "scissors"][randomNumber];
}

function calculateWinner(choice1, choice2) {
  if(choice1=="paper"){
    if (choice2 =="rock"){
      return 1;
    }
  }
  
}