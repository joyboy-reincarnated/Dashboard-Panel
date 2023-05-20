import React,{useState} from "react";
import {AppBar, Box, Drawer, IconButton, Toolbar, Typography} from '@mui/material';
import {Close, Menu} from '@mui/icons-material';
import Logo from '../images/logo.png';
import  stars from '../images/stars.png'
import '../styles/Header.css';
// import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";




const Header = () => {
    
const [sliderOpen,setSliderOpen] =useState(false);
  
const handleSlider =()=>{
    setSliderOpen(!sliderOpen);
}
//  slider menu 
const slider = (
    <Box>
        <IconButton sx={{m:2}} onClick={handleSlider}>
          <Close/>
        </IconButton>
        <Box>
            <ul className="navigation_slider_links">
                    <li>
                        <NavLink activeClassName={'active'} onClick={handleSlider} to={'/'}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink  onClick={handleSlider} to={'/products'}>Our Products</NavLink>
                    </li>
                    <li>
                        <NavLink  onClick={handleSlider} to={'/about'}>About</NavLink>
                    </li>
           </ul>      
        </Box>

    </Box>
)

  return(
    <Box>
        <AppBar sx={{bgcolor:'initial'}} component={'nav'}>
            <Toolbar className="navbar">
                <Typography sx={{mt:1}}>
                    <img src={Logo} width='200'  height={'60'} alt=""/>
                </Typography>
                <Box sx={{display:{md:'block',sm:'none',xs:'none'}}}>
                    <ul className="navigation_links">
                        <li>
                            <NavLink  onClick={handleSlider} activeclassname={'active'} to={'/'} >Home</NavLink>
                        </li>
                        <li>
                            <NavLink  onClick={handleSlider} to={'/products'}>Our Products</NavLink>
                        </li>
                        <li>
                            <NavLink  onClick={handleSlider} to={'/about'}>About</NavLink>
                        </li>
                    </ul>
                </Box>

                <Box  sx={{display:{xs:'none',sm:'block'}}}>
                <Box sx={{display:'flex', color:'black'}} >
                    <Typography sx={{mr:2}}>Log In</Typography>
                    <hr />
                    <Typography sx={{ml:2, display:'flex'}}>Create Account 
                            <img src={stars}  height={'30'} alt="" />
                    </Typography>
                </Box>
                </Box>
                    <Box sx={{color:'red',display:{sm:'block',md:'none'}}} >
                            <IconButton
                            aria-label="open drawer"
                            edge="start"
                            sx={{
                                mr:2,
                                display:{md:'none'},
                                "& svg":{
                                    fontSize:'2rem',
                                }
                                }}
                                onClick={handleSlider}
                            >
                                <Menu/>
                            </IconButton>
                    </Box>
            </Toolbar>
        </AppBar>

         <Box  component={'nav'}>
        <Drawer variant="temporary" anchor="right" open={sliderOpen}
        onClose={handleSlider}
         sx={{display:{xs:'block', sm:'block', md:'none'},"& .MuiDrawer-paper":{boxSizing:"border-box",
         width:"100vw"},
         }}
         >
          {slider}
        </Drawer>
        <Box>
         <Toolbar/>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
