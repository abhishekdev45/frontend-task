import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Contact } from '../types';

// Define the initial state of the contacts slice
interface ContactsState {
  contacts: Contact[];
}

const initialState: ContactsState = {
  contacts: [],
};

// Create a Redux slice for contacts
const contactsSlice = createSlice({
  name: 'contacts', 
  initialState, 
  reducers: {
    // Reducer to add a new contact
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload); // Add the new contact to the state's contacts array
    },
    // Reducer to update an existing contact
    updateContact: (state, action: PayloadAction<Contact>) => {
      const index = state.contacts.findIndex(contact => contact.id === action.payload.id);
      if (index !== -1) {
        state.contacts[index] = action.payload; // Update the contact if found
      }
    },
    // Reducer to delete a contact by ID
    deleteContact: (state, action: PayloadAction<number>) => {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload); // Remove the contact from the state's contacts array
    },
  },
});

// Exporting the actions to be used in components
export const { addContact, updateContact, deleteContact } = contactsSlice.actions;


export default contactsSlice.reducer;
