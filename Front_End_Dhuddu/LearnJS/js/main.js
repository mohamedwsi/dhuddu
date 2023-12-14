/* STRNG */
/* Stringproprties */
let myVariable = "Mathematics";

console.log("word".length);
console.log(myVariable.charAt(3));
console.log(myVariable.indexOf("a"));
console.log(myVariable.lastIndexOf("a"));
console.log(myVariable.slice(0,3));
console.log(myVariable.toUpperCase());
console.log(myVariable.toLowerCase());
console.log(myVariable.includes("wasi"));
console.log(myVariable.includes("tics"));
console.log(myVariable.split("e"));
console.log(myVariable.split(""));


/* NUMBER */
/* Numberproperties */

const myVar = "70";
const myNum = 70;
const myFloat=70.12;

console.log(myNum===myFloat);
console.log(myFloat);
console.log(myVar);
console.log(Number(myVar));

/* Numbermethods */

const myVar1 = "435.823aasd";
const myNum1 = 40;
const myFloat1=74.12;

console.log(Number.isInteger(myNum1));
console.log(Number.parseFloat(myVar1).toFixed(2));
console.log(Number.parseInt(myFloat1));
console.log(myNum1.toString());
console.log(Number.parseFloat(myVar1).toFixed(2));

console.log(Number.isNaN(41));
console.log(Number.isNaN("wasm"));
console.log(isNaN(41));
console.log(isNaN("wasm"));


/* MATH METHODS and PROPERTIES */

console.log(Math.PI);
console.log(Math.trunc(Math.PI));
console.log(Math.round(4.2));
console.log(Math.round(4.7));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.7));

console.log(Math.pow(10,3));
console.log(Math.max(1,4,5,678,54,2,2003));
console.log(Math.min(1,4,5,678,54,2,2003));
console.log(Math.floor(Math.random()*10));

/* CODNG CHALLENGE */
const Var = "Mohamedwasim";
console.log(Var.charAt(Math.floor(Math.random()*Var.length)));

/* IF ELSE */

let customerIsBanned = false;
let viewer = "js course"
let finance = true;
let reply;

if (customerIsBanned){
    reply='Sorry';
}

else if (viewer && finance){
    reply = `Enjoy ${viewer} and finance content`;
}
else if (viewer){
    reply = `Enjoy ${viewer}`;
}

else {
    reply = 'sorry its still in process';
}
console.log(reply);



let Mark = 34;
let Grade;
let collegeStudent = true;


if (Mark>=90){
    Grade = 'A+';
}
else if (Mark>=80){
    Grade = 'A';
}
else if (Mark>=70){
    Grade = 'B';
}
else if (Mark>=35){
    Grade = 'C';
}

else {
    if(collegeStudent){
        Grade = 'RA';
    }
    else{
        Grade = 'Fail';
    }
}
console.log(Grade);


/* SWITCH STATEMNTS */

let player = "rock";
let computer = "scissors";

switch (player){
    case computer:
        console.log("Tie!");
        break;
    case "rock":
        if (computer==="scissors"){
            console.log("player wins!");
        }else{
            console.log("computer wins");
        }
        break;
    default:
            console.log("serverprblm")

}

/* TERNARY OPERATORS */

let subs = "Subscriber";
let response = subs ? "Welcome!" : "Kindly subscribe";
console.log(response);

let testscore = 90;
let grade = testscore >= 90 ?  "A" :  testscore >= 70 ?  "B" :  testscore >= 35 ?  "B" :  "F";
console.log(grade);

/* let player1 = "Rock";
let com = "paper";

let winner = player1 === com ? "Tie!" : com==="scissors" ? "player1wins":com==="paper" ? "computer wins":"no"
console.log(winner); */
/* 
let player1 = "scissors";
let comp = "paper";
let winner = player1===comp ? "Tie!" 
: player1==="rock" && comp==="scissors" ? "player1wins" 
: player1==="rock" && comp==="paper" ? "computerwins"
: player1==="scissors" && comp==="rock" ? "computerwins"
: player1==="scissors" && comp==="paper" ? "playerwins"
: player1==="paper" && comp==="rock" ? "playerwins"
: player1==="paper" && comp==="scissors" ? "computerwins"
: "called an wrong property!";
console.log(winner); */

/* USER INPUT */

/* let my = alert("hi guys"); */
/* let my = confirm("hi guys"); */
/* let my = prompt("Enter ur Name...");
if (my){
    console.log(my ?? "you didn't write name");
}
else {
    console.log("you didn't write name");
}
console.log(my.trim()); */

/* EXERCISE  */


/* let playGame=confirm("Can we play rock,paper or scissors");
if (playGame){
    let startGame=prompt("Enter rock,paper or scissors");
    if (startGame){
        let playOne=startGame.trim().toLowerCase();
        if (
            playOne==="rock" ||
            playOne==="paper"||
            playOne==="scissors"
            ){
                let computerChoice=Math.floor(Math.random()*3+1);
                let computer = 
                    computerChoice===1 
                    ? "rock"
                    : computerChoice===2 
                    ? "paper"
                    : "scissors";

                 let result =
                 playOne===computer 
                  ? "Tie!" 
                  : playOne==="rock" && computer=== 2
                  ? `playOne: ${playOne}\nComputer: ${computer}\nComputer wins`
                  : playOne==="scissors" && computer===1 
                  ? `playOne: ${playOne}\nComputer: ${computer}\nComputer wins`
                  : playOne==="paper" && computer===3
                  ? `playOne: ${playOne}\nComputer: ${computer}\nComputer wins`
                  :`playOne: ${playOne}\nComputer: ${computer}\nPlayerOne wins`;
                alert(result);
                let playAgain =confirm("play again?")
                playAgain ? location.reload() : alert("Thanks for playin");
        }
        else{
           alert("You did'nt enter rock,paper or scissors")
        }
    }
    else{
        alert("Okay I think you have changed your mind , may be next time");
    }
}
else{
    alert("Okay , may be next time");
}  */

/* let var1=confirm("Can we play rock,paper,scissors");
if (var1) {
    let var2=prompt("Choose rock,paper or scissors");
    if (var2)
       {
        let playerOne=var2.trim().toLowerCase();
          if  (playerOne==="rock"||
                playerOne==="paper"||
                playerOne==="scissors") {
                   let botChoice=Math.floor(Math.random()*3+1);
                   let Bot=  botChoice===1 
                           ?"rock"
                           : botChoice===2 
                           ?"paper"
                           :"scissors";

         let finalWinner=playerOne===Bot
                         ?`Tie Game!!!`
                         :playerOne==="paper" && Bot===1
                         ?`PlayerOne : ${playerOne} \n Bot:${Bot}\n Congragulations...Player wins!!!`
                         :playerOne==="rock" && Bot===3
                         ?`PlayerOne : ${playerOne} \n Bot:${Bot}\n Congragulations...Player wins!!!`
                         : playerOne==="scissors" && Bot===2
                         ?`PlayerOne : ${playerOne} \n Bot:${Bot}\n Congragulations...Player wins!!!`
                         :`PlayerOne : ${playerOne} \n Bot:${Bot}\n Bot won the challenge`;
        alert(finalWinner);
        let retry=confirm("Do you wanna play again?");
        retry = finalWinner ? location.reload() : "okay have a good dayy mate"
          }  
          else{
            alert("I think you have entered wrong string");
          }
    }
    else{
        alert("I think you have changed your mind ,may be next time!");
    }
}
else{
    alert("may be next time!");
}*/


/* LOOP */

/* While loop */

let i=1;
while(i<=10){
    console.log(i);
    i++;
}

/* do while loop */

let a=5;
do {
    console.log(a);
    a=a+10;
}while(a<5);

/* for loop */

for(w=1;w<=50;w=w*5){
    console.log(w);
}

let myName="wasim"
for(let m=0;m<=myName.length;m+=2){
    console.log(myName.charAt(m))
}

/* break */
for (v=0;v<=10;v++){
    if(v===4){
        break;
    }
}
console.log(v);

/* continue */
let text='';
for(t=0;t<10;t++){
    if(t===3){
        continue;
    }
    text=text+t;
}
console.log(text);

/* nested for loop */

let zname="ws"
for(let z=0;z<=zname.length;z++){
    for(let x=0;x<=zname.length;x++){
        console.log(z,x);
    }
}

/* FUNCTIONS */

function add(num1,num2){
    console.log(num1);
    console.log(num2);
  
    if (num2===undefined){
        return num1;
    }

    return num1 + num2;
}

console.log(add(1))



function getUsernameonly(email){
return(email.slice(0,email.indexOf("@")));
}

console.log(getUsernameonly("modasi@gmail.com"));

/* another types for calling fuctions */

/* normal type */
function toProperCase(name){
    return(name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
}

console.log (toProperCase("mohamEd"))


/* type 1 */
const toProperCases =function (name){
    return(name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
}

console.log (toProperCases("mohamEdgdjjkjk"))


/* type 2 */
const toProperCasess = (name)=>{
    return(name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
}

console.log (toProperCasess("mohamEdgdjjkjk"));

/* Scope */

/* global scope */
/* let q=1;
let e=2; */

/* localscope */
/* function myfun(){
    let q=3;
   if(true){
    let e=3;
   }
} */

/* ARRAYS */

const myArray=[];

myArray[0]="golbal";
myArray[1]="array";
myArray[2]=false;
myArray[3]=23;
myArray[4]=90.3;
console.log(myArray);
console.log(myArray.length);
console.log(myArray[myArray.length-1]);
console.log(myArray[2]);

/* console.log(myArray.push("ding"));
console.log(myArray);

console.log(myArray.unshift("ding"));
console.log(myArray);

console.log(myArray.pop());
console.log(myArray);

console.log(myArray.shift());
console.log(myArray); */



/* let first = myArray.push("ding");
console.log(first);
console.log(myArray);

let second = myArray.unshift("ding");
console.log(second);
console.log(myArray);

let third = myArray.pop();
console.log(third);
console.log(myArray);

let last = myArray.shift();
console.log(last);
console.log(myArray); */

/* myArray.splice(2,4);
console.log(myArray);


myArray.splice(2,0,"wasim");
myArray.splice(3,0,8);
myArray.splice(4,0,"was");
console.log(myArray);

const newArray =myArray.slice(0,3);
console.log(newArray);

const newwArray =myArray.join();
console.log(newwArray);

const newwwArray =newwArray.split(',');
console.log(newwwArray);
 */

const array1=["javi",5,false,"quedix"];

console.log(array1);
console.log(myArray.concat(array1)); //concate type

array2=[...myArray,...array1]; //spread type
console.log(array2); 

//examples about 2d and 3d array

const A1=["frontend","Backend","Fullstack"];
const A2=["Testing","sales","Marketing"];
const B1=["Trading","Invest","Realstate"];
const B2=["Healthcare","Foundation"]
const C=["Education"];

const A=[A1,A2];
console.log(A[0][2],A[1][0]); //TwoDimensional array
const B=[B1,B2];
console.log(B[0][2],B[1][0]); //TwoDimensional array

const Array3d=[A,B];
console.log(Array3d[0][0][2],Array3d[1][1][0]);//threeDimensional array


