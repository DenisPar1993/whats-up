import React, { useRef } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid';

export const Login = ({onChangeId}) => {
    const idRef = useRef()
   const changeSubmit=(e)=>{
         e.preventDefault()
         
         if(idRef.current.value)onChangeId(idRef.current.value)
   }
   const onIdSubmit=()=>{
    const id=uuidv4()
    onChangeId(id)
   }
  return (
    <>
    <Container className='d-flex justify-center align-items-center' style={{height:'100vh'}}>
        <Form onSubmit={changeSubmit}>
            <Form.Group className='mb-3'>
                <Form.Label>Enter your id</Form.Label>
                <Form.Control type="text" ref={idRef}/>
            </Form.Group>
            <Button type='submit' >Login</Button>
            <Button onClick={onIdSubmit} className='ml-3'>Add new id</Button>
        </Form>
    </Container>
    </>
  )
}
