$(document).ready(function() {

// Variables
    var randomNumber;
    var redVal;
    var blueVal;
    var greenVal;
    var yellowVal;
    var totalScore;
    var wins = 0;
    var losses = 0;

// Prepare game for play
function prepare () {
    randomNumber = Math.floor(Math.random()*120+19);
    redVal = Math.floor(Math.random()*12+1);
    blueVal = Math.floor(Math.random()*12+1);
    greenVal = Math.floor(Math.random()*12+1);
    yellowVal = Math.floor(Math.random()*12+1);
    totalScore = 0;
    $("#randomNumber").html(randomNumber); // Places the random number in HTML to start game.

   // Internal Testing of initial values
   console.log("The game will start with the random number of " + randomNumber);
   console.log("The game will start with the Red Crystal value of " + redVal);
   console.log("The game will start with the Blue Crystal value of " + blueVal);
   console.log("The game will start with the Green Crystal value of " + greenVal);
   console.log("The game will start with the Yellow Crystal value of " + yellowVal);
};

// Tallies Wins and losses for the game 
function outcome () {
    if (totalScore === randomNumber ) {
        alert("You Win !");
        wins++;
        $("#totalScore").html(0); // Clears the total score  in HTML to start the next game.
        console.log(wins); // Internal Test
        prepare();
    }

    if (totalScore> randomNumber ) {
        alert("You Lose !");
        losses++;
        $("#totalScore").html(0);
        console.log(wins); // Internal Test
        prepare();
    }

    $("#numberWins").html(wins);
    $("#numberLosses").html(losses);


}
function main (){
    $("#redCrystal").on("click", function(){
            totalScore+=redVal;
            $("#totalScore").html(totalScore);
            console.log(totalScore);
            outcome();
        });

    $("#blueCrystal").on("click", function(){
            totalScore+=blueVal;
            $("#totalScore").html(totalScore);
            console.log(totalScore);
            outcome();
        });

    $("#greenCrystal").on("click", function(){
            totalScore+=greenVal;
            $("#totalScore").html(totalScore);
            console.log(totalScore);
            outcome();
        });

    $("#yellowCrystal").on("click", function(){
            totalScore+=yellowVal;
            $("#totalScore").html(totalScore);
            console.log(totalScore);
            outcome();
        });








}



// Main Game Functions
prepare();
outcome();
main();

});

            
        