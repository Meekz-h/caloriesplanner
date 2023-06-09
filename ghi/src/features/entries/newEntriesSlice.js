import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	fields: {
		name: "",
		category: "snacks",
		calories: 0,
	},
	errorMessage: null,
};

export const newEntriesSlice = createSlice({
	name: "entries",
	initialState,
	reducers: {
		handleNameChange: (state, action) => {
			state.fields.name = action.payload;
		},
		handleCategoryChange: (state, action) => {
			state.fields.category = action.payload;
		},
		handleCalorieChange: (state, action) => {
			state.fields.calories = action.payload;
		},
		error: (state, action) => {
			state.errorMessage = action.payload;
		},
		reset: () => initialState,
	},
});

export const {
	handleNameChange,
	handleCategoryChange,
	handleCalorieChange,
	reset,
	error,
} = newEntriesSlice.actions;

export default newEntriesSlice.reducer;
