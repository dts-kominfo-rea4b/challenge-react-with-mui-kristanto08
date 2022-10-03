// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import React, {useState} from "react";
import { TextField,Card, Typography, Button } from "@mui/material";
import { ConstructionRounded } from "@mui/icons-material";

const ContactForm = ({addContact}) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    const [newContact, setNewContact] = useState([
      {
        name: "",
        phone: "",
        email: "",
        photo: "",
      },
      
    ]
    )
  const onChangeHandler=(event)=>{
    const { name, value } = event.target;
    setNewContact({...newContact, [name]:value}) 
}
 

const onSubmitHandler=(event)=>{
  event.preventDefault();
  addContact(newContact);
  setNewContact({
        name: "",
        phone: "",
        email: "",
        photo: "",
      })
}

    return (
        <>
        <Card sx={{display:'flex', flexDirection:'column', backgroundColor:'#F3F1EB', marginRight:'50px'}} >
        <TextField 
        required
        id="standard-required"
        label="name"
        name="name"
        variant="outlined"
        onChange={onChangeHandler}
        value={newContact.name}
        sx={{marginBottom:'30px', marginTop:'20px', marginLeft:'10PX', marginRight:'10px'}}
        />
        <TextField 
        required
        id="standard-required"
        label="phone"
        name="phone"
        variant="outlined"
        onChange={onChangeHandler}
        value={newContact.phone}
        sx={{marginBottom:'30px',  marginLeft:'10PX', marginRight:'10px'}}
        />
        <TextField 
        required
        id="standard-required"
        label="email"
        name="email"
        variant="outlined"
        onChange={onChangeHandler}
        value={newContact.email}
        sx={{marginBottom:'30px',  marginLeft:'10PX', marginRight:'10px'}}
        />
        <TextField 
        required
        id="standard-required"
        label="photo"
        name="photo"
        variant="outlined"
        onChange={onChangeHandler}
        value={newContact.photo}
        sx={{marginBottom:'30px',  marginLeft:'10PX', marginRight:'10px'}}
        />
        <Button onClick={onSubmitHandler}>ADD NEW</Button>
        </Card>
        </>
        
    );
}

export default ContactForm;
