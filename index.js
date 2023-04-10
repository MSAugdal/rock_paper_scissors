function playRound() {
	let results = {
		rock: computerSelection === "paper" ? "lose" : "win",
		paper: computerSelection === "scissors" ? "lose" : "win",
		scissors: computerSelection === "rock" ? "lose" : "win",
		selections: ["rock", "paper", "scissors"],
	};
	let playerSelection = document.getElementById("player").value;
	var computerSelection = results.selections[Math.floor(Math.random() * results.selections.length)];

	document.getElementById("computer").innerHTML = computerSelection;

	if (playerSelection === computerSelection) {
		document.getElementById("result").innerHTML = "It's a tie!";
	} else if (results[playerSelection] === "win") {
		document.getElementById("result").innerHTML = `You win! ${playerSelection} beats ${computerSelection}!`;
	} else if (results[playerSelection] === "lose") {
		document.getElementById("result").innerHTML = `You lose! ${computerSelection} beats ${playerSelection}!`;
	} else {
		document.getElementById("result").innerHTML = "Invalid selection. Please try again.";
	}
}
