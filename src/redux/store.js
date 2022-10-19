

import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer } from "../redux/filterSlices"
import {tasksReducer} from '../redux/slices'



const store = configureStore({
    reducer: {
        contacts: tasksReducer,
        filter: filtersReducer,
    }
});
export default store;