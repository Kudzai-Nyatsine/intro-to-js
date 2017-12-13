function askUser(){
	var userChoice = prompt("Do you want to play rock,scissors or paper");
	return userChoice;
}

var counter = 0;

var scoreCard = {
	computer: 0,
	human: 0,
	draw: 0
}



function RockPaperScissor (settings) {


	this.userChoice = settings.userChoice;
	this.chooses = ['rock', 'paper', 'scissors'];

	// check if user enters rock , paper or scissors 
	if(this.chooses.indexOf(this.userChoice) === - 1) {
		alert('Please enter rock ,papers or scissors');
		return;
	}
	//computer gets a random number between 0 and 2
	this.random = Math.round(Math.random() * 2);
	this.computerChoice = this.chooses[this.random];

	counter++;

	while(counter > 5) {

		// you have played more that five times
		alert('You have played more than five times. Please check your scorecard or refresh the browser too play again');
		return;

	}

	if(this.userChoice === this.computerChoice) {
		scoreCard.draw = scoreCard.draw + 1;
		alert("Draw");
	} else if(this.userChoice === 'rock' && this.computerChoice === 'paper') {
		alert("user wins");
		scoreCard.computer = scoreCard.computer + 1;
	} else if(this.userChoice === 'rock' && this.computerChoice === 'scissors') {
		 scoreCard.human = scoreCard.human + 1;
		alert("user wins");
	} else if(this.userChoice === 'paper' && this.computerChoice === 'rock') { 
		scoreCard.human = scoreCard.human + 1;
		alert("user wins");
	} else if(this.userChoice === 'paper' && this.computerChoice === 'scissors') { 
		 scoreCard.computer = scoreCard.computer + 1;
		alert("computer wins");
	} else if(this.userChoice === 'scissors' && this.computerChoice === 'paper') { 
		scoreCard.human = scoreCard.human + 1;
		alert("user wins");
	} else if(this.userChoice === 'scissors' && this.computerChoice === 'rock') { 
		alert("computer wins");
		scoreCard.computer = scoreCard.computer + 1;
	}

	human.innerHTML = scoreCard.human;
	computer.innerHTML = scoreCard.computer;
	draw.innerHTML = scoreCard.draw;

}

var button = document.querySelector('.button');
var human = document.querySelector('.scorecard .human span');
var computer = document.querySelector('.scorecard .computer span');
var draw = document.querySelector('.scorecard .draw span');
button.addEventListener('click', function () {

	var rockPaperScissor = new RockPaperScissor({
		userChoice: askUser()
	});
})










































































// var userChoice = prompt("do you choose rock, paper or scissors");

// alert(userChoice);

// function getRandom(){

// var value = Math.floor(Math.random() * 3);

// 	alert(value);
// 	return value;

// }

// getRandom();

// function computerChoice(){
// 	if(getRandom == 0) {
// 		return("Rock");
// 	}

// 	else if(getRandom == 1) {
// 		return("Paper");
// 	}

// 	else if(getRandom == 2){
// 		return("scissors");
// 	}

// 	else {
// 		return ("tie");
// 	}

// }

//  computerChoice();



// function userChoice(){
// 	if(player == "rock") {
// 		console.log("tie")
// 	}
// }



