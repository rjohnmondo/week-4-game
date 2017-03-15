//var randomNumber = Math.floor((Math.random()*102) +19);
//console.log(randomNumber);

//function myFunction () {
	//alert("You clicked the Red Crystal");
//}

//$("#randomNumber").html(randomNumber);


$(document).ready (function(){
	// Global Variables

	var randomNumber = Math.floor((Math.random()*102)+19);
	// $("#randomNumber").html(randomNumber);
	var totalScore = 0;
	var numberWins = 0;
	var numberLosses = 0;
	var redScore = 0;
	var greenScore = 0;
	var blueScore = 0;
	var yellowScore = 0;

function restart()	{
	totalScore= 0;
	$("#totalScore").text(0);

	randomNumber =0;
	$("#randomNumber").html(randomNumber);

	redScore=0;
	greenScore =0;
	blueScore=0;
	yellowScore =0;

	main()

}

function score() {
	if(totalScore === numberRandom){
		alert("Winner !");
		numberWins++;
		restart();
	}

	if(totalScore > numberRandom){
		alert("I'm sorry, you lose");
		numberLosses++;
		restart();
	}


}

function main() {


	var randomNumber = Math.floor((Math.random()*102)+19);
	var numberRandom = randomNumber;
	$("#randomNumber").html(numberRandom);
	var redScore = Math.floor((Math.random()*12)+1);
	var greenScore = Math.floor((Math.random()*12)+1);
	var blueScore = Math.floor((Math.random()*12)+1);
	var yellowScore = Math.floor((Math.random()*12)+1);

	$("#numberWins").html(numberWins);
	$("#numberLosses").html(numberLosses);

	console.log(randomNumber);

	
    main()










}

	//function targetNumber() {
	//$("#randomNumber").html(randomNumber);
});

//targetNumber();



//}); // document ready ending tag


// Populates the random number in the HTML at the start of the game
