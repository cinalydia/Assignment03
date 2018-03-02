/*eslint-env browser*/

//RPS
var userChoice = window.prompt("Rock, Paper, or Scissors?");
var compChoice = Math.floor(Math.random() * 3);


if (compChoice === 0) {
    window.document.write("Rock");
} else if (compChoice === 1) {
    window.document.write("Paper");
} else if (compChoice === 2) {
    window.document.write("Scissors");
}


switch (compChoice) {
case 0:
    if (userChoice === "Rock") {
        window.alert("It's a tie!");
    } else if (userChoice === "Scissors") {
        window.alert("Computer wins!");
    } else if (userChoice === "Paper") {
        window.alert("You are the winner!");
    }
    break;
case 1:
    if (userChoice === "Paper") {
        window.alert("It's a tie!");
    } else if (userChoice === "Rock") {
        window.alert("Computer wins!");
    } else if (userChoice === "Scissors") {
        window.alert("You are the winner!");
    }
    break;
case 2:
    if (userChoice === "Scissors") {
        window.alert("It's a tie!");
    } else if (userChoice === "Paper") {
        window.alert("Computer wins!");
    } else if (userChoice === "Rock") {
        window.alert("You are the winner!");
    }
    break;
}
if (isNaN(userChoice) || userChoice === null) {
    window.alert("Please pick either Rock, Paper, or Scissors.");
}