import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsslice';
import { filterReducer } from './filtersslice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
  devTools: import.meta.env.MODE === 'development',
});
