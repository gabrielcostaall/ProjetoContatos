import React from 'react';
import logo from './assets/images/logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import  ContactsComponent from './containers/Contacts'
import CreateContactsComponent from './containers/CreateContact';
import { GlobalProvider } from './context/Provider';

function App() {
  document.title = 'Keep Kontakt';

  return (
    <GlobalProvider>
      <BrowserRouter>
        
        
        <Routes>
          
          <Route path= "/" element={<ContactsComponent/>} />
          <Route path= "/create" element={<CreateContactsComponent/>} />
         

        </Routes>
        
        
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
