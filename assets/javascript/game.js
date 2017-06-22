var targetNumber = [19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,
                   	41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,
                    63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,
                    85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,
                                 105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120]
var crystalNumber = [1,2,3,4,5,6,7,8,9,10,11,12]
var wins = 0;
var losses = 0;
var counter = 0;
 
var randomTarget = targetNumber[Math.floor(Math.random() * targetNumber.length)];
$("#random-number").text(randomTarget);
 
var randomCrystalRed = crystalNumber[Math.floor(Math.random() * crystalNumber.length)];
var randomCrystalBlue = crystalNumber[Math.floor(Math.random() * crystalNumber.length)];
var randomCrystalYellow = crystalNumber[Math.floor(Math.random() * crystalNumber.length)];
var randomCrystalGreen = crystalNumber[Math.floor(Math.random() * crystalNumber.length)];
 
// Reset functions
var reset = function() {     
    counter = 0;
   $("#total-score").text(counter);

    randomTarget = targetNumber[Math.floor(Math.random() * targetNumber.length)];
    $("#random-number").text(randomTarget);     

    randomCrystalRed = crystalNumber[Math.floor(Math.random() * crystalNumber.length)];
    randomCrystalBlue = crystalNumber[Math.floor(Math.random() * crystalNumber.length)];
    randomCrystalYellow = crystalNumber[Math.floor(Math.random() * crystalNumber.length)];
    randomCrystalGreen = crystalNumber[Math.floor(Math.random() * crystalNumber.length)];
}
 
$("#red").on("click", function() {
    counter += randomCrystalRed;
    $("#number-of-wins").text(wins);
    $("#number-of-losses").text(losses);
    $("#total-score").text(counter);

    if (counter === randomTarget) {
	    wins++;
	    alert("You win!");
	    reset();
	    }

    else if (counter > randomTarget) {                                          
        losses++;                                            
        alert("you lose")
        reset();                                
        }
});
 
$("#blue").on("click", function() {
    counter += randomCrystalBlue;
    $("#number-of-wins").text(wins);
    $("#number-of-losses").text(losses);
    $("#total-score").text(counter);

    if (counter === randomTarget) {
	    wins++;
	    alert("You win!");
	    reset();
	    }

    else if (counter >= randomTarget) {                                        
        losses++;                                            
        alert("you lose")
        reset();                                
        }
});
 
$("#yellow").on("click", function() {
    counter += randomCrystalYellow;
    $("#number-of-wins").text(wins);
    $("#number-of-losses").text(losses);
    $("#total-score").text(counter);

    if (counter === randomTarget) {
	    wins++;
	    alert("You win!");
	    reset();
	    }

    else if (counter >= randomTarget) {                                        
        losses++;                                            
        alert("you lose")
        reset();                                
        }
});
 
$("#green").on("click", function() {
    counter += randomCrystalGreen;
    $("#number-of-wins").text(wins);
    $("#number-of-losses").text(losses);
    $("#total-score").text(counter);

    if (counter === randomTarget) {
	    wins++;
	    alert("You win!");
	    reset();
	    }

    else if (counter >= randomTarget) {                                        
        losses++;                                            
        alert("you lose")
        reset();                                
        }
});

