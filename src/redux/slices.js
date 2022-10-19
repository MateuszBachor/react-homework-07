import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts,deleteContact,addContact } from "./operations";


const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};


const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
      items: [],
      isLoading: false,
      error: null,
    },
    
        extraReducers: {

            [fetchContacts.pending](state, action) {
              state.isLoading = true;
            },
            [fetchContacts.rejected](state, { payload }) {
              state.isLoading = false;
              state.error = payload;
            },
            [fetchContacts.fulfilled](state, { payload }) {
              state.isLoading = false;
              state.error = null;
              state.items = payload;

            },
            [addContact.pending]: handlePending,
            [addContact.rejected]: handleRejected,
            [addContact.fulfilled](state, {payload}) {
              state.isLoading = false;
              state.error = null;
              state.items.push(payload);
              console.log(payload)
            },

            [deleteContact.pending]: handlePending,
            [deleteContact.rejected]: handleRejected,
            [deleteContact.fulfilled](state, {payload}) {
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(contact => contact.id === payload);
            state.items.splice(index, 1);
            },
          },
    });

export const tasksReducer = contactsSlice.reducer;