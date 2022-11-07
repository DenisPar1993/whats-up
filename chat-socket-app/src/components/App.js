import { useState } from 'react';
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
      
      {id?<Dashboard id={id} />:<Login onChangeId={changeId}/>}
    </div>
  );
}

export default App;
