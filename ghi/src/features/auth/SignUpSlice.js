import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  fields: {
    full_name: "",
    email: "",
    username: "",
    age: "",
    goal: "",
    password: "",
    passwordConfirmation: "",
  },
  errorMessage: null,
};
const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    handleFullNameChange: (state, action) => {
      state.fields.full_name = action.payload;
    },
    handleEmailChange: (state, action) => {
      state.fields.email = action.payload;
    },
    handleUsernameChange: (state, action) => {
      state.fields.username = action.payload;
    },
    handleAgeChange: (state, action) => {
      state.fields.age = action.payload;
    },
    handleGoalChange: (state, action) => {
      state.fields.goal = action.payload;
    },
    handlePasswordChange: (state, action) => {
      state.fields.password = action.payload;
    },
    handlePasswordConfirmationChange: (state, action) => {
      state.fields.passwordConfirmation = action.payload;
    },
    error: (state, action) => {
      state.errorMessage = action.payload;
    },
    reset: () => initialState,
  },
});
export const {
  handleFullNameChange,
  handleEmailChange,
  handleUsernameChange,
  handleAgeChange,
  handleGoalChange,
  handlePasswordChange,
  handlePasswordConfirmationChange,
  reset,
  error,
} = signupSlice.actions;
export default signupSlice.reducer;
