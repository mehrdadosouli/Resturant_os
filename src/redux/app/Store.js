import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from '../features/CounterSlice'

export const Store = configureStore({
  reducer: {
    products:CounterSlice,
  }
})
