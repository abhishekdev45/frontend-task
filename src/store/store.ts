import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from '../features/contactSlice';

// Configure the Redux store
const store = configureStore({
  reducer: {
    // Add the contacts reducer to the store
    contacts: contactsReducer,
  },
});

// Type definitions for the RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>; // Type for the entire Redux state
export type AppDispatch = typeof store.dispatch; // Type for the dispatch function

export default store; // Export the configured store as the default export
