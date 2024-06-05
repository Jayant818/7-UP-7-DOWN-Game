const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

let playerPoints = 5000;

const rollDice = () => Math.floor(Math.random() * 6) + 1;

app.post("/bet", (req: any, res: any) => {
	const { betAmount, betType } = req.body;
	const dice1 = rollDice();
	const dice2 = rollDice();
	const sum = dice1 + dice2;

	let result = "lose";
	let payout = 0;

	if (betType === "7down" && sum < 7) {
		result = "win";
		payout = betAmount * 2;
	} else if (betType === "7up" && sum > 7) {
		result = "win";
		payout = betAmount * 2;
	} else if (betType === "7" && sum === 7) {
		result = "win";
		payout = betAmount * 5;
	}

	if (result === "win") {
		playerPoints += payout;
	} else {
		playerPoints -= betAmount;
	}

	res.json({ dice1, dice2, sum, result, playerPoints });
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
