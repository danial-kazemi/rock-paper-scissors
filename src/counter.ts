
 const calc =(player: string)=> {
  const tool :string[] = ["paper", "rock", "scissors"];

  const computer = tool[Math.floor(Math.random() * 3 )];

  let result = 
      player === computer
      ? " Tie game"
      : player === "rock" && computer === "paper"
      ? "Comuter Wins!"
      : player === "paper" && computer === "scissors"
      ? "Computer Wins!"
      : player ==="scissors" && computer === "rock"
      ? "Computer Wins"
      : "Player Wins";
  console.log(`computer = ${computer}`);
  console.log(`player = ${player}`);
  console.log(`Result = ${result}`);
}

export default calc;