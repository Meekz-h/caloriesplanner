import { configureStore } from '@reduxjs/toolkit'
import newEntriesReducer from '../features/entries/newEntriesSlice'
import loginReducer from '../features/auth/LogInSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { EntriesApi } from '../services/Entries'
import signupReducer from '../features/auth/SignUpSlice'

export const store = configureStore({
  reducer: {
    newEntry: newEntriesReducer,
    login: loginReducer,
    signup: signupReducer,
    [EntriesApi.reducerPath]: EntriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([EntriesApi.middleware])
})

setupListeners(store.dispatch);
