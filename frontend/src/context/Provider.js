import React, {createContext, useReducer } from "react";
import contactsinitialState from "./initialStates/contactsinitialState";
import contacts from "./reducers/contacts"

export const GlobalContext = createContext({})

export const GlobalProvider = ({children}) => {
    const [contactsState, contactsDispatch] = useReducer(
        contacts,
        contactsinitialState
    );

    return (<GlobalContext.Provider value= {
        {
            contactsState,
            contactsDispatch
        }}
    >
        {children}</GlobalContext.Provider>)
}