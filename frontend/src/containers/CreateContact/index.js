import React, { useEffect } from 'react'
import Header from '../../components/Header';
import { createContact } from '../../context/actions/createContact'

const CreateContactsContainer = () => {

  useEffect(()=>{
    createContact();

  }, [])


  return (
    <div>
      <Header/>
      <h1>Create Contacts</h1> 
    </div>
  )
}

export default CreateContactsContainer