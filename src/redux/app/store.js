import { configureStore } from '@reduxjs/toolkit';  
import CounterSlice from '../features/CounterSlice'; // Verify this path  

export const store = configureStore({  
  reducer: {  
    products: CounterSlice,  
  },  
});
