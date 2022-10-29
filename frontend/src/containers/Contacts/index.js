import React, {useEffect } from 'react'
import Header from '../../components/Header';
import getContacts from '../../context/actions/contacts/getContacts';



const ContactsContainer = () => {
  
  useEffect(() => {
    getContacts();
  }, [])
  return (
    <div>
      <Header/>
      <h1>Contacts</h1> 
    </div>
  )
}

export default ContactsContainer;