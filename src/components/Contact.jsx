import React from "react";
import { TextField,Button } from '@mui/material'
import "./Contact.css";
function Contact() {
    return (
        <>
        <div className="contact">
            <div className="contacthead">
                <h1>contact</h1>
            </div>
        </div>
        <br />
        <TextField variant='outlined' label='Name' /><br /><br />
        <TextField variant='outlined' label='Email' /><br /><br /> 
        <TextField variant='outlined' label='Number' /><br /><br /> 
        <TextField variant='outlined' label='Message' /><br /><br />  
        <Button variant='contained' color='secondary'>Contact</Button>
        </>
    );
}

export default Contact;
