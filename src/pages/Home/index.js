import React from 'react'
import { Box } from '@mui/material';
import Services from './Services/Services';
import Hero from './Hero/Hero';

const Home = () => {
  return (
    <Box>
      <Hero/>
      <Services/>
    </Box>
  )
}

export default Home