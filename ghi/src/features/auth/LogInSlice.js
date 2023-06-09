import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	fields: {
		username: "",
		password: "",
	},
	errorMessage: null,
};

const loginSlice = createSlice({
	name: "login",
	initialState,
	reducers: {
		handleUsernameChange: (state, action) => {
			state.fields.username = action.payload;
		},
		handlePasswordChange: (state, action) => {
			state.fields.password = action.payload;
		},
		error: (state, action) => {
			state.errorMessage = action.payload;
		},
		reset: () => initialState,
	},
});

export const { handlePasswordChange, handleUsernameChange, reset, error } =
	loginSlice.actions;

export default loginSlice.reducer;
