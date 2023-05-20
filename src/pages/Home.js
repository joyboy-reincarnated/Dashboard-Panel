import React from "react";
import { Box, Button, Toolbar, Typography } from "@mui/material";
import {NorthEast} from '@mui/icons-material';
import stars from "../images/stars.png";
import '../styles/Home.css'
import dash from '../images/dashboard.png'
import Card from "../components/Card";


const Home = () => {
  return (
    <Box className='home' sx={{ py: 2 ,px:6}} >
      <Box className="hero_section">
        <Toolbar sx={{width:'100%'}}>
          <Box className='hero_1'>
          <span
            style={{
              border: "2px solid skyblue",
              borderRadius: "100px",
              padding: " 0 10px",
              fontSize: "14px",
              display: "flex",
              width:'fit-content',
            }}
          >
            <Typography color="initial">
              <img src={stars} width={"30"} alt="" /> Trusted
            </Typography>
          </span>
          <Box className='heading'>
            <Typography variant="h2">
             Data that's Professional</Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi itaque voluptatem maiores explicabo libero tempore esse facilis possimus molestias ad.
            </Typography>
          </Box>
          <Box sx={{pt:2}}>
              <Button sx={{width:'180px',height:'50px',mr:2,"@media (max-width:600px) ":{
            mb:'2rem',
            width:'120px',
            height:'40px'
      }}} variant="outlined">Log In</Button>
              <Button sx={{width:'180px',height:'50px',"@media (max-width:600px) ":{
            mb:'2rem',
            width:'120px',
            height:'40px'
      }}} variant="contained">Sign Up</Button>
          </Box>
          </Box>
        </Toolbar>
      <Box>
        <Toolbar className="hero_2" >
          <img className="image" src={dash} width="550px" alt="" />
        </Toolbar>
      </Box>
      </Box>

      <Box className='feature_section' sx={{px:4,py:15,"@media (max-width:600px) ":{
           px:0,
           py:5
      }}}>
        <Typography variant="h2" sx={{fontWeight:500}}>Features</Typography>
        <Typography gutterBottom variant="body2"sx={{fontSize:'1.2rem',fontWeight:400}}>You have been looking for </Typography>
        <Box className='features' >
          <Card/>
        </Box>
      </Box>

      <Box  sx={{py:15,px:10,display:'flex',justifyContent:'space-between',"@media (max-width:600px) ":{
        flexDirection:'column',
        px:2,
        py:10
      }}}>
        <Box>
          <img className="image" src={dash} width='550px' alt="" />
        </Box>
        <Box sx={{width:'40rem',"@media (max-width:600px) ":{
        width:'300px',"& h2":{fontSize:"2.5rem"}
      }}}>
          <Typography variant="h2" gutterBottom
           sx={{fonweight:700}}>Finance can't hold you back now</Typography>
          <Typography variant="body2" sx={{fontSize:'1.2rem',fontWeight:100}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut autem numquam error provident quibusdam aliquam magnam iusto id pariatur labore.
          </Typography>
          <Button variant="contained" sx={{
            py:1.5,px:4,my:2
          }}>Connect Now</Button>
        </Box>
      </Box>

      <Box sx={{px:18,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',"@media (max-width:600px) ":{
           px:0,"& h2":{fontSize:'2.5rem',pb:'2rem'}
      }}}>
        <Typography variant="h2" sx={{fontWeight:700, textAlign:'center'}} gutterBottom>
          Your <span style={{color:'skyblue'}}>career</span> is waiting ahead click on the button and get started
        </Typography>
        <Button variant="contained" sx={{width:'270px',fontSize:'1.5rem',mb:5,py:1.5,"@media (max-width:600px) ":{
           py:1,
           width:'180px',
           fontSize:'1.1rem'
      }}}>Get Started<NorthEast/>
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
