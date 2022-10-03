// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';
import './Contact.css';


// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
    // Contact berisi foto, nama, telepon, dan email
    return (
    <>
    <div className='card'>
        <img src={data.photo} alt="foto" className="image"/>
        <div className='contactInfo'>
            <h1>{data.name}</h1>
            <h4 className='contactRev'>{data.phone}</h4>
            <h4 className='contactRev'>{data.email}</h4>
        </div>
    </div>
    </>
    );
};

export default Contact;
