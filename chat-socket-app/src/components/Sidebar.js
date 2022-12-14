import React, { useState } from 'react'
import { Button, Modal, Nav, NavItem, Tab } from 'react-bootstrap'
import { useContacts } from '../context/ContactsProvider'
import { Contacts } from './Contacts'
import { Conversation } from './Conversation'
import { CreateNewContact } from './CreateNewContact'
import { NewConversationModal } from './NewConversationModal'


const CONVERSATIONS_KEY = 'conversations'
const CONTACTS_KEY = 'contacts'


export const Sidebar = ({id}) => {
    const [activeKey,setActiveKey]=useState(CONVERSATIONS_KEY)
    const [modalOpen,setModalOpen]= useState(false)
    
    const conversationsOpen = activeKey === CONVERSATIONS_KEY
    const handleClose =()=>{
        setModalOpen(false)
    }
  return (
    <div style={{width:'250px'}} className="d-flex flex-column">
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant="tabs" className="" >
            <Nav.Item>
                <Nav.Link eventKey={CONVERSATIONS_KEY}>Conversation</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
            </Nav.Item>

        </Nav>
        <Tab.Content
          style={{borderRight:'1px solid gray'}}
         className=' overflow-auto flex-grow-1'>
            <Tab.Pane eventKey={CONVERSATIONS_KEY}>
              <Conversation />
            </Tab.Pane>
            <Tab.Pane eventKey={CONTACTS_KEY}>
              <Contacts />
            </Tab.Pane>
          </Tab.Content>
           <div className='p-2 border-top border-right small'>
            Your Id: <span className='text-muted'>{id}</span>
           </div>
           <Button onClick={()=>setModalOpen(true)}>
            New {conversationsOpen?'Conversation':'Contact'}
           </Button>
      </Tab.Container>
      <Modal 
      onHide={handleClose}
      show={modalOpen} >
        {conversationsOpen?
        <NewConversationModal  closeModal={handleClose}/>
        :<CreateNewContact closeModal={handleClose}/>}
         
         
      </Modal>

    </div>
    
  )
}
