import React from 'react';
import { AppBar , Box, Toolbar, Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
   <Box sx={{flexGrow: 1}}>
       <AppBar position='static' color='secondary'>
           <Toolbar>
               <Typography variant='h5' component='div' sx={{flexGrow:1}} >
               Shopsy 

               </Typography>
               <Button component={NavLink} to ='/'  style={({isActive})=> {return{backgroundColor: isActive ? 'black' : ""}}}
               sx={{color: 'white', textTransform:'none'}}>Home</Button> 

               <Button component={NavLink} to ='/contact' 
               style={({isActive})=> {return{backgroundColor: isActive ? 'black' : ""}}}
                sx={{color: 'white' ,textTransform:'none'}}>Contact</Button>

<Button component={NavLink} to ='/log' 
               style={({isActive})=> {return{backgroundColor: isActive ? 'black' : ""}}}
                sx={{color: 'white',textTransform:'none'}}>Login/registaration</Button>

           </Toolbar>
       </AppBar>
   </Box>
      
    </>
  );
}

export default Navbar;
