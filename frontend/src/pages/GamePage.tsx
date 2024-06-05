import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { updatePoints } from "../store/playerSlice";
import axios from "axios";
import BetForm from "../components/BetForm";
import { Card, CardContent, Typography } from "@mui/material";
import Die from "../components/Die";

interface Result {
	dice1: number;
	dice2: number;
	sum: number;
	result: string;
	playerPoints: number;
}

const GamePage: React.FC = () => {
	const dispatch = useDispatch();
	const points = useSelector((state: RootState) => state.player.points);
	const [result, setResult] = useState<Result | null>(null);
	const [isRolling, setIsRolling] = useState(false);
	const [value1, setValue1] = useState<number>(1);
	const [value2, setValue2] = useState<number>(1);

	const handleBet = async (
		betAmount: number,
		betType: "7up" | "7down" | "7"
	) => {
		try {
			setIsRolling(true);
			setTimeout(async () => {
				const response = await axios.post("http://localhost:5000/bet", {
					betAmount,
					betType,
				});
				setResult(response.data);
				dispatch(updatePoints(response.data.playerPoints));
				setValue1(response.data.dice1);
				setValue2(response.data.dice2);
				setIsRolling(false);
			}, 1000);
		} catch (error) {
			console.error("Error placing bet", error);
		}
	};

	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
			<Typography variant="h3" component="h1" className="!mb-4 !font-bold">
				7 Up 7 Down <span className="text-[#6a5acd]">Game</span>
			</Typography>

			<div className="flex gap-2">
				<Die value={value1} isRolling={isRolling} />
				<Die value={value2} isRolling={isRolling} />
			</div>
			<Card className="max-w-md p-4  w-full">
				<CardContent className="w-full flex flex-col gap-2  ">
					<Typography variant="h5" component="h2" className="mb-4">
						Current Points: {points}
					</Typography>
					{result && (
						<>
							<Typography>Sum: {result.sum}</Typography>
							<Typography>Result: {result.result}</Typography>
							<Typography className="pb-2">
								New Points: {result.playerPoints}
							</Typography>
						</>
					)}
					{points > 0 ? (
						<BetForm onBet={handleBet} />
					) : (
						<p className="text-lg text-red-500">No Points Left</p>
					)}
				</CardContent>
			</Card>
		</div>
	);
};

export default GamePage;
