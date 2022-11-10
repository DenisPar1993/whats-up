import React, { useState } from 'react'
import { Form, Button,Modal,ModalBody} from 'react-bootstrap'
import { useContacts } from '../context/ContactsProvider'
import { useConversations } from '../context/ConversationProvider'


export const NewConversationModal = ({closeModal}) => {
  const [selectedContactIds, setSelectedContactIds]=useState([])
  const {createConversations}=useConversations()
  const {contacts}=useContacts()
  const handleCheckChange=(idContact)=>{
     setSelectedContactIds(prevSelectedContacts=>{
      if(prevSelectedContacts.includes(idContact)){
        return prevSelectedContacts.filter(prevId=>{
          return idContact !==prevId
        })
      }else{
        return [...prevSelectedContacts,idContact]
      }
     })
  }
  const handleSubmit =(e)=>{
     e.preventDefault()
    console.log(selectedContactIds);
    
    createConversations(selectedContactIds)
     closeModal()
  }
  return (
    <>
    <Modal.Header closeButton>Create Conversation</Modal.Header>
      <ModalBody>
        <Form onSubmit={handleSubmit}>
            {contacts.map(contact=>{
              return (
                <Form.Group style={{display:'flex'}}>
                  <Form.Label >{contact.name}</Form.Label>
                  <Form.Check
                     type="checkbox"
                     style={{marginLeft:'10px'}}
                     value={selectedContactIds.includes(contact.id)}
                     onChange={()=>handleCheckChange(contact.id)}

                  />
                  
                </Form.Group>
              )
            })}
            <Button type="submit">Create contact</Button>
        </Form>
      </ModalBody>
    </>
  )
}
