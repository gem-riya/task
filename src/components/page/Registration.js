import React from 'react'
import { TextField, Button, Box, Alert } from '@mui/material';
import { useState } from 'react';
import {  useNavigate } from 'react-router-dom';

const Registration = () => {
    const [error, setError] = useState({
        status: false,  //by default it is false
        message: "",
        type: ""
    })
    const navigate = useNavigate();  //when page will sucess it will go to some path
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const myActualData = {
            username:data.get('username'),
            email: data.get('email'),
            password: data.get('password'),
        }
        //validation 
        if (myActualData.username && myActualData.email && myActualData.password) {
            console.log(myActualData);

            document.getElementById('registration').reset()  // to reset the form after giving values
            setError({ status: true, msg: "congratulations", type: 'success' })
            navigate('/login') //when login sucess it will route to other path 
            
        } else {
            setError({ status: true, msg: "fill all fields", type: 'error' })
        }
    }
  return (
    <>
       <Box component='form' noValidate sx={{ mt: 1 }} id='registration' onSubmit={handleSubmit}>

            <TextField margin='normal' required fullWidth id='username' name='username' label='user name' placeholder='enter your name' />
            <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address' placeholder='enterid' />
            <TextField margin='normal' required fullWidth id='password' name='password' label='Password' type='password' placeholder='enter relevant password' />
            <Box textAlign='center'>
                <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Register </Button>
            </Box>
            
            {error.status ? <Alert severity={error.type} sx={{ mt: 5 }}>{error.message}</Alert> : ''}
        </Box>
    </>
  );
}

export default Registration;
