import { configureStore } from '@reduxjs/toolkit'
import {showLoginSlice} from '../features/Reducer'

export const store = configureStore({
  reducer: {
    showLoginSlice : showLoginSlice,
},
})
