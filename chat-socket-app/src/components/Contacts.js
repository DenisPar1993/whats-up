import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useContacts } from '../context/ContactsProvider'
import { CreateNewContact } from './CreateNewContact'

export const Contacts = () => {
const {contacts}=useContacts()
console.log(contacts);
console.log(contacts, ' rjynfrns');
  return (
    <div>
      <ListGroup>
        {contacts.map((contact,i)=>{
          return(
           <ListGroup.Item key={i}>{contact.name}</ListGroup.Item>
          )
        })}
        
      </ListGroup>
    </div>
  )
}
