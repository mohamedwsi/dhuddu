const letsPlay = confirm("Can we play rock, paper and Scissors");
if (letsPlay){
    const Game = prompt("Rock, Paper or Scissors");
    if (Game){
        const playGame = Game.trim().toLowerCase();
        if (playGame==="rock"||
            playGame==="paper"||
            playGame==="scissors"){
            const Bot = Math.floor(Math.random()*3+1);
            const botGame = Bot === 1 ?"rock" : 
                            Bot === 2 ?"paper":
                            "scissors";

            const winner = playGame===botGame ? `Tie Game`:
                           playGame==="rock" && botGame===3 ?`Player Wins`:
                           playGame==="paper" && botGame===1 ?`Player Wins`:
                           playGame==="scissors" && botGame===2 ?`Player Wins`:
                           `Bot Wins`;
            alert(winner);
            const retry = alert("you wanna play another game ");
            retry = winner ? location.reload() : "Thank you for playing";
                           
        }
        else{
            alert("may be next time");
        }
    }
    else{
        alert("You Have entered wrong property");
    }
}
else {
    alert("You Have Decided not to play");
}