import { createSlice, createSelector } from '@reduxjs/toolkit';
import defaultContacts from '../data/phonebook.json';
import { selectFilter } from './filtersslice';

const initialState = {
  contacts: defaultContacts,
};
const slice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(item => item.id !== action.payload);
    },
  },
});

export const contactsReducer = slice.reducer;
export const { addContact, deleteContact } = slice.actions;

export const selectContacts = state => state.contacts.contacts;
export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) =>
    contacts.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
);
