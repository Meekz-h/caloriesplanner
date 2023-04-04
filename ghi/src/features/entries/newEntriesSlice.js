import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: '',
  category: '',
  calories: 0,
}

export const newEntriesSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    handleNameChange: (state, action) => {
      state.name = action.payload
    },
    handleCategoryChange: (state, action) => {
      state.category = action.payload
    },
    handleCalorieChange: (state, action) => {
      state.calories = action.payload
    },
    reset: () => initialState
  },
})

// Action creators are generated for each case reducer function
export const { handleNameChange, handleCategoryChange, handleCalorieChange, reset } = newEntriesSlice.actions;

export default newEntriesSlice.reducer;
