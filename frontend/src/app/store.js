import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import showLoginReducer from '../features/Reducer'

export const store = configureStore({
  reducer: {
    showLoginSlice : showLoginReducer,
}
})

setupListeners(store.dispatch)