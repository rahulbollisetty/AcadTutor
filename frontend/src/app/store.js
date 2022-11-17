import { configureStore } from '@reduxjs/toolkit'
import showLoginReducer from '../features/Reducer'

export const store = configureStore({
  reducer: {
    showLoginSlice : showLoginReducer,
},
})
