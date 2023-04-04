import { configureStore } from '@reduxjs/toolkit'
import newEntriesReducer from '../features/entries/newEntriesSlice'
import loginReducer from '../features/auth/LogInSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { EntriesApi } from '../services/Entries'
import { authApi } from '../services/Auth'

export const store = configureStore({
  reducer: {
    newEntry: newEntriesReducer,
    login: loginReducer,
    [EntriesApi.reducerPath]: EntriesApi.reducer,
    [authApi.reducerPath]: authApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([EntriesApi.middleware, authApi.middleware])
})

setupListeners(store.dispatch)
