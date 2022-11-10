import React, { useRef } from 'react'
import { Button, Form, Modal, ModalBody } from 'react-bootstrap'
import { useContacts } from '../context/ContactsProvider'

export const CreateNewContact = ({closeModal}) => {
  const {contacts, createContact} =useContacts()
    const idRef=useRef()
    const nameRef=useRef()
    const submitForm=(e)=>{
         e.preventDefault()
         console.log(idRef.current.value,nameRef.current.value);
         createContact(idRef.current.value,nameRef.current.value)
         closeModal()
    }
  return (
    <>
      <Modal.Header closeButton></Modal.Header>
      <ModalBody>
        <Form onSubmit={submitForm}>
            <Form.Group>
                <Form.Label>Id</Form.Label>
                <Form.Control ref={idRef} required/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type='text' ref={nameRef} required/>
            </Form.Group>
            <Button type="submit">Create contact</Button>
        </Form>
      </ModalBody>
    </>
  )
}
