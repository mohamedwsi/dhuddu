/*
// Rock, Paper, Scissors: Refactored with Functions
const initGame = () => {
    const startGame = confirm("Shall we play rock, paper, or scissors?");
    startGame ? playGame() : alert("Ok, maybe next time.");
  };
  
  // Game flow function
  const playGame = () => {
    while (true) {
      let playerChoice = getPlayerChoice();
      playerChoice = formatPlayerChoice(playerChoice);
      if (playerChoice === "") {
        invalidChoice();
        continue;
      }
      if (!playerChoice) {
        decidedNotToPlay();
        break;
      }
      playerChoice = evaluatePlayerChoice(playerChoice);
      if (!playerChoice) {
        invalidChoice();
        continue;
      }
      const computerChoice = getComputerChoice();
      const result = determineWinner(playerChoice, computerChoice);
      displayResult(result);
      if (askToPlayAgain()) {
        continue;
      } else {
        thanksForPlaying();
        break;
      }
    }
  };
  
  const getPlayerChoice = () => {
    return prompt("Please enter rock, paper, or scissors.");
  };
  
  const formatPlayerChoice = (playerChoice) => {
    if (playerChoice || playerChoice === "") {
      return playerChoice.trim().toLowerCase();
    } else {
      return false;
    }
  };
  
  const decidedNotToPlay = () => {
    alert("I guess you changed your mind. Maybe next time.");
  };
  
  const evaluatePlayerChoice = (playerChoice) => {
    if (
      playerChoice === "rock" ||
      playerChoice === "paper" ||
      playerChoice === "scissors"
    ) {
      return playerChoice;
    } else {
      return false;
    }
  };
  
  const invalidChoice = () => {
    alert("You didn't enter rock, paper, or scissors.");
  };
  
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    const rpsArray = ["rock", "paper", "scissors"];
    return rpsArray[randomNumber];
  };
  
  const determineWinner = (player, computer) => {
    const winner =
      player === computer
        ? "Tie game!"
        : player === "rock" && computer === "paper"
        ? `playerOne: ${player}\nComputer: ${computer}\nComputer wins!`
        : player === "paper" && computer === "scissors"
        ? `playerOne: ${player}\nComputer: ${computer}\nComputer wins!`
        : player === "scissors" && computer === "rock"
        ? `playerOne: ${player}\nComputer: ${computer}\nComputer wins!`
        : `playerOne: ${player}\nComputer: ${computer}\nplayerOne wins!`;
  
    return winner;
  };
  
  const displayResult = (result) => {
    alert(result);
  };
  
  const askToPlayAgain = () => {
    return confirm("Play Again?");
  };
  
  const thanksForPlaying = () => {
    alert("Ok, thanks for playing.");
  };
  
  initGame();
  */


  //OBJECTS

  const myObj={name: "asin",content: "act",age: 20,actor:true};
  console.log(myObj);

  const objOne={student:true,
                qualification:"BCA",
                workhours:8,
                leavedays:{monthlyonce:"saturday",
                           normalleave:"sunday"},
                myAr:[true,"BCA",8],
                action: function(){
                  return `Wasim completed ${this.qualification}`;
                }
  };
  console.log(objOne.myAr[2]);
  console.log(objOne.leavedays.monthlyonce);
  console.log(objOne["qualification"]);
  console.log(objOne.action());




  const vehicle={
    doors:4,
    engine: function(){return "vrooom ta ta ta tushhh!"},
    fuel:"petrol"
  };
  console.log(vehicle.engine());

  const bike=Object.create(vehicle);
  bike.doors=2;

  const tesla=Object.create(bike);
  tesla.engine = function(){return "shhhhhh"};
  tesla.fuel = "Electric";
  console.log(tesla.engine());




const movie ={
  actor:"vijay",
  actress:"keerthysuresh",
  director:"nolan",
  producer:"kalanithi"
};
movie.music="sana";
console.log(Object.keys(movie));
console.log(Object.values(movie));

for (let name in movie){
  console.log(`${name},its ${movie[name]}`);
}


//destructure objects
const superheromovie={
  hero:"Ironman",
  dir:"raimi",
  villain:"Thanos",
  fav:"Nick fury"
};

const {hero,dir:spidrmandir,villain,fav}=superheromovie;

function favvillain({villain}){
  return villain;
}
console.log(favvillain(superheromovie));

//CLASSES

const myPizza ={
  size:"medium",
  crust:"orignal",
  bake: function(){
   return console.log(`Baking a ${this.size} ${this.crust} crust pizza`);
  }
};
myPizza.bake();

/* class pizza {
  constructor(type,small,crust){
    this.type=type;
    this.size=small;
    this.crust=crust;
    this.toppings=[];
}
getToppings(){
  return this.toppings ;
}
setToppings(toppingspizza){
this.toppings.push(toppingspizza);
}
bake(){
  return console.log(`Baking a ${this.type} ${this.size} ${this.crust} crust pizza with ${this.toppings}`);
}
}
const pizza2 = new pizza("spicy","small","thin");
pizza2.setToppings("sausage");
pizza2.setToppings("cheese");
pizza2.setToppings("");
pizza2.bake();

 */

/* class pizza {//parentchildclass
  constructor(sizePizza){
    this.size=sizePizza;
    this.crust="original"
  }
  getCrust(){
    return this.crust;
  }
  setCrust(crustPizza){
         this.crust=crustPizza;
  }
}

class mPizza extends pizza {
  constructor(sizePizza){
    super(sizePizza);
    this.type="peperoni";
  }
  slice(){
    console.log(`Our ${this.type} ${this.size} pizza has 8 slices`);
  }
}
const myPizzaa = new mPizza("medium");
myPizzaa.slice(); */

/* //Factory function using for private and public proprty

function Pizza(){
  const crust ="orginal";
  const type ="margaritaa";
  return {
    bake: () => console.log(`Your ${crust} ${type} pizza is ready` )
  };
}

const Mypizzaaa =  Pizza();
Mypizzaaa.bake(); */



/* //private and public proprty declaration important to know

 class pizza {
  name = "Dominos";
  #pack = "family spcial";
  constructor(sizePizza){
    this.size=sizePizza;
    this.crust="original"
  }
  getCrust(){
    return this.crust;
  }
  setCrust(crustPizza){
         this.crust=crustPizza;
  }
  bake(){
    return console.log(`Your ${this.name} ${this.#pack} ${this.size} ${this.crust} Crust Pizza is ready`)
  }
} 
const Mypizza = new pizza("Large");
Mypizza.bake(); */


/* //JSON

const myObjj = {
  name: "dhuddu",
  content: ["Earn money","Grow money","Give Money"],
  sub: ()=>{console.log("I am wasim");}
};
myObjj.sub();

const SendJSON = JSON.stringify(myObjj);
console.log(SendJSON);
console.log(typeof SendJSON);

const ReceiveJSON = JSON.parse(SendJSON);
console.log(ReceiveJSON);
console.log(typeof ReceiveJSON); */



/* //ERROR HANDLING

"use strict";


const bake =() => {
  let i=0;
  while(i<=5){
    i++;
  try {
   if(i%2 !==0){
    throw new Error("This is a Odd number")
   }
   console.log("Even Number")
  }catch(err){
      console.log(err.stack);
  }finally{
    console.log("....Finally");
  }
}
}
bake(); */

