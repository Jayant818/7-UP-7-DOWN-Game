import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PlayerState {
	points: number;
}

const initialState: PlayerState = {
	points: 5000,
};

const playerSlice = createSlice({
	name: "player",
	initialState,
	reducers: {
		updatePoints: (state, action: PayloadAction<number>) => {
			state.points = action.payload;
		},
	},
});

export const { updatePoints } = playerSlice.actions;
export default playerSlice.reducer;
