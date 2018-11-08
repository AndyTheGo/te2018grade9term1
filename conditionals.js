const READLINE = require("readline-sync");

// **** Problem 1: R-rated ****
// You cannot see an R-rated movie unless you are at least 18, or you are with
// an adult. Write code that prints whether or not someone can see an
// R-rated movie.
console.log("*** Problem 1: R-rated ***");
let age = READLINE.question("Enter your age: ");
let withAdult = READLINE.question("Are you with an adult? (yes or no): ");

if(age >= 18 || withAdult == "yes" ){
	console.log("congratulations!! you may see the movie!");
}
else{
	console.log("Sorry! You cannot see the movie");
}

// **** Problem 2: Umbrella ****
// You should bring an umbrella when you travel, but only if it is raining.
// However, if it is thunderstorming, you should not bring an umbrella since
// that's bad luck. Write code that prints if someone should bring an umbrella
// with them.
console.log("*** Problem 2: Umbrella ***");
let raining = READLINE.question("Is it raining? (yes or no): ");
let thunderstorming = READLINE.question("Is it thunderstorming? (yes or no): ");

if(raining == "yes" && thunderstorming == "no"){ 
	console.log("Grab an umbrella!!");
}

if(raining == "no"){
	console.log("No need for an umbrella!");
		
}

if(thunderstorming == "yes"){
	console.log("Stay safe and DO NOT bring an umbrella!!");
}


// **** Problem 3: Monkey Trouble ****
// There are two monkeys: Bubbles and Spankey. You are in trouble if both of
// them are smiling, or if neither are smiling. Write code that prints if we
// are in trouble.
console.log("*** Problem 3: Monkey Trouble ***");
let bubbles = READLINE.question("Is Bubbles smiling? (yes or no): ");
let spankey = READLINE.question("Is Spankey smiling? (yes or no): ");

if (bubbles == "yes" && spankey == "yes"){
	console.log("We are in trouble!");
}

if (bubbles == "no" && spankey == "no"){
	console.log("We are in trouble!");
}
 if(bubbles == "yes" && spankey == "no" || bubbles == "no" && spankey == "yes"){
 	console.log("Ok good");
 }



// **** Problem 4: First Place ****
// Write code that prints the largest of three scores. If there is a tie for
// first place, simply print one of the tie winners.
console.log("*** Problem 4: First Place ***");
let score1 = READLINE.question("Enter the first score: ");
let score2 = READLINE.question("Enter the second score: ");
let score3 = READLINE.question("Enter the third score: ");

if(score1 >= score2 && score1 >= score3){
	console.log("score1 is the largest");

} else if(score3 > score1 && score3 > score2){
	console.log("score3 is the highest");

} else if(score2 > score1 && score2 > score3){ 
	console.log("score2 is the highest");
	
} else if(score2 == score3){
	console.log("score2 is the highest");
}




// **** Problem 5: Phone Shopping ****
// At a phone store, you can afford various "tiers" of phones based on how
// much money you have.
//    If you have at least $30 you can buy a prepaid phone.
//    If you have at least $100 you can buy a bottom-tier phone.
//    If you have at least $300 you can buy a middle-tier phone.
//    If you have at least $600 you can buy a top-tier phone.
// Write code that prints all the phone tiers someone can buy based on how much
// money they have.
console.log("*** Problem 5: Phone Shopping ***");
let money = READLINE.question("How much money do you have?: ");

if(money < 30){
	console.log("Sorry! You cannot purchase a phone today");
}

if(money >= 30 && money < 100){
	console.log("You can purchase a prepaid phone");
}

if(money >= 100 && money < 300){
	console.log("You can purchase a bottom-tier phone");
}

if(money >= 300 && money < 600){
	console.log("You can purchase a middle-tier phone");
}

if(money >= 600){
	console.log("You can purchase a top-tier phone");
}

// **** Problem 6: Guess My Number ****
// Write code that plays a simple number guessing game with a user. You can
// use any number you like as myNum. If the user guesses the number, print
// a congratulations message. If they guess too low or too high, tell them this.
// If their guess is myNum +/- 3, tell them they are "warm"; otherwise tell
// them they are cold.
console.log("*** Problem 6: Guess My Number ***");
let myNum = 42;
let guess = READLINE.question("I'm thinking of a number. Guess it: ");

if(guess == myNum){
	console.log("congratulations!! You guessed the right number");
}

if(guess > myNum + 3){
	console.log("That number is too high");
}

if(guess < myNum - 3){
	console.log("That number is too low");
}

if(guess == myNum - 3 && myNum + 3){
	console.log("Very warm!! Keep guessing!");
}

