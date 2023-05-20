import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Featues } from "../static/featues";
import '../styles/Card.css'

const Card = () => {
  return (
    <>
    {Featues.map(item=>(
    <Box className='card'>
        <Typography variant="h4" gutterBottom >{item.heading} </Typography>
        <Typography variant="body2">{item.desc} </Typography>
    </Box>
    ))}
    </>
  )
};

export default Card;
