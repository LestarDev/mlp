import { configureStore } from '@reduxjs/toolkit'
import currentSlice from '../config/currentSlice'
export const store = configureStore({
  reducer: {
    currency: currentSlice, 

  },
})

export type AppDispatch = typeof store.dispatch