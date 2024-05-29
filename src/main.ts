import './style.css'

// Rock Paper Scissors
type RST = ["rock","paper","scissors"];

let playGame: boolean  = confirm("Shall we play rock, paper, or scissors ?");
if (playGame){    // play
    
    while (playGame) {
        const playerChoice : string | null =prompt("please enter rock, paper, or scissors");
        if (playerChoice || playerChoice === "") {
            const playerOne : string = playerChoice.trim().toLocaleLowerCase();
            if(
                playerOne === "rock" ||
                playerOne === "paper" ||
                playerOne === "scissors"
            ) {
                
                let computerChoice : number = Math.floor(Math.random() * 3);
                const rpsArray: RST = ["rock", "paper", "scissors"];
                const computer: string = rpsArray[computerChoice];    
                const result = 
                playerOne === computer
                    ? `PlayerOne: ${playerOne}\nComputer: ${computer}\nTie game`
                    : playerOne === "rock" && computer === "paper"
                    ? `PlayerOne: ${playerOne}\nComputer: ${computer}\nComputer Wins!`
                    : playerOne === "paper" && computer === "scissors"
                    ? `PlayerOne: ${playerOne}\nComputer: ${computer}\nComputer Wins!`
                    : playerOne ==="scissors" && computer === "rock"
                    ? `PlayerOne: ${playerOne}\nComputer: ${computer}\nComputer Wins!`
                    : `PlayerOne: ${playerOne}\nComputer: ${computer}\nYou Wins!`
                    ;
                alert(result);
                playGame = confirm("Play Again?");
                if (!playGame) alert("Ok, thanks for playing.");
                continue;   
            } else {
                alert("You didn't enter rock, paper, or scissors.");
                continue;
            }
        }else {
            alert("I guess you changed your mind. Maybe next time.")
        }       
    } 
} else {
    alert("Ok, maybe next time.");
}

/*  */