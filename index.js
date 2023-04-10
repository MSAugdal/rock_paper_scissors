let rounds = 0;
let playerScore = 0;
let computerScore = 0;

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

function game() {
	if (rounds < 5) {
		playRound();
		rounds++;
		if (document.getElementById("result").innerHTML.includes("win")) {
			playerScore++;
		} else if (document.getElementById("result").innerHTML.includes("lose")) {
			computerScore++;
		}
	} else {
		if (playerScore > computerScore) {
			document.getElementById("result").innerHTML = "You win the game!";
		} else if (playerScore < computerScore) {
			document.getElementById("result").innerHTML = "You lose the game!";
		} else {
			document.getElementById("result").innerHTML = "It's a tie!";
		}
	}
	console.log(playerScore, computerScore, rounds);
}
