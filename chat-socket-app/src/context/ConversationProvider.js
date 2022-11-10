import React,{useContext, useState} from 'react'
import useLocalStorage from '../hooks/UseLocalStorage'
import { useContacts } from './ContactsProvider'

const ConversationsContext = React.createContext()

export function useConversations(){
    return useContext(ConversationsContext)
}


export const ConversationsProvider = ({children}) => {
  const {contacts}=useContacts()
    const [conversations, setConversations]=useLocalStorage('conversations',[])
    const createConversations=(recepients)=>{
      console.log(recepients);
     setConversations(prevConversations=>{
        return [...prevConversations,{recepients,message:[]}]
     })
    }
    
    const formattedConversations=conversations.map(conversation=>{
      const recepients= conversation.recepients.map(recepient=>{
        console.log(recepient, ' rec');
        const contact=contacts.find(contact=>{
          
          return contact.id===recepient
        })
        console.log(contact,' contact');
        console.log((contact.name),' сравнение');
        const name =  contact.name || recepient
        console.log(name,' naaammeeee');
        return {id:recepient,name}
      })
      console.log(recepients,' recepients');
      return {...conversation,recepients}
    })
    const value ={
      conversations:formattedConversations,
      createConversations
    }
  return (
    <ConversationsContext.Provider value={value}>
        {children}
    </ConversationsContext.Provider>
  )
}