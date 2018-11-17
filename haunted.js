const READLINE = require("readline-sync");

let player = {
  name: undefined,
  courage: 0,
  intellect: 0,
  strength: 0,
  charm: 0,
  weapon: "power cube",
  item: "torch",
};

console.log();
console.log("*** WELCOME TO THE HAUNTED HOUSE ***");
player.name = READLINE.question("What is your name?: ");
console.log(`${player.name} stands in front of a spooky haunted house.`);
console.log(`${player.name} hears what sounds like screaming coming from inside the house.`);
let enterHouse = READLINE.question("Will you enter the house? (yes or no) ");
if(enterHouse == "y" || enterHouse == "yes") {
  player.courage++;
  console.log(`${player.name} prepares their ${player.weapon} and opens the door...`);
  // continue the story
let way = READLINE.question("which way will you go? (left, right, or straight?)");
if(way == "right") {
	console.log("You begin to hear noises, very strange noises.");
}	
if(way == "left") {
	console.log("You begin to hear talking, very loud talking.");
}
if(way == "straight") {
	console.log("You hear crying, very loud crying.");
}

let would = READLINE.question("Do you wish to continue? You could be breakfast (yes or no)" );
if (would == "no"){
  console.log("Goodbye");
  process.exit();
}if(would == "yes" && way == "right"){
	console.log("All of a sudden, the steps are tumbling. The noise gets louder.");
} else if (would == "yes" && way == "left"){
	console.log("What happening?!?!?!? The floor is shaking!!");
} else if (would == "yes" && way == "straight"){
	console.log("Whoa!!! The wall is decomposing!!")
}

let what = READLINE.question("Do you what to keep going? It could be your last move(yes or no)");
if(what == "no"){
  console.log("Alright leave");
  process.exit();
  if (what == "yes" && way == "straight") {
    let Y = READLINE.question("There is something on the steps. Do you want to see what's inside(yes or no)");
    if(Y == "yes"){
      let A = READLINE.question("BOO!!!!! The ghosts from Super Mario came into action!!!!!");
      if( A == "yes"){
        console.log("you have to guess the right number in order to activate the power cube");
      }
    }
  }
}
if(what == "yes" && way == "right") {
	let X = READLINE.question("There is an X on the floor. Do you want to see what's inside or leave like a pussy?(yes or no)" );
  if(X == "yes"){
    let B = READLINE.question("BOO!!!!! The ghosts from Super Mario came into action!!!!! Will you take them out or run like a wuss?? (yes or no)"); 
    if(B == "yes"){
      console.log("you have to guess the right number in order to activate the power cube");
    }
  } else{
    console.log("You're dumb. Goodbye!")
    process.exit();
  }
}

if(what == "yes" && way == "left") {
  let Z = READLINE.question("I see something on the wall. Do you want to see what's inside or wander off?(yes or no)");
  if( Z == "yes"){
    let C = READLINE.question("BOO!!!!! The ghosts from Super Mario came into action!!!!! Will you take them out?? (yes or no)");
    if(C == "yes"){
      let O = READLINE.question("you have to solve a riddle in order to activate the power cube");
      if(O == "ok"){
        let E = READLINE.question("You can carry it everywhere you go, and it does not get heavy. What is it?");
        if(E == "your name"){
          console.log("You did it!! Now that the cube is activated, you can stop the ghosts");
        }else{
          console.log("No!!! Now you have unleashed the ghosts onto to the world and lost the game!!");
          process.exit();
        }
      }
    }
  }
}

if (what == "no") {
  console.log("Alright Goodbye!!!");
  process.exit();
}


let treasure = READLINE.question("Look at that!! There's treasure! Do you wish to take it? It could be a trap (yes or no)");
if(treasure == "yes" && way == "right" || way == "left" || way == "straight" ){
  console.log("Holy crap!! Godzilla has appeared and ate you for breakfast,lunch and dinner!!!");
}

else{
  console.log("Congrats!! You just earned a porsche!");
}

} else {
  player.intellect++;
  console.log(`${player.name} decides not to open the door. However...`);
  // continue the story
  let ok;
  let number = 890;
  let we = READLINE.question("Hello! This is Houndini the Great! Would you like to play a game?(yes or no)");
  if(we == "yes"){
    ok = READLINE.question("Okay let's begin. Guess my number.");
    if(ok == number){
      let E = READLINE.question("Congrats! You know have tickets to see your favorite artist!");
      if(E == "what?"){
        let Q = READLINE.question("What do you mean by artist?")
        if(Q == "Boi"){
          let D = READLINE.question("I mean by any musical artist, stupid!!");
          if(D == "ok"){
            let D = READLINE.question("Ok now I see. Now Imma see Drake at his concert! Thank you!!!");
            if(D == "bruh"){
              console.log("Alright bye. Jeez!!");
            }
          }
        }
      }
    }else {
    console.log("You guessed wrong. Get out of my face!");
    } 
  }
}



console.log("Thanks for playing!");