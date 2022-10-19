import { createReducer } from "@reduxjs/toolkit";
import {addContact,removeContact,filter} from './actions'

const contacts={
      items: [
        { id: 1, name: 'Rosie Simpson', number: '459-12-56' },
        { id: 2, name: 'Hermione Kline', number: '443-89-12' },
        { id: 3, name: 'Eden Clements', number: '645-17-79' },
        { id: 4, name: 'Annie Copeland', number: '227-91-26' }],
        filter:null
    } 
    
    const reducer = createReducer(contacts, {
      [addContact]: (state,action)=> {return {...state, items: [...state.items, action.payload]}},
      [removeContact]: (state,action)=>  {return {...state, items:[...state.items.filter(item => item.id !== action.payload)]}},
      [filter]: (state,action)=>   {return  {...state, filter:  action.payload}
    }
    });
    
    export default reducer;


