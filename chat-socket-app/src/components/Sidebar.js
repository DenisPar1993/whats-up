import React, { useState } from 'react'
import { Button, Nav, NavItem, Tab } from 'react-bootstrap'
import { Contacts } from './Contacts'
import { Conversation } from './Conversation'


const CONVERSATIONS_KEY = 'conversations'
const CONTACTS_KEY = 'contacts'


export const Sidebar = ({id}) => {
    const [activeKey,setActiveKey]=useState(CONVERSATIONS_KEY)
    const conversationsOpen = activeKey === CONVERSATIONS_KEY
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
           <Button>
            New {conversationsOpen?'Conversation':'Contact'}
           </Button>
      </Tab.Container>

    </div>
    
  )
}
