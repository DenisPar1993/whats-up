import React,{useContext, useState} from 'react'
import useLocalStorage from '../hooks/UseLocalStorage'

const ContactContext = React.createContext()

export function useContacts(){
    return useContext(ContactContext)
}

export const ContactsProvider = ({children}) => {
    const [contacts, setContacts]=useLocalStorage('contacts',[])
    const createContact=(id,name)=>{
     setContacts(prevContacts=>{
        return [...prevContacts,{id,name}]
     })
    }
  return (
    <ContactContext.Provider value={{contacts, createContact}}>
        {children}
    </ContactContext.Provider>
  )
}
