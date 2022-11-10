import React from 'react'
import {ListGroup} from 'react-bootstrap'
import {useConversations} from '../context/ConversationProvider'
export const Conversation = () => {
  const {conversations} = useConversations()
  return (
    <ListGroup>
        {conversations.map((conversation,i)=>{
          return(
           <ListGroup.Item key={i}>
            {conversation.recepients.map(r=>r.name).join(', ')}
            </ListGroup.Item>
          )
        })}
        
      </ListGroup>
  )
}
