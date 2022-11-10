import { useState } from 'react';
import { ContactsProvider } from '../context/ContactsProvider';
import { ConversationsProvider } from '../context/ConversationProvider';
import useLocalStorage from '../hooks/UseLocalStorage';
import { Dashboard } from './Dashboard';
import {Login} from './Login'

function App() {
  const [id,setid]=useLocalStorage('id')
  const changeId=(id)=>{
       setid(id)
  }
  return (
    <div >
      <ContactsProvider>
        <ConversationsProvider>
      {id?<Dashboard id={id} />:<Login onChangeId={changeId}/>}
      </ConversationsProvider>
      </ContactsProvider>
    </div>
  );
}

export default App;
