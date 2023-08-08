import React from "react";
import { TextField,Button } from '@mui/material'
import "./Contact.css";
function Contact() {
    return (
        <section className="pt-24 main">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-auto lg:py-0" style={{ backgroundImage: "bg1.jpeg" }}>
        <div style={{alignContent:"center"}} className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Contact</h1>
        <TextField variant='filled' label='Name' /><br /><br />
        <TextField variant='filled' label='Email' /><br /><br /> 
        <TextField variant='filled' label='Number' /><br /><br /> 
        <TextField variant='filled' label='Message' /><br /><br />  
        <Button variant='contained' color='secondary'>Contact</Button>
        </div>
        </div>
        </section>
    );
}

export default Contact;
