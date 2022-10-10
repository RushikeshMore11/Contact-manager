import React, { useEffect, useState } from 'react'
import {uuid} from 'uuidv4';
import AddContact from './AddContact'
import ContactList from './ContactList'
import Header from './Header'


const App = () => {
  const LOCAL_STORAGE_KEY = "contacts"
  const [contacts,setContacts] = useState([]); 


  const addContactHandler = (contact) =>{
    setContacts([...contacts,{id:uuid(), ...contact}]);
  }

  const removeContactHandler = (id) =>{
      const newContactList = contacts.filter(contact =>{
        return contact.id != id
      });

      setContacts(newContactList);
  }

  useEffect(()=>{
   const retrieveContacts = JSON.parse(localStorage.getItem( LOCAL_STORAGE_KEY));
   if(retrieveContacts){setContacts(retrieveContacts)};
  },[])

  useEffect(()=>{
    localStorage.setItem( LOCAL_STORAGE_KEY,JSON.stringify(contacts));
  },[contacts]);


    return (
    <>
    <div className='ui container'>
  
    
      <Header/>
    <AddContact addContactHandler={addContactHandler}/>
    <ContactList contacts={contacts} getContactId={removeContactHandler}/>
    </div>
    </>
  )
}

export default App