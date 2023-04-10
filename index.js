let rounds = 0;
let playerScore = 0;
let computerScore = 0;

function playRound() {
	let selections = ["rock", "paper", "scissors"];
	let computerSelection = selections[Math.floor(Math.random() * selections.length)];
	let results = {
		rock: computerSelection === "paper" ? "lose" : "win",
		paper: computerSelection === "scissors" ? "lose" : "win",
		scissors: computerSelection === "rock" ? "lose" : "win",
	};
	let playerSelection = document.getElementById("player").value;

	document.getElementById("computer").innerHTML = computerSelection;

	if (playerSelection === computerSelection) {
		changeResult("It's a tie!");
		return "tie";
	} else if (results[playerSelection] === "win") {
		changeResult(`You win! ${playerSelection} beats ${computerSelection}!`);
		return "win";
	} else if (results[playerSelection] === "lose") {
		changeResult(`You lose! ${computerSelection} beats ${playerSelection}!`);
		return "lose";
	} else {
		changeResult("Invalid selection. Please try again.");
	}
}

function game() {
	if (rounds < 5) {
		let round = playRound();
		rounds++;
		if (round === "win") {
			playerScore++;
		} else if (round === "lose") {
			computerScore++;
		}
	} else {
		if (playerScore > computerScore) {
			changeResult("You win the game!");
		} else if (playerScore < computerScore) {
			changeResult("You lose the game!");
		} else {
			changeResult("It's a tie!");
		}
	}
}

function changeResult(status) {
	document.getElementById("result").innerHTML = status;
}
