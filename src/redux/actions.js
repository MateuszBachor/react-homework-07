import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("ADD_CONTACT");
const removeContact = createAction("REMOVE_CONTACT");
const filter = createAction("FILTER");


  export  {addContact,removeContact,filter};
