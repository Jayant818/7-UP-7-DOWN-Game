import React, { useState, FormEvent } from "react";
import {
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
} from "@mui/material";

interface BetFormProps {
	onBet: (betAmount: number, betType: "7up" | "7down" | "7") => void;
}

const BetForm: React.FC<BetFormProps> = ({ onBet }) => {
	const [betAmount, setBetAmount] = useState<string>("");
	const [betType, setBetType] = useState<string>("");
	const [showError, setShowError] = useState(false);
	// const [rolling, setRolling] = useState(false);

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		if (betAmount && betType) {
			// setRolling(true);
			setShowError(false);

			onBet(parseInt(betAmount), betType as "7up" | "7down" | "7");
			// setRolling(false);
		} else {
			setShowError(true);
		}
	};

	return (
		<form onSubmit={handleSubmit} className="flex flex-col space-y-4">
			<FormControl fullWidth>
				<InputLabel>Bet Amount</InputLabel>
				<Select
					value={betAmount}
					onChange={(e) => setBetAmount(e.target.value as string)}
					label="Bet Amount"
				>
					<MenuItem value="100">100</MenuItem>
					<MenuItem value="200">200</MenuItem>
					<MenuItem value="500">500</MenuItem>
				</Select>
			</FormControl>
			<FormControl fullWidth>
				<InputLabel>Bet Type</InputLabel>
				<Select
					value={betType}
					onChange={(e) => setBetType(e.target.value as string)}
					label="Bet Type"
				>
					<MenuItem value="7up">7 Up</MenuItem>
					<MenuItem value="7down">7 Down</MenuItem>
					<MenuItem value="7">Lucky 7</MenuItem>
				</Select>
			</FormControl>
			{showError && (
				<p className="text-base text-red-800">Please fill all Input Field</p>
			)}
			<Button
				type="submit"
				variant="contained"
				color="primary"
				// disabled={rolling}
			>
				Roll Dice
				{/* {rolling ? "Rolling..." : "Roll Dice"} */}
			</Button>
		</form>
	);
};

export default BetForm;
