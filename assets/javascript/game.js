var wins = 0;
var losses = 0;
var counter = 0;

// Selects random number between 19-120 for the target number
var randomTarget = Math.floor(Math.random() * 101 + 19);
$("#random-number").text(randomTarget);

// Selects random nummber between 1-12 for each crystal
var randomCrystalRed = Math.floor(Math.random() * 11 + 1);
var randomCrystalBlue = Math.floor(Math.random() * 11 + 1);
var randomCrystalYellow = Math.floor(Math.random() * 11 + 1);
var randomCrystalGreen = Math.floor(Math.random() * 11 + 1);
$("#total-score").text(counter);

/* Reset functions: 
   Counter is set back to 0,
   Selects random number between 19-120 for the target number,
   Selects random nummber between 1-12 for each crystal, */
var reset = function() {      
 	counter = 0;
 	$("#total-score").text(counter);

	randomTarget = Math.floor(Math.random() * 101 + 19);
	$("#random-number").text(randomTarget);	

	randomCrystalRed = Math.floor(Math.random() * 11 + 1);
	randomCrystalBlue = Math.floor(Math.random() * 11 + 1);
	randomCrystalYellow = Math.floor(Math.random() * 11 + 1);
	randomCrystalGreen = Math.floor(Math.random() * 11 + 1);
}

// Display functions:  Displays the wins, losses, and total score
var display = function() {
	$("#number-of-wins").text(wins); 
	$("#number-of-losses").text(losses); 
	$("#total-score").text(counter);
}

// Condition functions:  
var conditions = function() {
	if (counter === randomTarget) {
		wins++;
		alert("You win!");
		reset();
	}

	else if (counter > randomTarget) {			
		losses++;			
		alert("You lose, Try again!")
		reset();			
	}
}

// Click functions for each crystal
$("#red").on("click", function() {
	counter += randomCrystalRed;
	display();
	conditions();
 });

$("#blue").on("click", function() {
	counter += randomCrystalBlue;
	display();
	conditions();
 });

$("#yellow").on("click", function() {
	counter += randomCrystalYellow;
	display();
	conditions();
 });

$("#green").on("click", function() {
	counter += randomCrystalGreen;
	display();
	conditions();
 });

