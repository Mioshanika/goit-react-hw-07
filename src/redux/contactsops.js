import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const axiosConfig = {
  baseURL: `https://${process.env.REACT_APP_API_KEY}.mockapi.io`,
  headers: {
    'content-type': 'application/json',
  },
};
export const getContacts = createAsyncThunk('contacts/getAll', async ({ signal }, thunkAPI) => {
  axiosConfig.signal = signal;
  try {
    const response = await axios.get('/contacts', axiosConfig);
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});
export const addContact = createAsyncThunk('contacts/addContact', async ({ data }, thunkAPI) => {
  try {
    const response = await axios.post('/contacts', data, axiosConfig);
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});
export const delContact = createAsyncThunk('contacts/deleteContact', async ({ id }, thunkAPI) => {
  try {
    const response = await axios.delete(`/contacts/${id}`, axiosConfig);
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});
