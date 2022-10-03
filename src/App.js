import './App.css';
import React, {useState} from 'react';
import Header from './components/Header';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import {Card} from '@mui/material';

// Uncomment untuk memuat daftar kontak
import contactsJSON from './data/contacts.json';
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const [contactOn, setContactOn] = useState(
    contactsJSON
  );

  const onAddContactHandler= (contact)=>{
    setContactOn([...contactOn,contact])
  }
 
  
  return (
    <div className="App">
      <Header/>
      <Card variant="outlined" className='cardMenu'>
        <div className="contactFormNew">
          <ContactForm  className="contactFormNew" addContact={onAddContactHandler}/>
        </div>
        <div className='contactNew'>
          {contactOn.map((contact, i) => {
            return <Contact key={i} data={contact} />;
          })}
        </div>
        
      </Card>
    </div>
  );
};

export default App;
